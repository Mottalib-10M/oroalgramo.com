/** Paramètres 2026 (RECETTE §4) : toute valeur réglementaire se lit ici, jamais en dur dans une page. */
import raw from '../../data/params-2026.json';
import snapRaw from '../../data/spot-snapshot.json';

export type Metal = 'XAU' | 'XAG';
export const METALS: Metal[] = ['XAU', 'XAG'];
export interface GoldGrade { ley: number; k: number; common: boolean }
export interface Source { url: string; label: { es: string; en: string } }
export interface Bracket { upTo: number | null; rate: number }

export interface Params {
  year: number; retrieved_at: string; valid_from: string; valid_to: string;
  units: { troyOunceGrams: number };
  gold: GoldGrade[]; silver: number[]; platinum: number[];
  irpf: { brackets: Bracket[]; preCutoff: string; abatimientoRate: number; abatimientoLimit: number };
  itp: { defaultMueblesRate: number };
  iva: { barMinLey: number; coinMinLey: number; coinAfterYear: number; coinMaxPremium: number };
  cash: { limit: number; limitNonResident: number; keepYears: number; finePct: number };
  sources: Record<string, Source>;
}
export const P = raw as unknown as Params;
export type SourceKey = keyof typeof raw.sources;

export interface Snapshot { source: string; currency: string; eurPerOz: Record<Metal, number>; at: Record<Metal, string> }
export const SNAPSHOT = snapRaw as Snapshot;
