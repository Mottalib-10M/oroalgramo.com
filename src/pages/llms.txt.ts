/** llms.txt (RECETTE §21) : ce qu'est le site, d'où viennent ses chiffres, ses pages. Construit depuis les données. */
import type { APIRoute } from 'astro';
import { PAGES } from '../lib/pages';
import { route } from '../i18n/routes';
import { SITE_URL } from '../data/site-config';
import { P } from '../lib/engine/params';
import { fill } from '../lib/helpers';
export const GET: APIRoute = () => {
  const lines = [
    '# Oro al Gramo',
    '',
    `> Calculators (Spanish and English) that turn the price of gold and silver in euros (gold-api.com, Madrid time shown, dated fallback) into the metal value of Spanish jewellery by the finenesses of Law 17/1985, art. 9: gold ${P.gold.map((g) => g.ley).join(', ')}; silver ${P.silver.join(', ')}. An offer checker turns a gold buyer's quote into a share of the metal value. Income tax on the gain (Act 35/2006, savings scale), transfer tax paid by the buyer (RDLeg 1/1993), VAT on investment gold (Act 37/1992, art. 140) and the cash limit (Law 7/2012, art. 7) read in the Official Gazette on ${P.retrieved_at}. Independent site published by Radif Partners: not a gold buyer or a dealer; no shop prices, no advice.`,
    '',
    '## Calculadoras (español)',
    `- [Precio del oro hoy por gramo](${SITE_URL}${route('home', 'es')})`,
    ...PAGES.map((p) => `- [${p.es.nav}](${SITE_URL}${route(p.id, 'es')}): ${fill(p.es.card, 'es')}`),
    '',
    '## Calculators (English)',
    `- [Gold price per gram in Spain](${SITE_URL}${route('home', 'en')})`,
    ...PAGES.map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${fill(p.en.card, 'en')}`),
    '',
    '## Method',
    `- [Metodología](${SITE_URL}${route('method', 'es')}) · [Method](${SITE_URL}${route('method', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
