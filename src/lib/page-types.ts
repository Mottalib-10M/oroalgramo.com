/**
 * Une page = UN fichier de `src/content/pages/<id>.ts`, avec son texte espagnol et son texte anglais
 * (écrits chacun pour sa langue, jamais traduits mot à mot). Le cœur (routes, menus, sitemap, schémas,
 * maillage) le lit seul.
 */
import type { SourceKey, Params } from './engine/params';
import type { Lang } from './money';
export type Group = 'gold' | 'sell' | 'silver' | 'rules';
export interface FAQ { q: string; a: string; open?: boolean }
export type ToolName = 'board' | 'ley' | 'offer' | 'lot' | 'compare' | 'units' | 'silver' | 'gains' | 'itp' | 'cash' | 'inversion' | 'stamp';

export interface Helpers {
  lang: Lang;
  a: (id: string, text: string) => string;
  src: (key: SourceKey, text?: string) => string;
  table: (headers: string[], rows: Array<Array<string | number>>, caption?: string) => string;
  num: (n: number, d?: number) => string;
  dec: (n: number, d?: number) => string;
  eur: (n: number) => string;
  eur2: (n: number) => string;
  pct: (x: number, d?: number) => string;
  /** Valeur au relevé du build : grammes × ley. */
  at: (grams: number, ley: number, metal?: 'XAU' | 'XAG') => number;
  /** Montant qui dépend du cours, recalculé au cours du calculateur dans le navigateur (live.ts). */
  live: (n: number, metal?: 'XAU' | 'XAG', f?: 'eur' | 'eur2' | 'pct') => string;
  /** Heure du cours de l'or, en toutes lettres (heure de Madrid). */
  when: string;
  whenOf: (metal: 'XAU' | 'XAG') => string;
  P: Params;
}

export interface ToolProps { ley?: number; metal?: string; grams?: number; offer?: number; kind?: string }

export interface LangText {
  /** Segment d'URL, minuscules et tirets. */
  slug: string;
  nav: string;
  card: string;
  /** 50 à 60 caractères, terme-clé en tête. */
  title: string;
  /** 150 à 160 caractères. */
  description: string;
  h1: string;
  /** Bloc citable : UN paragraphe d'au moins 120 mots, replié à la deuxième phrase. */
  resume: string;
  faqs: FAQ[];
  body: (h: Helpers) => string;
}

export interface PageDef {
  id: string;
  group: Group;
  order: number;
  tool: ToolName;
  toolProps?: ToolProps;
  related: string[];
  sources: SourceKey[];
  es: LangText;
  en: LangText;
}
export const definePage = (p: PageDef): PageDef => p;
