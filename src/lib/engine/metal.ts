/**
 * Moteur du site : fonctions pures, testées (tests/metal.test.ts). Aucune valeur réglementaire en dur :
 * elles viennent de params-2026.json ; le cours (euros par once troy) vient de l'appelant.
 *
 * Valeur métal d'un objet = poids × ley (millièmes ÷ 1000) × cours du gramme de métal fin.
 * Les leyes sont celles de la Ley 17/1985, art. 9.1 : or 999, 916, 750, 585, 375 ; argent 999, 925, 800.
 */
import { P } from './params';

/** Grammes d'une once troy. */
export const OZ = P.units.troyOunceGrams;

/** Cours d'un gramme de métal fin, depuis le cours de l'once troy. */
export const finePerGram = (eurPerOz: number) => eurPerOz / OZ;

/** Kilates d'une ley (750 → 18) : usage commercial, ley ÷ 1000 × 24. */
export const karatOfLey = (ley: number) => Math.round((ley / 1000) * 24 * 10) / 10;
/** Ley d'un kilate publié dans la table (18 → 750). */
export function leyOfKarat(k: number): number {
  const row = P.gold.find((g) => g.k === k);
  if (!row) throw new Error(`kilate hors table : ${k}`);
  return row.ley;
}
/** Ley légale en Espagne pour ce métal ? (art. 9.1 Ley 17/1985) */
export const isLegalLey = (ley: number, metal: 'oro' | 'plata') => (metal === 'oro' ? P.gold.map((g) => g.ley) : P.silver).includes(ley);

/** Valeur métal d'un poids (grammes) à une ley donnée. */
export function metalValue(grams: number, ley: number, eurPerOz: number): number {
  return Math.max(0, grams) * (ley / 1000) * finePerGram(eurPerOz);
}
/** Prix d'un gramme d'objet à une ley donnée. */
export const gramPrice = (ley: number, eurPerOz: number) => metalValue(1, ley, eurPerOz);

/** Table des leyes d'or : prix du gramme pour chacune. */
export function leyTable(eurPerOz: number) {
  return P.gold.map((g) => ({ ...g, gram: gramPrice(g.ley, eurPerOz) }));
}

export type Unit = 'g' | 'ozt' | 'kg';
export function toGrams(value: number, unit: Unit): number {
  if (unit === 'ozt') return value * OZ;
  if (unit === 'kg') return value * 1000;
  return value;
}
export const fromGrams = (grams: number, unit: Unit) => grams / toGrams(1, unit);

/** Part du métal qu'une offre paie, et l'écart en euros. */
export function offerShare(offer: number, metal: number): { share: number; gap: number } {
  return { share: metal > 0 ? offer / metal : 0, gap: metal - offer };
}

/** Lot de pièces de leyes différentes : métal fin et valeur totale. */
export function lotValue(items: Array<{ grams: number; ley: number }>, eurPerOz: number) {
  const fineGrams = items.reduce((s, i) => s + Math.max(0, i.grams) * (i.ley / 1000), 0);
  return { fineGrams, value: fineGrams * finePerGram(eurPerOz) };
}

/** Prime payée au-dessus du métal (0,05 = 5 %). */
export const premium = (price: number, metal: number) => (metal > 0 ? price / metal - 1 : 0);

/** Or d'investissement au sens de l'art. 140 de la Ley 37/1992 (exonéré de TVA, art. 140 bis). */
export interface InvIn { kind: 'lingote' | 'moneda'; ley: number; year?: number; legalTender?: boolean; premium?: number }
export function isInvestmentGold(i: InvIn): { ok: boolean; reason: 'ley' | 'year' | 'tender' | 'premium' | null } {
  if (i.kind === 'lingote') return i.ley >= P.iva.barMinLey ? { ok: true, reason: null } : { ok: false, reason: 'ley' };
  if (i.ley < P.iva.coinMinLey) return { ok: false, reason: 'ley' };
  if ((i.year ?? 0) <= P.iva.coinAfterYear) return { ok: false, reason: 'year' };
  if (i.legalTender === false) return { ok: false, reason: 'tender' };
  if ((i.premium ?? 0) > P.iva.coinMaxPremium) return { ok: false, reason: 'premium' };
  return { ok: true, reason: null };
}

/** Cuota de la base del ahorro (art. 66 + art. 76 Ley 35/2006), barème total État + communauté. */
export function ahorroTax(base: number): number {
  let rest = Math.max(0, base), prev = 0, tax = 0;
  for (const b of P.irpf.brackets) {
    const top = b.upTo ?? Infinity;
    const slice = Math.min(rest, top - prev);
    if (slice <= 0) break;
    tax += slice * b.rate; rest -= slice; prev = top;
  }
  return tax;
}
/** Gain de la vente (art. 35) et impôt marginal estimé : le gain s'ajoute aux autres revenus de l'épargne. */
export interface GainIn { sale: number; saleCosts?: number; cost: number; buyCosts?: number; otherSavings?: number }
export interface GainOut { gain: number; tax: number; rate: number; net: number }
export function goldGainTax(i: GainIn): GainOut {
  const gain = Math.max(0, i.sale) - Math.max(0, i.saleCosts ?? 0) - Math.max(0, i.cost) - Math.max(0, i.buyCosts ?? 0);
  if (gain <= 0) return { gain, tax: 0, rate: 0, net: Math.max(0, i.sale) - Math.max(0, i.saleCosts ?? 0) };
  const other = Math.max(0, i.otherSavings ?? 0);
  const tax = ahorroTax(other + gain) - ahorroTax(other);
  return { gain, tax, rate: tax / gain, net: Math.max(0, i.sale) - Math.max(0, i.saleCosts ?? 0) - tax };
}

/** ITP payé par l'acheteur professionnel sur le prix versé au particulier (art. 8 a et 11.1 a TRLITPAJD). */
export function itpOnPurchase(price: number, rate: number = P.itp.defaultMueblesRate): number {
  return Math.max(0, price) * Math.max(0, rate);
}

/** Paiement en espèces permis ? (Ley 7/2012 art. 7) */
export function cashAllowed(amount: number, nonResident = false): boolean {
  return Math.max(0, amount) < (nonResident ? P.cash.limitNonResident : P.cash.limit);
}
