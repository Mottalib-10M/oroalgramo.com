/**
 * Tous les calculateurs du site, choisis par `tool`. Chacun appelle le moteur (lib/engine/metal.ts) et
 * lit le cours par useSpot() : premier rendu = relevé du build (HTML servi), puis cours du moment
 * (RECETTE §17.5). L'état ne s'écrit dans l'adresse qu'après une action (url-state.ts, §18.1).
 */
import { useEffect, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { useSpot, type Spot } from '../../lib/live';
import { P, SNAPSHOT, type Metal } from '../../lib/engine/params';
import { metalValue, gramPrice, leyTable, toGrams, offerShare, lotValue, premium, isInvestmentGold, goldGainTax, itpOnPurchase, cashAllowed, karatOfLey, isLegalLey, OZ, type Unit } from '../../lib/engine/metal';
import { eur, eur2, pct, grams, clock, dec, type Lang } from '../../lib/money';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import { exampleOffer } from '../../lib/exemple';
import { SpotLine, Row, Frame, Big, Table, LeySelect, SilverSelect, UnitSelect, useExample, ExampleNote, tr } from './common';

export interface ToolArgs { tool: string; lang: Lang; mini?: boolean; title?: string; idp?: string; ley?: number; metal?: string; grams?: number; offer?: number; kind?: string }

const OFFER_PATH: Record<Lang, string> = { es: '/es/comprobar-oferta-compro-oro/', en: '/en/check-gold-buyer-offer/' };
const timeOf = (s: Spot, lang: Lang, m: Metal = 'XAU') => clock(s[m].live ? s[m].at : SNAPSHOT.at[m], lang);
const NO_FAIR = (lang: Lang) => tr(lang)('¿Es buena oferta? Ninguna ley ni organismo publica cuánto pagan los compradores: la única vara de medir es un segundo presupuesto. Pide precio por las mismas piezas en otro comercio el mismo día; gana el porcentaje más alto. El 100 % sería todo el valor del metal.', 'Is it a good offer? No law or agency publishes what buyers pay, so the only yardstick is a second quote: ask another buyer to price the same pieces the same day. The highest share wins. 100% would be every cent the metal is worth.');
const RANGE = (v: number, lang: Lang) => tr(lang)(`Entre el 60 % y el 90 % de este valor, un comprador pagaría de ${eur(v * 0.6, lang)} a ${eur(v * 0.9, lang)}. Son dos puntos de referencia, no un precio de mercado.`, `At 60% to 90% of this value, a buyer would pay ${eur(v * 0.6, lang)} to ${eur(v * 0.9, lang)}. Those are two reference points, not a market rate.`);

const MINI: Record<string, [string, string]> = {
  offer: ['Comprueba una oferta por este oro', 'Check an offer for this gold'],
  lot: ['Valora un lote de piezas de leyes distintas', 'Value a lot of pieces of mixed fineness'],
  units: ['Convierte gramos, onzas y kilos', 'Convert grams, ounces and kilos'],
  gains: ['IRPF por la venta', 'Income tax on the sale'],
  itp: ['El ITP que paga el comprador', 'The transfer tax the buyer pays'],
  cash: ['¿Te pueden pagar en efectivo?', 'Can you be paid in cash?'],
  compare: ['Compara dos o tres presupuestos', 'Compare two or three quotes'],
  stamp: ['Lee un contraste', 'Read a hallmark'],
  silver: ['Valor de una pieza de plata', 'Value of a silver piece'],
  inversion: ['¿Es oro de inversión?', 'Is it investment gold?'],
};

export default function Tool(a0: ToolArgs) {
  const m = MINI[a0.tool];
  const a = { ...a0, title: a0.title ?? (a0.mini && m ? (a0.lang === 'en' ? m[1] : m[0]) : undefined) };
  switch (a.tool) {
    case 'board': return <Board {...a} />;
    case 'ley': return <LeyTool {...a} />;
    case 'offer': return <Offer {...a} />;
    case 'lot': return <Lot {...a} />;
    case 'compare': return <Compare {...a} />;
    case 'units': return <Units {...a} />;
    case 'silver': return <Silver {...a} />;
    case 'gains': return <Gains {...a} />;
    case 'itp': return <Itp {...a} />;
    case 'cash': return <Cash {...a} />;
    case 'inversion': return <Inversion {...a} />;
    case 'stamp': return <Stamp {...a} />;
    default: return null;
  }
}

/* ---------- Accueil : prix du gramme par ley, valeur d'un poids ---------- */
function Board({ lang, mini, title, idp = 'b', ley: l0 = 750, grams: g0 = 10 }: ToolArgs) {
  const L = tr(lang);
  const [ley, setLey] = useState(l0);
  const [w, setW] = useState(g0);
  const [u, setU] = useState<Unit>('g');
  const [offer, setOffer] = useState(0);
  const { example, typed } = useExample(['l', 'w', 'u', 'o']);
  useEffect(() => { const q = readParams(location.search); const ll = num(q, 'l', l0); if (isLegalLey(ll, 'oro')) setLey(ll); setW(num(q, 'w', g0)); const uu = str(q, 'u', 'g'); if (['g', 'ozt'].includes(uu)) setU(uu as Unit); setOffer(num(q, 'o', 0)); }, []);
  useEffect(() => { updateURL({ l: ley, w, u, o: offer || undefined }); }, [ley, w, u, offer]);
  const spot = useSpot(['XAU']);
  const oz = spot.XAU.eurPerOz;
  const value = metalValue(toGrams(w, u), ley, oz);
  const s = offerShare(offer, value);
  const us = u === 'g' ? 'g' : 'oz';
  return (
    <Frame lang={lang} mini={mini} title={title}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: ${dec(w, 3, lang)} ${us} de oro de ${ley}. Escribe el peso de tu pieza.`, `Example: ${dec(w, 3, lang)} ${us} of ${ley} gold. Type the weight of your piece.`)}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><LeySelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} /><NumberField id={`${idp}-w`} label={L('Peso', 'Weight')} value={w} onChange={typed(setW)} unit={us} decimals={3} max={100000} /></div>
        <UnitSelect id={`${idp}-u`} value={u} onChange={typed(setU)} lang={lang} units={['g', 'ozt']} />
        <p className="-mt-2 text-xs text-navy-600">{L('La ley es el número de tres cifras grabado en la pieza (750 = 18 kilates). ¿Sin contraste? Elige 375 para no sobrevalorarla. Una báscula de cocina en gramos sirve.', 'The fineness is the three-digit number stamped on the piece (750 = 18 karat). No stamp? Choose 375 so the value is not too high. A kitchen scale in grams will do.')}</p>
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L(`${dec(w, 3, lang)} ${us} de oro de ${ley} valen`, `${dec(w, 3, lang)} ${us} of ${ley} gold is worth`)}`} value={eur(value, lang)} sub={<>{L(`El metal, al precio de las ${timeOf(spot, lang)}. Un comprador paga menos, porque tiene que fundirlo y refinarlo.`, `The metal itself, at the price of ${timeOf(spot, lang)}. A buyer pays less, because it has to melt and refine it.`)}</>} />
        <p className="mt-2 text-sm font-medium text-navy-900">{RANGE(value, lang)}</p>
        <Table caption={L('Precio del gramo de oro por ley', 'Gold price per gram by fineness')}>
          {leyTable(oz).map((r) => <Row key={r.ley} label={L(`Ley ${r.ley} (${r.k} k): 1 g`, `${r.ley} (${r.k}k): 1 g`)} value={eur2(r.gram, lang)} strong={r.ley === ley} />)}
        </Table>
      </>}
      foot={mini ? undefined : <div className="mt-4 grid gap-3 border-t border-accent-200 pt-4 md:grid-cols-2">
        <div>
          <NumberField id={`${idp}-o`} label={L('¿Ya tienes una oferta? (opcional)', 'Already have an offer? (optional)')} value={offer} onChange={typed(setOffer)} unit="€" decimals={2} max={10000000} help={L('El total por todas las piezas. ¿Te la dieron por gramo? Multiplícala por el peso.', 'The total for all the pieces. Quoted per gram? Multiply by the weight.')} />
          {offer > 0 && <div aria-live="polite" className="mt-2">
            <p className="text-base font-semibold text-navy-900">{L(`Tu oferta de ${eur(offer, lang)} paga el ${pct(s.share, 1, lang)} del valor de este oro`, `Your offer of ${eur(offer, lang)} pays ${pct(s.share, 1, lang)} of this gold value`)}{s.gap > 0 ? L(`; el comprador se queda ${eur(s.gap, lang)}.`, `; the buyer keeps ${eur(s.gap, lang)}.`) : '.'}</p>
            <p className="mt-1 text-sm text-navy-700">{NO_FAIR(lang)}</p>
            <p className="mt-1 text-sm"><a href={`${OFFER_PATH[lang]}?l=${ley}&g=${dec(toGrams(w, u), 3, 'en')}&o=${offer}`} className="font-medium text-accent-700 underline hover:text-navy-900">{L('Qué comprobar antes de aceptar →', 'What to check before you say yes →')}</a></p>
          </div>}
        </div>
        <SpotLine spot={spot} metals={['XAU']} lang={lang} />
      </div>} />
  );
}

/* ---------- Page d'une ley ---------- */
function LeyTool({ lang, mini, title, idp = 'c', ley = 750, grams: g0 = 10 }: ToolArgs) {
  const L = tr(lang);
  const [w, setW] = useState(g0);
  const [u, setU] = useState<Unit>('g');
  const { example, typed } = useExample(['w', 'u']);
  useEffect(() => { const q = readParams(location.search); setW(num(q, 'w', g0)); const uu = str(q, 'u', 'g'); if (['g', 'ozt'].includes(uu)) setU(uu as Unit); }, []);
  useEffect(() => { updateURL({ w, u }); }, [w, u]);
  const spot = useSpot(['XAU']);
  const oz = spot.XAU.eurPerOz;
  const g = toGrams(w, u);
  const value = metalValue(g, ley, oz);
  const k = karatOfLey(ley);
  const us = u === 'g' ? 'g' : 'oz';
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: ${dec(w, 3, lang)} ${us}. Escribe el peso de tu pieza de ${ley}.`, `Example: ${dec(w, 3, lang)} ${us}. Type the weight of your ${ley} piece.`)}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><NumberField id={`${idp}-w`} label={L(`Peso de tu oro de ${ley}`, `Weight of your ${ley} gold`)} value={w} onChange={typed(setW)} unit={us} decimals={3} max={100000} />
          <UnitSelect id={`${idp}-u`} value={u} onChange={typed(setU)} lang={lang} units={['g', 'ozt']} /></div>
        <p className="-mt-2 text-xs text-navy-600">{L('Las piedras, los cierres y los muelles pesan y no son oro: el valor es un máximo.', 'Stones, clasps and springs weigh something and are not gold, so the value is a ceiling.')}</p>
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L(`${dec(w, 3, lang)} ${us} de oro de ${ley} (${dec(k, 1, lang)} k) valen`, `${dec(w, 3, lang)} ${us} of ${ley} gold (${dec(k, 1, lang)}k) is worth`)}`} value={eur(value, lang)} sub={L(`El metal, al precio de las ${timeOf(spot, lang)}. Un comprador paga menos.`, `The metal itself, at the price of ${timeOf(spot, lang)}. A buyer pays less.`)} />
        <p className="mt-2 text-sm font-medium text-navy-900">{RANGE(value, lang)}</p>
        <Table caption={L(`Valor del oro de ${ley}`, `${ley} gold value`)}>
          <Row label={L('Oro puro que contiene', 'Pure gold inside')} value={grams(g * ley / 1000, 3, lang)} />
          <Row label={L(`1 gramo de oro de ${ley}`, `1 gram of ${ley} gold`)} value={eur2(gramPrice(ley, oz), lang)} strong />
          <Row label={L(`1 onza troy de oro de ${ley}`, `1 troy ounce of ${ley} gold`)} value={eur(metalValue(OZ, ley, oz), lang)} />
        </Table>
      </>} />
  );
}

/* ---------- Vérificateur d'offre ---------- */
function Offer({ lang, mini, title, idp = 'o', ley: l0 = 750, grams: g0 = 10, offer: given }: ToolArgs) {
  const L = tr(lang);
  const o0 = given ?? exampleOffer(g0, l0);
  const [ley, setLey] = useState(l0);
  const [g, setG] = useState(g0);
  const [offer, setOffer] = useState(o0);
  const { example, typed } = useExample(['l', 'g', 'o']);
  useEffect(() => { const q = readParams(location.search); const ll = num(q, 'l', l0); if (isLegalLey(ll, 'oro')) setLey(ll); const gg = num(q, 'g', g0); setG(gg); setOffer(num(q, 'o', o0)); }, []);
  useEffect(() => { updateURL({ l: ley, g, o: offer }); }, [ley, g, offer]);
  const spot = useSpot(['XAU']);
  const value = metalValue(g, ley, spot.XAU.eurPerOz);
  const s = offerShare(offer, value);
  const perGram = g > 0 ? offer / g : 0;
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: ${eur(offer, lang)} por ${dec(g, 3, lang)} g de ${ley}. Escribe tu oferta.`, `Example: ${eur(offer, lang)} for ${dec(g, 3, lang)} g of ${ley}. Type your own offer.`)}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><LeySelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} /><NumberField id={`${idp}-g`} label={L('Peso que anotó el comprador', 'Weight the buyer wrote down')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={100000} /></div>
        <NumberField id={`${idp}-o`} label={L('Lo que te ofrecen, en total', 'What you are offered, in total')} value={offer} onChange={typed(setOffer)} unit="€" decimals={2} max={10000000} help={L('Si te lo dieron por gramo, multiplícalo por el peso.', 'If it was quoted per gram, multiply by the weight.')} />
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('la oferta paga', 'the offer pays')}`} value={pct(s.share, 1, lang)} sub={L(`del valor del metal (${eur(value, lang)} a las ${timeOf(spot, lang)}).`, `of the metal value (${eur(value, lang)} at ${timeOf(spot, lang)}).`)} />
        <Table caption={L('Detalle de la oferta', 'Offer breakdown')}>
          <Row label={L('Valor del oro', 'Gold value')} value={eur(value, lang)} />
          <Row label={L('Oferta', 'Offer')} value={eur(offer, lang)} />
          <Row label={L('Lo que se queda el comprador', 'What the buyer keeps')} value={eur(Math.max(0, s.gap), lang)} strong />
          <Row label={L('Oferta por gramo', 'Offer per gram')} value={eur2(perGram, lang)} />
          <Row label={L(`Valor de 1 g de ${ley}`, `Value of 1 g of ${ley}`)} value={eur2(gramPrice(ley, spot.XAU.eurPerOz), lang)} />
        </Table>
        <p className={`mt-2 text-sm ${s.share > 1 ? 'text-amber-800' : 'text-navy-700'}`}>{s.share > 1 ? L('Más de lo que vale el metal: revisa el peso y la ley anotados, o pregunta si paga la pieza como joya y no como metal.', 'More than the metal is worth: check the weight and fineness written down, or ask whether the buyer is paying for the piece as jewellery rather than as metal.') : NO_FAIR(lang)}</p>
      </>} />
  );
}

/* ---------- Lot de pièces de leyes différentes ---------- */
function Lot({ lang, mini, title, idp = 'lt' }: ToolArgs) {
  const L = tr(lang);
  const [rows, setRows] = useState([{ ley: 750, g: 8 }, { ley: 585, g: 4 }, { ley: 375, g: 3 }]);
  const { example, typed } = useExample(['a', 'b', 'c']);
  const set = (i: number, k: 'ley' | 'g', v: number) => setRows((r) => r.map((x, j) => (j === i ? { ...x, [k]: v } : x)));
  useEffect(() => { const q = readParams(location.search); const keys = ['a', 'b', 'c']; const next = rows.map((r, i) => { const v = str(q, keys[i], ''); const [l, g] = v.split('-').map(Number); return isLegalLey(l, 'oro') && Number.isFinite(g) ? { ley: l, g } : r; }); setRows(next); }, []);
  useEffect(() => { updateURL({ a: `${rows[0].ley}-${rows[0].g}`, b: `${rows[1].ley}-${rows[1].g}`, c: `${rows[2].ley}-${rows[2].g}` }); }, [rows]);
  const spot = useSpot(['XAU']);
  const r = lotValue(rows.map((x) => ({ grams: x.g, ley: x.ley })), spot.XAU.eurPerOz);
  const totalG = rows.reduce((s, x) => s + Math.max(0, x.g), 0);
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L('Ejemplo: tres grupos de piezas. Separa tus joyas por el número grabado y pesa cada grupo.', 'Example: three groups of pieces. Sort your jewellery by the stamped number and weigh each group.')}</ExampleNote>}
        {rows.map((x, i) => (
          <div key={i} className="grid gap-4 sm:grid-cols-2 sm:gap-y-0">
            <LeySelect id={`${idp}-l${i}`} value={x.ley} onChange={typed((v: number) => set(i, 'ley', v))} lang={lang} label={L(`Grupo ${i + 1}: ley`, `Group ${i + 1}: fineness`)} />
            <NumberField id={`${idp}-g${i}`} label={L(`Grupo ${i + 1}: peso`, `Group ${i + 1}: weight`)} value={x.g} onChange={typed((v: number) => set(i, 'g', v))} unit="g" decimals={3} max={100000} />
          </div>
        ))}
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L(`el lote de ${dec(totalG, 3, lang)} g vale`, `the ${dec(totalG, 3, lang)} g lot is worth`)}`} value={eur(r.value, lang)} sub={L(`En metal, a las ${timeOf(spot, lang)}. Pide que el comprador pese y pague cada grupo por separado.`, `In metal, at ${timeOf(spot, lang)}. Ask the buyer to weigh and pay each group separately.`)} />
        <Table caption={L('Detalle del lote', 'Lot breakdown')}>
          {rows.map((x, i) => <Row key={i} label={L(`Grupo ${i + 1}: ${dec(x.g, 3, lang)} g de ${x.ley}`, `Group ${i + 1}: ${dec(x.g, 3, lang)} g of ${x.ley}`)} value={eur(metalValue(x.g, x.ley, spot.XAU.eurPerOz), lang)} />)}
          <Row label={L('Oro puro del lote', 'Pure gold in the lot')} value={grams(r.fineGrams, 3, lang)} strong />
        </Table>
        <p className="mt-2 text-sm text-navy-700">{L(`Si te pagan todo como si fuera de ${375}, pierdes la diferencia de los grupos de ley más alta.`, `If the whole lot is paid as ${375}, you lose the difference on the higher-fineness groups.`)}</p>
      </>} />
  );
}

/* ---------- Comparer deux ou trois devis ---------- */
function Compare({ lang, mini, title, idp = 'cp', ley: l0 = 750, grams: g0 = 10 }: ToolArgs) {
  const L = tr(lang);
  const [ley, setLey] = useState(l0);
  const [g, setG] = useState(g0);
  const base = metalValue(g0, l0, SNAPSHOT.eurPerOz.XAU);
  const [q, setQ] = useState([Math.round(base * 0.65 / 5) * 5, Math.round(base * 0.8 / 5) * 5, 0]);
  const { example, typed } = useExample(['l', 'g', 'q1']);
  useEffect(() => { const p = readParams(location.search); const ll = num(p, 'l', l0); if (isLegalLey(ll, 'oro')) setLey(ll); setG(num(p, 'g', g0)); if (p.has('q1')) setQ([num(p, 'q1', 0), num(p, 'q2', 0), num(p, 'q3', 0)]); }, []);
  useEffect(() => { updateURL({ l: ley, g, q1: q[0], q2: q[1] || undefined, q3: q[2] || undefined }); }, [ley, g, q]);
  const spot = useSpot(['XAU']);
  const value = metalValue(g, ley, spot.XAU.eurPerOz);
  const best = Math.max(...q);
  const names = [L('Comercio A', 'Buyer A'), L('Comercio B', 'Buyer B'), L('Comercio C', 'Buyer C')];
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L('Ejemplo: dos presupuestos por las mismas piezas. Escribe los tuyos.', 'Example: two quotes for the same pieces. Type your own.')}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><LeySelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} /><NumberField id={`${idp}-g`} label={L('Peso', 'Weight')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={100000} /></div>
        {q.map((x, i) => <NumberField key={i} id={`${idp}-q${i}`} label={`${names[i]}${i === 2 ? L(' (opcional)', ' (optional)') : ''}`} value={x} onChange={typed((v: number) => setQ((o) => o.map((y, j) => (j === i ? v : y))))} unit="€" decimals={2} max={10000000} />)}
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('la mejor oferta paga', 'the best offer pays')}`} value={pct(value > 0 ? best / value : 0, 1, lang)} sub={L(`del metal (${eur(value, lang)} a las ${timeOf(spot, lang)}).`, `of the metal (${eur(value, lang)} at ${timeOf(spot, lang)}).`)} />
        <Table caption={L('Presupuestos comparados', 'Quotes compared')}>
          {q.map((x, i) => x > 0 ? <Row key={i} label={names[i]} value={`${eur(x, lang)} · ${pct(value > 0 ? x / value : 0, 1, lang)}`} strong={x === best} /> : null)}
          <Row label={L('Diferencia entre la mejor y la peor', 'Gap between best and worst')} value={eur(best - Math.min(...q.filter((x) => x > 0)), lang)} />
        </Table>
      </>} />
  );
}

/* ---------- Unités : gramme, once troy, kilo ---------- */
function Units({ lang, mini, title, idp = 'u' }: ToolArgs) {
  const L = tr(lang);
  const [v, setV] = useState(1);
  const [u, setU] = useState<Unit>('ozt');
  const [ley, setLey] = useState(999);
  const { example, typed } = useExample(['v', 'u']);
  useEffect(() => { const q = readParams(location.search); setV(num(q, 'v', 1)); const uu = str(q, 'u', 'ozt'); if (['g', 'ozt', 'kg'].includes(uu)) setU(uu as Unit); }, []);
  useEffect(() => { updateURL({ v, u }); }, [v, u]);
  const spot = useSpot(['XAU']);
  const g = toGrams(v, u);
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L('Ejemplo: una onza troy de oro fino. Cambia la cantidad o la unidad.', 'Example: one troy ounce of fine gold. Change the amount or the unit.')}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><NumberField id={`${idp}-v`} label={L('Cantidad', 'Amount')} value={v} onChange={typed(setV)} decimals={3} max={100000} /><UnitSelect id={`${idp}-u`} value={u} onChange={typed(setU)} lang={lang} /></div>
        <LeySelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} />
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('equivale a', 'equals')}`} value={grams(g, 3, lang)} sub={L(`Con ley ${ley}, ese peso vale ${eur(metalValue(g, ley, spot.XAU.eurPerOz), lang)} a las ${timeOf(spot, lang)}.`, `At ${ley} fineness, that weight is worth ${eur(metalValue(g, ley, spot.XAU.eurPerOz), lang)} at ${timeOf(spot, lang)}.`)} />
        <Table caption={L('Conversiones', 'Conversions')}>
          <Row label={L('Gramos', 'Grams')} value={dec(g, 3, lang)} />
          <Row label={L('Onzas troy', 'Troy ounces')} value={dec(g / OZ, 4, lang)} />
          <Row label={L('Kilos', 'Kilograms')} value={dec(g / 1000, 5, lang)} />
          <Row label={L('Precio de 1 onza troy de oro fino', 'Price of 1 troy ounce of fine gold')} value={eur(spot.XAU.eurPerOz, lang)} />
          <Row label={L('Precio de 1 kilo de oro fino', 'Price of 1 kilo of fine gold')} value={eur(metalValue(1000, 1000, spot.XAU.eurPerOz), lang)} />
        </Table>
      </>} />
  );
}

/* ---------- Argent ---------- */
function Silver({ lang, mini, title, idp = 's', ley: l0 = 925, grams: g0 = 100 }: ToolArgs) {
  const L = tr(lang);
  const [ley, setLey] = useState(l0);
  const [g, setG] = useState(g0);
  const { example, typed } = useExample(['l', 'g']);
  useEffect(() => { const q = readParams(location.search); const ll = num(q, 'l', l0); if (isLegalLey(ll, 'plata')) setLey(ll); setG(num(q, 'g', g0)); }, []);
  useEffect(() => { updateURL({ l: ley, g }); }, [ley, g]);
  const spot = useSpot(['XAG']);
  const oz = spot.XAG.eurPerOz;
  const value = metalValue(g, ley, oz);
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAG']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: ${dec(g, 3, lang)} g de plata de ${ley}. Escribe el peso de tu pieza.`, `Example: ${dec(g, 3, lang)} g of ${ley} silver. Type the weight of your piece.`)}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><SilverSelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} /><NumberField id={`${idp}-g`} label={L('Peso', 'Weight')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={1000000} /></div>
        <p className="-mt-2 text-xs text-navy-600">{L('Una bandeja o unos cubiertos pueden llevar relleno o partes de otro metal: el valor es un máximo.', 'A tray or a set of cutlery can have weighted or non-silver parts, so the value is a ceiling.')}</p>
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L(`${dec(g, 3, lang)} g de plata de ${ley} valen`, `${dec(g, 3, lang)} g of ${ley} silver is worth`)}`} value={eur(value, lang)} sub={L(`El metal, a las ${timeOf(spot, lang, 'XAG')}. Un comprador paga menos.`, `The metal itself, at ${timeOf(spot, lang, 'XAG')}. A buyer pays less.`)} />
        <Table caption={L('Precio del gramo de plata por ley', 'Silver price per gram by fineness')}>
          {P.silver.map((l) => <Row key={l} label={L(`Plata ${l}: 1 g`, `${l} silver: 1 g`)} value={eur2(gramPrice(l, oz), lang)} strong={l === ley} />)}
          <Row label={L('1 kilo de plata de esta ley', '1 kilo of silver at this fineness')} value={eur(metalValue(1000, ley, oz), lang)} />
        </Table>
      </>} />
  );
}

/* ---------- IRPF sur la vente ---------- */
function Gains({ lang, mini, title, idp = 'gn' }: ToolArgs) {
  const L = tr(lang);
  const [sale, setSale] = useState(2500);
  const [cost, setCost] = useState(900);
  const [other, setOther] = useState(0);
  const { example, typed } = useExample(['v', 'c', 'x']);
  useEffect(() => { const q = readParams(location.search); setSale(num(q, 'v', 2500)); setCost(num(q, 'c', 900)); setOther(num(q, 'x', 0)); }, []);
  useEffect(() => { updateURL({ v: sale, c: cost, x: other || undefined }); }, [sale, cost, other]);
  const r = goldGainTax({ sale, cost, otherSavings: other });
  return (
    <Frame lang={lang} mini={mini} title={title}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: vendes por ${eur(sale, lang)} oro que te costó ${eur(cost, lang)}. Escribe tus cifras.`, `Example: you sell for ${eur(sale, lang)} gold that cost you ${eur(cost, lang)}. Type your own figures.`)}</ExampleNote>}
        <NumberField id={`${idp}-v`} label={L('Precio de venta', 'Sale price')} value={sale} onChange={typed(setSale)} unit="€" decimals={2} max={10000000} />
        <NumberField id={`${idp}-c`} label={L('Lo que pagaste (o el valor declarado si lo heredaste)', 'What you paid (or the declared value if inherited)')} value={cost} onChange={typed(setCost)} unit="€" decimals={2} max={10000000} help={L('Con la factura, más los gastos de compra. Herencia o donación: el valor del impuesto de sucesiones.', 'From the invoice, plus purchase costs. Inheritance or gift: the value used for inheritance tax.')} />
        <NumberField id={`${idp}-x`} label={L('Otras ganancias del ahorro del año (opcional)', 'Other savings income this year (optional)')} value={other} onChange={typed(setOther)} unit="€" max={10000000} help={L('Intereses, dividendos, otras ventas: suben el tramo.', 'Interest, dividends, other sales: they push you up the scale.')} />
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('IRPF estimado por esta venta', 'estimated income tax on this sale')}`} value={eur(r.tax, lang)} sub={r.gain > 0 ? L(`Sobre una ganancia de ${eur(r.gain, lang)}, a un tipo medio del ${pct(r.rate, 1, lang)}.`, `On a gain of ${eur(r.gain, lang)}, at an average rate of ${pct(r.rate, 1, lang)}.`) : L('Sin ganancia: no hay impuesto. Una pérdida se puede compensar con otras ganancias.', 'No gain, no tax. A loss can be set against other gains.')} />
        <Table caption={L('Cálculo', 'Working')}>
          <Row label={L('Ganancia patrimonial', 'Capital gain')} value={eur(r.gain, lang)} />
          <Row label={L('Impuesto (escala del ahorro)', 'Tax (savings scale)')} value={eur(r.tax, lang)} strong />
          <Row label={L('Te queda', 'You keep')} value={eur(r.net, lang)} />
        </Table>
        <p className="mt-2 text-xs text-navy-600">{L('Escala total del Estado y la comunidad. Una joya comprada antes de 1995 puede tener una reducción que esta cuenta no aplica.', 'Combined state and regional scale. A piece bought before 1995 may get a reduction this sum does not apply.')}</p>
      </>} />
  );
}

/* ---------- ITP payé par l'acheteur ---------- */
function Itp({ lang, mini, title, idp = 'it', ley: l0 = 750, grams: g0 = 10 }: ToolArgs) {
  const L = tr(lang);
  const [ley, setLey] = useState(l0);
  const [g, setG] = useState(g0);
  const [offer, setOffer] = useState(exampleOffer(g0, l0));
  const [rate, setRate] = useState(P.itp.defaultMueblesRate * 100);
  const { example, typed } = useExample(['l', 'g', 'o', 't']);
  useEffect(() => { const q = readParams(location.search); const ll = num(q, 'l', l0); if (isLegalLey(ll, 'oro')) setLey(ll); setG(num(q, 'g', g0)); setOffer(num(q, 'o', exampleOffer(g0, l0))); setRate(num(q, 't', P.itp.defaultMueblesRate * 100)); }, []);
  useEffect(() => { updateURL({ l: ley, g, o: offer, t: rate }); }, [ley, g, offer, rate]);
  const spot = useSpot(['XAU']);
  const value = metalValue(g, ley, spot.XAU.eurPerOz);
  const tax = itpOnPurchase(offer, rate / 100);
  const margin = value - offer - tax;
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: oferta de ${eur(offer, lang)} por ${dec(g, 3, lang)} g de ${ley}. Escribe la tuya.`, `Example: an offer of ${eur(offer, lang)} for ${dec(g, 3, lang)} g of ${ley}. Type your own.`)}</ExampleNote>}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><LeySelect id={`${idp}-l`} value={ley} onChange={typed(setLey)} lang={lang} /><NumberField id={`${idp}-g`} label={L('Peso', 'Weight')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={100000} /></div>
        <NumberField id={`${idp}-o`} label={L('Lo que te pagan', 'What you are paid')} value={offer} onChange={typed(setOffer)} unit="€" decimals={2} max={10000000} />
        <NumberField id={`${idp}-t`} label={L('Tipo del ITP en tu comunidad', 'Transfer tax rate in your region')} value={rate} onChange={typed(setRate)} unit="%" decimals={2} max={20} help={L('Por defecto, el 4 % estatal para bienes muebles; tu comunidad puede fijar otro.', 'Defaults to the 4% state rate for movable goods; your region may set another.')} />
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('ITP que paga el comprador', 'transfer tax the buyer pays')}`} value={eur(tax, lang)} sub={L('Lo paga quien compra, no tú: no se descuenta de tu precio de forma legal, aunque pesa en su oferta.', 'The buyer pays it, not you: it is not legally deducted from your price, though it weighs on the offer.')} />
        <Table caption={L('Reparto del valor del metal', 'Where the metal value goes')}>
          <Row label={L('Valor del oro', 'Gold value')} value={eur(value, lang)} />
          <Row label={L('Lo que recibes', 'What you get')} value={`${eur(offer, lang)} · ${pct(value > 0 ? offer / value : 0, 1, lang)}`} strong />
          <Row label="ITP" value={eur(tax, lang)} />
          <Row label={L('Margen bruto del comprador', "Buyer's gross margin")} value={eur(margin, lang)} />
        </Table>
      </>} />
  );
}

/* ---------- Espèces : Ley 7/2012 ---------- */
function Cash({ lang, mini, title, idp = 'ca' }: ToolArgs) {
  const L = tr(lang);
  const [amount, setAmount] = useState(850);
  const { example, typed } = useExample(['a']);
  useEffect(() => { const q = readParams(location.search); setAmount(num(q, 'a', 850)); }, []);
  useEffect(() => { updateURL({ a: amount }); }, [amount]);
  const ok = cashAllowed(amount);
  return (
    <Frame lang={lang} mini={mini} title={title}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: una venta de ${eur(amount, lang)}. Escribe el total de la operación.`, `Example: a sale of ${eur(amount, lang)}. Type the total of the deal.`)}</ExampleNote>}
        <NumberField id={`${idp}-a`} label={L('Total de la operación con el comercio', 'Total of the deal with the shop')} value={amount} onChange={typed(setAmount)} unit="€" decimals={2} max={10000000} help={L('Si se divide en varios pagos, súmalos: la ley los cuenta juntos.', 'If it is split into several payments, add them up: the law counts them together.')} />
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('¿En efectivo?', 'In cash?')}`} value={ok ? L('Sí, se permite', 'Yes, allowed') : L('No: por transferencia', 'No: by bank transfer')} sub={ok ? L(`Por debajo de ${eur(P.cash.limit, lang)}, el comercio puede pagarte en billetes.`, `Below ${eur(P.cash.limit, lang)}, the shop may pay you in notes.`) : L(`Desde ${eur(P.cash.limit, lang)}, un comercio no puede pagar en efectivo: pide transferencia o cheque y guarda el justificante ${P.cash.keepYears} años.`, `From ${eur(P.cash.limit, lang)}, a business may not pay in cash: ask for a transfer or cheque and keep the proof for ${P.cash.keepYears} years.`)} />
      </>} />
  );
}

/* ---------- Or d'investissement : TVA et prime ---------- */
function Inversion({ lang, mini, title, idp = 'iv' }: ToolArgs) {
  const L = tr(lang);
  const [kind, setKind] = useState<'lingote' | 'moneda'>('lingote');
  const [ley, setLey] = useState(999.9);
  const [g, setG] = useState(10);
  const [price, setPrice] = useState(Math.round(metalValue(10, 999.9, SNAPSHOT.eurPerOz.XAU) * 1.04 / 5) * 5);
  const [year, setYear] = useState(2020);
  const { example, typed } = useExample(['k', 'l', 'g', 'p']);
  useEffect(() => { const q = readParams(location.search); const kk = str(q, 'k', 'lingote'); if (kk === 'lingote' || kk === 'moneda') setKind(kk); setLey(num(q, 'l', 999.9)); setG(num(q, 'g', 10)); if (q.has('p')) setPrice(num(q, 'p', 0)); setYear(num(q, 'y', 2020)); }, []);
  useEffect(() => { updateURL({ k: kind, l: ley, g, p: price, y: kind === 'moneda' ? year : undefined }); }, [kind, ley, g, price, year]);
  const spot = useSpot(['XAU']);
  const value = metalValue(g, ley, spot.XAU.eurPerOz);
  const prem = premium(price, value);
  const inv = isInvestmentGold({ kind, ley, year, premium: prem });
  const why = { ley: L(`ley por debajo de ${kind === 'lingote' ? P.iva.barMinLey : P.iva.coinMinLey}`, `fineness below ${kind === 'lingote' ? P.iva.barMinLey : P.iva.coinMinLey}`), year: L(`acuñada en ${P.iva.coinAfterYear} o antes`, `struck in ${P.iva.coinAfterYear} or earlier`), tender: L('sin curso legal', 'never legal tender'), premium: L(`precio más de un ${pct(P.iva.coinMaxPremium, 0, lang)} por encima del oro que contiene`, `price more than ${pct(P.iva.coinMaxPremium, 0, lang)} above its gold`) };
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={['XAU']} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L(`Ejemplo: lingote de ${dec(g, 3, lang)} g a ${eur(price, lang)}. Escribe tu pieza y su precio.`, `Example: a ${dec(g, 3, lang)} g bar at ${eur(price, lang)}. Type your piece and its price.`)}</ExampleNote>}
        <Toggle id={`${idp}-k`} label={L('¿Qué es?', 'What is it?')} value={kind} onChange={typed((v: string) => setKind(v as 'lingote' | 'moneda'))} options={[{ value: 'lingote', label: L('Lingote', 'Bar') }, { value: 'moneda', label: L('Moneda', 'Coin') }]} />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><NumberField id={`${idp}-l`} label={L('Ley (milésimas)', 'Fineness (parts per 1,000)')} value={ley} onChange={typed(setLey)} decimals={1} max={1000} /><NumberField id={`${idp}-g`} label={L('Peso total', 'Total weight')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={100000} /></div>
        <NumberField id={`${idp}-p`} label={L('Precio pedido o pagado', 'Price asked or paid')} value={price} onChange={typed(setPrice)} unit="€" decimals={2} max={10000000} />
        {kind === 'moneda' && <NumberField id={`${idp}-y`} label={L('Año de acuñación', 'Year struck')} value={year} onChange={typed(setYear)} max={2100} />}
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L('oro de inversión (sin IVA)', 'investment gold (no VAT)')}`} value={inv.ok ? L('Sí', 'Yes') : L('No', 'No')} sub={inv.ok ? L('Su venta está exenta de IVA (art. 140 bis de la Ley del IVA).', 'Its sale is exempt from VAT (art. 140 bis, Spanish VAT Act).') : L(`No cumple: ${why[inv.reason!]}.`, `It does not qualify: ${why[inv.reason!]}.`)} />
        <Table caption={L('Precio frente al metal', 'Price against the metal')}>
          <Row label={L('Oro puro que contiene', 'Pure gold inside')} value={grams(g * ley / 1000, 3, lang)} />
          <Row label={L('Valor del metal', 'Metal value')} value={eur(value, lang)} />
          <Row label={L('Prima sobre el metal', 'Premium over the metal')} value={pct(prem, 1, lang)} strong />
        </Table>
        {kind === 'moneda' && <p className="mt-2 text-xs text-navy-600">{L('Una moneda debe además tener o haber tenido curso legal en su país.', 'A coin must also be or have been legal tender in its country.')}</p>}
      </>} />
  );
}

/* ---------- Lire un contraste ---------- */
function Stamp({ lang, mini, title, idp = 'st' }: ToolArgs) {
  const L = tr(lang);
  const [metal, setMetal] = useState<'oro' | 'plata'>('oro');
  const [ley, setLey] = useState(750);
  const [g, setG] = useState(5);
  const { example, typed } = useExample(['m', 'l', 'g']);
  useEffect(() => { const q = readParams(location.search); const mm = str(q, 'm', 'oro'); if (mm === 'oro' || mm === 'plata') setMetal(mm); setLey(num(q, 'l', 750)); setG(num(q, 'g', 5)); }, []);
  useEffect(() => { updateURL({ m: metal, l: ley, g }); }, [metal, ley, g]);
  const spot = useSpot(['XAU', 'XAG']);
  const legal = isLegalLey(ley, metal);
  const m: Metal = metal === 'oro' ? 'XAU' : 'XAG';
  const value = metalValue(g, ley, spot[m].eurPerOz);
  const list = metal === 'oro' ? P.gold.map((x) => x.ley) : P.silver;
  return (
    <Frame lang={lang} mini={mini} title={title} spotLine={<SpotLine spot={spot} metals={[m]} lang={lang} />}
      fields={<>
        {example && <ExampleNote>{L('Ejemplo: un anillo con el número 750. Escribe el número que ves en tu pieza.', 'Example: a ring stamped 750. Type the number you see on your piece.')}</ExampleNote>}
        <Toggle id={`${idp}-m`} label={L('Metal', 'Metal')} value={metal} onChange={typed((v: string) => setMetal(v as 'oro' | 'plata'))} options={[{ value: 'oro', label: L('Oro', 'Gold') }, { value: 'plata', label: L('Plata', 'Silver') }]} />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-0"><NumberField id={`${idp}-l`} label={L('Número grabado', 'Number stamped')} value={ley} onChange={typed(setLey)} max={1000} /><NumberField id={`${idp}-g`} label={L('Peso', 'Weight')} value={g} onChange={typed(setG)} unit="g" decimals={3} max={100000} /></div>
      </>}
      result={<>
        <Big label={`${example ? L('Ejemplo: ', 'Example: ') : ''}${L(`ley ${ley}`, `${ley} fineness`)}`} value={legal ? (metal === 'oro' ? L(`${dec(karatOfLey(ley), 1, lang)} kilates`, `${dec(karatOfLey(ley), 1, lang)} karat`) : L('Plata legal', 'Legal silver')) : L('No es una ley legal', 'Not a legal fineness')} sub={legal ? L(`${dec(ley / 10, 1, lang)} % de ${metal} puro como mínimo, sin tolerancia en menos.`, `At least ${dec(ley / 10, 1, 'en')}% pure ${metal === 'oro' ? 'gold' : 'silver'}, with no tolerance below.`) : L(`En España, las leyes de ${metal} son ${list.join(', ')}. Pide un ensayo antes de vender.`, `In Spain the legal ${metal === 'oro' ? 'gold' : 'silver'} finenesses are ${list.join(', ')}. Ask for an assay before you sell.`)} />
        <Table caption={L('Valor de la pieza', 'Value of the piece')}>
          <Row label={L('Metal puro que contiene', 'Pure metal inside')} value={grams(g * ley / 1000, 3, lang)} />
          <Row label={L('Valor del metal', 'Metal value')} value={eur(value, lang)} strong />
        </Table>
      </>} />
  );
}
