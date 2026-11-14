#!/usr/bin/env node
/**
 * Relevé du cours, lancé par `npm run update-data` (tâche planifiée .github/workflows/deploy.yml, en semaine
 * toutes les trois heures ; il ne tourne plus dans `npm run build`) (brief BRIEF-LOT-30-2026-11-13, site n° 25).
 * Source : https://api.gold-api.com/price/<XAU|XAG>/EUR (gold-api.com, conditions relues le 2026-11-13 :
 * « Effective date: September 10, 2026 », § 9 usage commercial permis, y compris sur un site web ; § 4 jamais
 * plusieurs requêtes par seconde, d'où une requête par métal espacée de 1,5 s). Euros par once troy.
 * Le fichier écrit (src/data/spot-snapshot.json) donne le premier rendu de chaque page et sert de repli
 * daté quand le navigateur ne joint pas l'API. En cas d'échec réseau, le fichier existant est gardé tel
 * quel : la page affiche alors la date et l'heure de ce dernier relevé.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const F = new URL('../src/data/spot-snapshot.json', import.meta.url);
const old = existsSync(F) ? JSON.parse(readFileSync(F, 'utf8')) : null;
const BOUNDS = { XAU: [500, 20000], XAG: [5, 500] };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function j(u) { const r = await fetch(u, { signal: AbortSignal.timeout(15000) }); if (!r.ok) throw new Error(`${u} ${r.status}`); return r.json(); }
const out = { source: 'gold-api.com', currency: 'EUR', eurPerOz: { ...(old?.eurPerOz ?? {}) }, at: { ...(old?.at ?? {}) } };
let ok = 0;
for (const sym of ['XAU', 'XAG']) {
  try {
    const g = await j(`https://api.gold-api.com/price/${sym}/EUR`);
    const [lo, hi] = BOUNDS[sym];
    if (g.currency !== 'EUR' || !(g.price > lo && g.price < hi)) throw new Error(`${sym} hors bornes ou devise ${g.currency}`);
    out.eurPerOz[sym] = Math.round(g.price * 100) / 100;
    out.at[sym] = g.updatedAt ?? new Date().toISOString();
    ok++;
  } catch (err) { console.warn(`relevé ${sym} impossible (${err.message}) : on garde ${old?.at?.[sym] ?? 'rien'}`); }
  await wait(1500);
}
if (!ok && !old) { console.error('aucun relevé et aucun fichier existant'); process.exit(1); }
if (['XAU', 'XAG'].some((s) => !out.eurPerOz[s])) { console.error('un métal manque dans le relevé'); process.exit(1); }
writeFileSync(F, JSON.stringify(out, null, 1) + '\n');
console.log(`cours relevés (EUR/oz) : ${Object.entries(out.eurPerOz).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
