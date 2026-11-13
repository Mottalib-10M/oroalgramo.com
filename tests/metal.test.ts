import { describe, it, expect } from 'vitest';
import { OZ, metalValue, karatOfLey, leyOfKarat, isLegalLey, toGrams, offerShare, lotValue, ahorroTax, goldGainTax, itpOnPurchase, cashAllowed, isInvestmentGold, premium } from '../src/lib/engine/metal';
import { P } from '../src/lib/engine/params';

describe('unités', () => {
  it('once troy = 31,1034768 g', () => {
    expect(OZ).toBeCloseTo(31.1034768, 7);
    expect(toGrams(1, 'ozt')).toBeCloseTo(31.1034768, 7);
    expect(toGrams(1, 'kg')).toBe(1000);
  });
});

describe('leyes (Ley 17/1985, art. 9.1)', () => {
  it('or 999, 916, 750, 585, 375 ; argent 999, 925, 800', () => {
    expect(P.gold.map((g) => g.ley)).toEqual([999, 916, 750, 585, 375]);
    expect(P.silver).toEqual([999, 925, 800]);
    expect(isLegalLey(750, 'oro')).toBe(true);
    expect(isLegalLey(875, 'oro')).toBe(false);
    expect(isLegalLey(925, 'plata')).toBe(true);
    expect(isLegalLey(900, 'plata')).toBe(false);
  });
  it('kilates', () => {
    expect(karatOfLey(750)).toBe(18);
    expect(karatOfLey(375)).toBe(9);
    expect(karatOfLey(585)).toBeCloseTo(14, 0);
    expect(leyOfKarat(18)).toBe(750);
  });
  it('valeur métal : une once d’or fin = le cours', () => {
    expect(metalValue(OZ, 1000, 3500)).toBeCloseTo(3500, 6);
    expect(metalValue(10, 750, 3500)).toBeCloseTo(7.5 * 3500 / OZ, 6);
    expect(metalValue(-5, 750, 3500)).toBe(0);
  });
  it('lot et offre', () => {
    const l = lotValue([{ grams: 10, ley: 750 }, { grams: 4, ley: 375 }], 3500);
    expect(l.fineGrams).toBeCloseTo(9, 9);
    expect(offerShare(70, 100)).toEqual({ share: 0.7, gap: 30 });
  });
});

describe('IRPF (art. 66 + 76 Ley 35/2006)', () => {
  it('barème du ahorro', () => {
    expect(ahorroTax(6000)).toBeCloseTo(1140, 6);
    expect(ahorroTax(50000)).toBeCloseTo(1140 + 44000 * 0.21, 6);
    expect(ahorroTax(200000)).toBeCloseTo(1140 + 9240 + 150000 * 0.23, 6);
    expect(ahorroTax(400000)).toBeCloseTo(1140 + 9240 + 34500 + 27000 + 100000 * 0.30, 6);
  });
  it('gain marginal au-dessus des autres revenus de l’épargne', () => {
    const r = goldGainTax({ sale: 2500, cost: 900 });
    expect(r.gain).toBe(1600);
    expect(r.tax).toBeCloseTo(304, 6);
    const r2 = goldGainTax({ sale: 2500, cost: 900, otherSavings: 6000 });
    expect(r2.tax).toBeCloseTo(336, 6);
    expect(goldGainTax({ sale: 500, cost: 900 }).tax).toBe(0);
  });
});

describe('ITP, espèces, or d’investissement', () => {
  it('ITP 4 % par défaut, payé par l’acheteur', () => {
    expect(itpOnPurchase(1000)).toBeCloseTo(40, 9);
  });
  it('espèces : interdit dès 1 000 €', () => {
    expect(cashAllowed(999.99)).toBe(true);
    expect(cashAllowed(1000)).toBe(false);
  });
  it('art. 140 Ley 37/1992', () => {
    expect(isInvestmentGold({ kind: 'lingote', ley: 995 }).ok).toBe(true);
    expect(isInvestmentGold({ kind: 'lingote', ley: 990 }).ok).toBe(false);
    expect(isInvestmentGold({ kind: 'moneda', ley: 916.7, year: 1990, premium: 0.05 }).ok).toBe(true);
    expect(isInvestmentGold({ kind: 'moneda', ley: 900, year: 1800 }).reason).toBe('year');
    expect(isInvestmentGold({ kind: 'moneda', ley: 916, year: 2000, premium: 0.9 }).reason).toBe('premium');
    expect(premium(104, 100)).toBeCloseTo(0.04, 9);
  });
});
