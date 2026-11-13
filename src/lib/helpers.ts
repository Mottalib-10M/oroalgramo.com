/** Outils d'écriture passés au corps de chaque page, et jetons des textes statiques. */
import { route, ROUTES } from '../i18n/routes';
import { P, SNAPSHOT, type SourceKey } from './engine/params';
import type { Helpers } from './page-types';
import { metalValue, OZ } from './engine/metal';
import { eur, eur2, pct, num, dec, stamp, type Lang } from './money';

const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');

export function srcLink(key: string, lang: Lang, text?: string) {
  const s = P.sources[key];
  if (!s) throw new Error(`source inconnue ${key}`);
  return `<a href="${s.url}" target="_blank" rel="nofollow noopener noreferrer">${text ?? s.label[lang]}</a>`;
}

export function helpers(lang: Lang): Helpers {
  return {
    lang, P,
    eur: (n) => eur(n, lang), eur2: (n) => eur2(n, lang), pct: (x, d = 1) => pct(x, d, lang),
    num: (n, d = 0) => num(n, d, lang), dec: (n, d = 2) => dec(n, d, lang),
    a: (id, text) => {
      if (!ROUTES.some((r) => r.id === id)) throw new Error(`lien interne inconnu : ${id}`);
      return `<a href="${route(id, lang)}">${text}</a>`;
    },
    src: (key: SourceKey, text?: string) => srcLink(key as string, lang, text),
    at: (g, ley, m = 'XAU') => metalValue(g, ley, SNAPSHOT.eurPerOz[m]),
    live: (n, m = 'XAU', f = 'eur') => `<span data-cours="${m}" data-v="${n}" data-f="${f}" data-l="${lang}">${f === 'eur2' ? eur2(n, lang) : f === 'pct' ? pct(n, 1, lang) : eur(n, lang)}</span>`,
    when: `<span data-cours-heure="XAU" data-l="${lang}">${stamp(SNAPSHOT.at.XAU, lang)}</span>`,
    whenOf: (m) => `<span data-cours-heure="${m}" data-l="${lang}">${stamp(SNAPSHOT.at[m], lang)}</span>`,
    table: (headers, rows, caption) => `<div class="not-prose my-6 overflow-x-auto"><table class="journal empile w-full text-sm">${caption ? `<caption class="mb-2 text-start text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((x) => `<th scope="col" class="px-3 py-2 text-start font-semibold text-navy-900">${x}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr class="border-b border-navy-100">${r.map((c, i) => `<td data-label="${String(headers[i] ?? '').replace(/"/g, '&quot;')}" class="tabular-nums px-3 py-2 text-start text-navy-800">${typeof c === 'number' ? esc(num(c, 0, lang)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
  };
}

/** Jetons des textes (titre, description, bloc citable, FAQ, corps) remplacés par la valeur du fichier
 *  de paramètres : une valeur réglementaire ne s'écrit jamais en dur (RECETTE §17.4, point 7).
 *  Ex. « {cash} » → « 1000 € », « {r1} » → « 19 % », « {oz} » → « 31,1034768 ». */
export function fill(s: string, lang: Lang): string {
  const b = P.irpf.brackets;
  const map: Record<string, string> = {
    year: String(P.year),
    oz: dec(OZ, 7, lang), oz2: dec(OZ, 2, lang),
    cash: eur0(P.cash.limit, lang), cashNR: eur0(P.cash.limitNonResident, lang), cashYears: String(P.cash.keepYears), cashFine: pct(P.cash.finePct, 0, lang),
    itp: pct(P.itp.defaultMueblesRate, 0, lang),
    barLey: String(P.iva.barMinLey), coinLey: String(P.iva.coinMinLey), coinYear: String(P.iva.coinAfterYear), coinPrem: pct(P.iva.coinMaxPremium, 0, lang),
    r1: pct(b[0].rate, 0, lang), r2: pct(b[1].rate, 0, lang), r3: pct(b[2].rate, 0, lang), r4: pct(b[3].rate, 0, lang), r5: pct(b[4].rate, 0, lang),
    t1: eur0(b[0].upTo!, lang), t2: eur0(b[1].upTo!, lang), t3: eur0(b[2].upTo!, lang), t4: eur0(b[3].upTo!, lang),
    abat: pct(P.irpf.abatimientoRate, 2, lang), abatLimit: eur0(P.irpf.abatimientoLimit, lang),
    'spot.when': stamp(SNAPSHOT.at.XAU, lang),
  };
  return s.replace(/\{([a-zA-Z][a-zA-Z.0-9]*)\}/g, (m, k) => { if (!(k in map)) throw new Error(`jeton inconnu ${m}`); return map[k]; });
}
import { eur0 } from './money';
