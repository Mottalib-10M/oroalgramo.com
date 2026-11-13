/**
 * Cours du moment, lu par le navigateur APRÈS le premier rendu (RECETTE §17.5) :
 *  - premier rendu = relevé du build (spot-snapshot.json), identique au HTML servi ;
 *  - puis, pour chaque métal affiché, UNE requête GET vers https://api.gold-api.com/price/<métal>/EUR
 *    (euros par once troy, CORS ouvert ; conditions relues le 2026-11-13 : § 9 usage commercial permis,
 *    § 4 jamais plusieurs requêtes par seconde). File d'attente : au plus une requête toutes les 1,2 s.
 *  - si la requête échoue, le relevé du build reste affiché, avec sa date et son heure.
 * Rien de ce que tape le visiteur n'est envoyé. Aucune actualisation automatique : un bouton permet de
 * redemander le cours (au plus une fois par 15 s).
 */
import { useEffect, useState } from 'react';
import { SNAPSHOT, type Metal } from './engine/params';
import { eur, eur2, pct, stamp, type Lang } from './money';

export interface Quote { eurPerOz: number; at: string; live: boolean; failed: boolean }
export type Spot = Record<Metal, Quote>;

const initial: Spot = {
  XAU: { eurPerOz: SNAPSHOT.eurPerOz.XAU, at: SNAPSHOT.at.XAU, live: false, failed: false },
  XAG: { eurPerOz: SNAPSHOT.eurPerOz.XAG, at: SNAPSHOT.at.XAG, live: false, failed: false },
};
const BOUNDS: Record<Metal, [number, number]> = { XAU: [500, 30000], XAG: [5, 800] };
let current: Spot = initial;
const subs = new Set<(s: Spot) => void>();
const requested = new Set<Metal>();
let queue: Promise<void> = Promise.resolve();
let lastManual = 0;
const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

function fetchMetal(m: Metal) {
  queue = queue.then(async () => {
    try {
      const r = await fetch(`https://api.gold-api.com/price/${m}/EUR`, { cache: 'no-store' });
      const g = await r.json();
      const [lo, hi] = BOUNDS[m];
      if (g?.currency !== 'EUR' || !(g.price > lo && g.price < hi)) throw new Error('bornes');
      current = { ...current, [m]: { eurPerOz: g.price, at: g.updatedAt ?? new Date().toISOString(), live: true, failed: false } };
    } catch {
      current = { ...current, [m]: { ...current[m], failed: true } };
    }
    subs.forEach((f) => f(current));
    majTexte(m);
    await pause(1200);
  });
}

/** Un seul chiffre par notion : les montants du texte posés au build dans <span data-cours="XAU" data-v="…"
 *  data-f="eur|eur2|pct" data-l="es|en"> sont recalculés au même cours que le calculateur. */
function majTexte(m: Metal) {
  if (typeof document === 'undefined') return;
  const q = current[m];
  if (!q.live) return;
  const r = q.eurPerOz / SNAPSHOT.eurPerOz[m];
  document.querySelectorAll<HTMLElement>(`[data-cours="${m}"]`).forEach((el) => {
    const v = Number(el.dataset.v);
    if (!Number.isFinite(v)) return;
    const f = el.dataset.f;
    const l = (el.dataset.l as Lang) ?? 'es';
    el.textContent = f === 'pct' ? pct(v / r, 1, l) : f === 'eur2' ? eur2(v * r, l) : eur(v * r, l);
  });
  document.querySelectorAll<HTMLElement>(`[data-cours-heure="${m}"]`).forEach((el) => { el.textContent = stamp(q.at, (el.dataset.l as Lang) ?? 'es'); });
}

export function useSpot(metals: Metal[] = ['XAU']): Spot {
  const [s, setS] = useState<Spot>(initial);
  useEffect(() => {
    subs.add(setS);
    setS(current);
    for (const m of metals) if (!requested.has(m)) { requested.add(m); fetchMetal(m); }
    return () => { subs.delete(setS); };
  }, []);
  return s;
}

export function refreshSpot(metals: Metal[]): boolean {
  const now = Date.now();
  if (now - lastManual < 15000) return false;
  lastManual = now;
  metals.forEach(fetchMetal);
  return true;
}
