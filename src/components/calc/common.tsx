/** Pièces communes aux calculateurs : cadre, lignes de résultat, ligne du cours avec son heure. */
import { useState, useEffect, type ReactNode } from 'react';
import SelectField from '../ui/SelectField';
import { P, SNAPSHOT, type Metal } from '../../lib/engine/params';
import { refreshSpot, type Spot } from '../../lib/live';
import { eur, eur2, stamp, type Lang } from '../../lib/money';
import { finePerGram, type Unit } from '../../lib/engine/metal';

/** Petit dictionnaire : le texte espagnol, puis l'anglais. */
export const tr = (lang: Lang) => (es: string, en: string) => (lang === 'en' ? en : es);

const METAL_NAME: Record<Lang, Record<Metal, string>> = { es: { XAU: 'oro', XAG: 'plata' }, en: { XAU: 'gold', XAG: 'silver' } };

/** Ligne d'état du cours : le prix du gramme de metal puro et l'heure ; la source et le bouton dans un repli. */
export function SpotLine({ spot, metals, lang }: { spot: Spot; metals: Metal[]; lang: Lang }) {
  const L = tr(lang);
  const [note, setNote] = useState('');
  const anyFailed = metals.some((m) => spot[m].failed);
  const allLive = metals.every((m) => spot[m].live);
  return (
    <div className="mt-1 text-xs leading-relaxed text-navy-600" data-chrome>
      {metals.map((m) => {
        const q = spot[m];
        const name = METAL_NAME[lang][m];
        return (
          <p key={m}>
            <span className={`mr-1.5 inline-block h-2 w-2 shrink-0 rounded-full align-middle ${q.live ? 'bg-green-600' : 'bg-navy-400'}`} aria-hidden="true" />
            <span>{q.live ? L(`Precio del ${name} en este momento`, `Live ${name} price`) : L(`Precio del ${name} registrado`, `${name[0].toUpperCase()}${name.slice(1)} price recorded`)}, {stamp(q.live ? q.at : SNAPSHOT.at[m], lang)}: <span className="tabular-nums font-medium text-navy-900">{eur2(finePerGram(q.eurPerOz), lang)}</span> {L(`el gramo de ${name} puro. Tu resultado usa este precio.`, `a gram of pure ${name}. Your result uses this price.`)}</span>
          </p>
        );
      })}
      {anyFailed && <p className="text-amber-800">{L('No se ha podido leer el precio del momento: las cifras usan el precio registrado al construir la página, con la hora indicada.', 'The live price could not be reached: the figures use the price recorded when this page was built, at the time shown.')}</p>}
      <details className="mt-0.5">
        <summary className="cursor-pointer underline hover:text-navy-900">{L('De dónde sale este precio', 'Where this price comes from')}</summary>
        <p className="mt-1">{L(
          `Es la cotización internacional del metal puro en euros, de gold-api.com, un servicio gratuito: ${metals.map((m) => eur(spot[m].eurPerOz, lang)).join(' y ')} la onza troy (${'31,1'} g), la unidad en la que se cotizan los metales preciosos. Un comprador paga menos. La página lo lee una vez al abrirse, y las tablas y ejemplos del texto se calculan con el mismo precio.`,
          `It is the international price of the pure metal in euros, from gold-api.com, a free price service: ${metals.map((m) => eur(spot[m].eurPerOz, lang)).join(' and ')} per troy ounce (31.1 g), the unit precious metals are priced in. A buyer pays less. The page reads it once when it opens, and the tables and examples in the text use the same price.`)}</p>
        <p className="mt-1">
          <button type="button" className="underline hover:text-navy-900" onClick={() => setNote(refreshSpot(metals) ? L('Buscando un precio más reciente…', 'Checking for a newer price…') : L('Espera unos segundos antes de volver a pedirlo.', 'Wait a few seconds before asking again.'))}>{L('Buscar un precio más reciente', 'Check for a newer price')}</button>
          {note && !allLive && <span className="ml-2">{note}</span>}
        </p>
      </details>
    </div>
  );
}

export function PrivacyLine({ lang }: { lang: Lang }) {
  return <p className="text-xs text-navy-600" data-chrome>{tr(lang)('Nada de lo que escribes sale de tu móvil u ordenador. No pedimos nombre, correo ni código postal.', 'Nothing you type leaves your phone or computer. We never ask for your name, email or postcode.')}</p>;
}

/** Valeurs d'exemple : le calculateur le dit tant que rien n'a été tapé, et pas quand les valeurs viennent d'un lien partagé. */
export function useExample(keys: string[]) {
  const [example, setExample] = useState(true);
  useEffect(() => { const u = new URLSearchParams(location.search); if (keys.some((k) => u.has(k))) setExample(false); }, []);
  const typed = <T,>(f: (v: T) => void) => (v: T) => { setExample(false); f(v); };
  return { example, typed };
}

export function ExampleNote({ children }: { children: ReactNode }) {
  return <p data-exemple className="rounded bg-accent-50 px-2 py-1 text-sm font-medium text-navy-900">{children}</p>;
}

export function Row({ label, value, strong = false }: { label: ReactNode; value: ReactNode; strong?: boolean }) {
  return (
    <tr>
      <td className={`py-1.5 pr-3 ${strong ? 'font-semibold text-navy-900' : 'text-navy-700'}`}>{label}</td>
      <td className={`tabular-nums py-1.5 text-right ${strong ? 'font-semibold text-navy-900' : 'text-navy-900'}`}>{value}</td>
    </tr>
  );
}

/** Cadre d'un calculateur : champs à gauche, résultat à côté (`data-resultat`). */
export function Frame({ title, fields, result, foot, spotLine, mini = false, lang }: { title?: string; fields: ReactNode; result: ReactNode; foot?: ReactNode; spotLine?: ReactNode; mini?: boolean; lang: Lang }) {
  return (
    <div className="not-prose rechner rounded-lg border border-accent-300 bg-white p-4 sm:p-5" data-chrome>
      {title && <p className="mb-3 text-base font-semibold text-navy-900">{title}</p>}
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <form className="grid content-start gap-4" onSubmit={(e) => e.preventDefault()} {...(mini ? { 'data-simulateur-secondaire': '' } : {})}>{fields}{!mini && <PrivacyLine lang={lang} />}</form>
        <div data-resultat aria-live="polite" className="rounded-lg bg-accent-50 p-4">{result}</div>
      </div>
      {foot}
      {spotLine && <div className="mt-3">{spotLine}</div>}
    </div>
  );
}

export function Big({ label, value, sub }: { label: string; value: string; sub?: ReactNode }) {
  return (<>
    <p className="text-sm font-medium text-navy-700">{label}</p>
    <p className="mt-1 text-[2.2rem] font-bold leading-tight text-navy-900 tabular-nums">{value}</p>
    {sub && <p className="mt-1 text-sm text-navy-700">{sub}</p>}
  </>);
}

export function Table({ caption, children }: { caption: string; children: ReactNode }) {
  return <table className="mt-3 w-full text-sm"><caption className="sr-only">{caption}</caption><tbody className="divide-y divide-accent-200">{children}</tbody></table>;
}

/** Leyes d'or de la Ley 17/1985 (art. 9.1), avec le kilate d'usage. */
export function LeySelect({ id, value, onChange, lang, label }: { id: string; value: number; onChange: (l: number) => void; lang: Lang; label?: string }) {
  const L = tr(lang);
  return <SelectField id={id} label={label ?? L('Ley del oro (contraste)', 'Gold fineness (hallmark)')} value={String(value)} onChange={(v) => onChange(Number(v))}
    options={P.gold.map((g) => ({ value: String(g.ley), label: L(`${g.ley} (${g.k} kilates)`, `${g.ley} (${g.k} karat)`) }))} />;
}
export function SilverSelect({ id, value, onChange, lang }: { id: string; value: number; onChange: (l: number) => void; lang: Lang }) {
  const L = tr(lang);
  return <SelectField id={id} label={L('Ley de la plata', 'Silver fineness')} value={String(value)} onChange={(v) => onChange(Number(v))}
    options={P.silver.map((l) => ({ value: String(l), label: l === 925 ? L('925 de ley', '925 sterling') : l === 999 ? L('999 fina', '999 fine') : '800' }))} />;
}

export const UNIT_LABEL: Record<Lang, Record<Unit, string>> = {
  es: { g: 'gramos', ozt: 'onzas troy', kg: 'kilos' },
  en: { g: 'grams', ozt: 'troy ounces', kg: 'kilograms' },
};
export function UnitSelect({ id, value, onChange, lang, units = ['g', 'ozt', 'kg'] }: { id: string; value: Unit; onChange: (u: Unit) => void; lang: Lang; units?: Unit[] }) {
  return <SelectField id={id} label={tr(lang)('Pesado en', 'Weighed in')} value={value} onChange={(v) => onChange(v as Unit)} options={units.map((u) => ({ value: u, label: UNIT_LABEL[lang][u] }))} />;
}
