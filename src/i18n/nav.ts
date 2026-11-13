import { route, type Locale } from './routes';
import { PAGES, pageById } from '../lib/pages';
import type { Group } from '../lib/page-types';
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<Locale, Record<string, string>> = {
  es: { home: 'Precio del oro hoy por gramo', method: 'Cómo calculamos', about: 'Quiénes somos', widget: 'Insertar la calculadora', contact: 'Contacto', editorial: 'Política editorial', privacy: 'Privacidad', terms: 'Aviso legal', cookies: 'Cookies' },
  en: { home: 'Gold price per gram in Spain', method: 'How we work it out', about: 'About', widget: 'Embed the calculator', contact: 'Contact', editorial: 'Editorial policy', privacy: 'Privacy', terms: 'Legal notice', cookies: 'Cookies' },
};
const GROUP_LABEL: Record<Locale, Record<Group, string>> = {
  es: { gold: 'Precio del oro por ley', sell: 'Vender oro', silver: 'Plata', rules: 'Impuestos y normas' },
  en: { gold: 'Gold price by fineness', sell: 'Selling gold', silver: 'Silver', rules: 'Tax and rules' },
};
const COURT: Record<Locale, Record<Group, string>> = {
  es: { gold: 'Precio del oro', sell: 'Vender', silver: 'Plata', rules: 'Impuestos' },
  en: { gold: 'Gold price', sell: 'Selling', silver: 'Silver', rules: 'Tax' },
};
export const GROUPS_ORDER: Group[] = ['gold', 'sell', 'silver', 'rules'];
const MENU_ORDER: Group[] = ['sell', 'gold', 'silver', 'rules'];
export const label = (id: string, lang: Locale = 'es') => CORE[lang][id] ?? pageById(id)?.[lang].nav ?? id;
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id, lang) });
const inGroup = (g: Group, lang: Locale) => PAGES.filter((p) => p.group === g).map((p) => link(p.id, lang));
export const navCategories = (lang: Locale, court = true): NavCategory[] =>
  (court ? MENU_ORDER : GROUPS_ORDER).map((g) => ({ label: court ? COURT[lang][g] : GROUP_LABEL[lang][g], links: court && g === 'gold' ? [{ href: route('home', lang), label: lang === 'es' ? 'Inicio: precio del oro por gramo' : 'Home: gold price per gram' }, ...inGroup(g, lang)] : inGroup(g, lang) })).filter((c) => c.links.length);
export const navDirect = (_lang: Locale): NavLink[] => [];
export const footerColumns = (lang: Locale): NavCategory[] => [
  { label: GROUP_LABEL[lang].gold, links: [link('home', lang), ...inGroup('gold', lang)] },
  { label: `${GROUP_LABEL[lang].sell} · ${GROUP_LABEL[lang].silver}`, links: [...inGroup('sell', lang), ...inGroup('silver', lang)] },
  { label: GROUP_LABEL[lang].rules, links: inGroup('rules', lang) },
  { label: lang === 'es' ? 'Este sitio' : 'This site', links: ['method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].map((i) => link(i, lang)) },
];
export const popularLinks = (_lang: Locale): NavLink[] => [];
