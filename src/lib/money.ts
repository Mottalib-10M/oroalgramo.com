/** Montants en euros (RECETTE §4.1), écrits dans la langue de la page : « 84,95 € » en espagnol,
 *  « €84.95 » en anglais. Un total au-delà de 1 000 € s'affiche sans centimes ; un prix au gramme ou une
 *  petite somme garde ses centimes, comme sur le cartel d'un comptoir. */
export type Lang = 'es' | 'en';
const TAG: Record<Lang, string> = { es: 'es-ES', en: 'en-GB' };
const cache = new Map<string, Intl.NumberFormat>();
function nf(lang: Lang, o: Intl.NumberFormatOptions) {
  const k = lang + JSON.stringify(o);
  if (!cache.has(k)) cache.set(k, new Intl.NumberFormat(TAG[lang], o));
  return cache.get(k)!;
}
const nb = (s: string) => s.replace(/\s/g, ' ');
export const num = (n: number, d = 0, lang: Lang = 'es') => nb(nf(lang, { minimumFractionDigits: d, maximumFractionDigits: d }).format(n));
/** Nombre à décimales utiles seulement (0,75 · 31,1034768). */
export const dec = (n: number, max = 2, lang: Lang = 'es') => nb(nf(lang, { maximumFractionDigits: max }).format(n));
export const eur = (n: number, lang: Lang = 'es') => (lang === 'en' ? `€${num(n, Math.abs(n) >= 1000 ? 0 : 2, 'en')}` : `${num(n, Math.abs(n) >= 1000 ? 0 : 2, 'es')} €`);
export const eur0 = (n: number, lang: Lang = 'es') => (lang === 'en' ? `€${num(n, 0, 'en')}` : `${num(n, 0, 'es')} €`);
export const eur2 = (n: number, lang: Lang = 'es') => (lang === 'en' ? `€${num(n, 2, 'en')}` : `${num(n, 2, 'es')} €`);
export const pct = (x: number, d = 1, lang: Lang = 'es') => (lang === 'en' ? `${num(x * 100, d, 'en')}%` : `${num(x * 100, d, 'es')} %`);
export const grams = (n: number, d = 2, lang: Lang = 'es') => `${num(n, d, lang)} g`;
/** Heure d'un relevé de cours, heure de Madrid, en mots simples : « 13 de noviembre de 2026, 9:18 (hora de Madrid) ». */
export function stamp(iso: string, lang: Lang = 'es'): string {
  const d = new Date(iso);
  const day = d.toLocaleDateString(TAG[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' });
  return `${day}, ${clock(iso, lang)}`;
}
export function clock(iso: string, lang: Lang = 'es'): string {
  const t = new Date(iso).toLocaleTimeString(TAG[lang], { hour: 'numeric', minute: '2-digit', hour12: false, timeZone: 'Europe/Madrid' });
  return lang === 'en' ? `${t} Madrid time` : `${t} (hora de Madrid)`;
}
