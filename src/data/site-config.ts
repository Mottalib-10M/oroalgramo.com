/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://oroalgramo.com";
export const SITE_NAMES: Record<string, string> = {"es": "Oro al Gramo", "en": "Oro al Gramo"};
// Partie du nom affichée en couleur dans l'en-tête (RECETTE §10.3), « » pour aucune.
export const BRAND_ACCENT = "al Gramo";
export const LANG_TAGS: Record<string, string> = {"es": "es-ES", "en": "en-ES"};
export const OG_LOCALES: Record<string, string> = {"es": "es_ES", "en": "en_GB"};
export const LOCALE_TAG = 'es-ES';
export const CURRENCY = 'EUR';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-11-13';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"es": "Editor independiente de calculadoras del valor del oro y la plata en España; no compra, no vende y no es un compro oro", "en": "Independent publisher of gold and silver value calculators for Spain; it does not buy or sell metal and is not a gold buyer"};
export const AUTHOR_DESC: Record<string, string> = {"es": "Radif Partners publica Oro al Gramo, que convierte la cotización de la onza en euros en el valor del metal de las joyas y piezas españolas según las leyes de la Ley 17/1985 (oro 999, 916, 750, 585 y 375; plata 999, 925 y 800), calcula qué parte del metal paga la oferta de un comprador y explica el IRPF, el ITP y el IVA tal como los publica el BOE. No compra, no vende ni guarda nada, y ningún comprador paga por aparecer.", "en": "Radif Partners publishes Oro al Gramo, which turns the ounce price in euros into the metal value of Spanish jewellery by the finenesses Law 17/1985 sets (gold 999, 916, 750, 585 and 375; silver 999, 925 and 800), works out what share of the metal a buyer's offer pays, and explains Spanish income tax, transfer tax and VAT as the Official Gazette publishes them. It buys, sells and stores nothing, and no buyer pays for a mention."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"es": ["Precio del oro por gramo en España", "Leyes del oro y la plata (Ley 17/1985)", "Valor del oro usado para vender", "IRPF por la venta de oro", "ITP en la compra de oro a particulares", "IVA del oro de inversión"], "en": ["Gold price per gram in Spain", "Spanish gold and silver finenesses (Law 17/1985)", "Scrap gold value", "Spanish income tax on selling gold", "Spanish transfer tax on gold bought from individuals", "VAT on investment gold in Spain"]};
export const CONTACT_EMAIL = "contacto@oroalgramo.com";
export const THEME_COLOR = '#8A6A12';
export const LOGO_SYMBOL = 'Au';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = 'G-XDTJTC3PFP';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = 'zdgdbrue59';
export const INDEXNOW_KEY = 'd61386168a1528ab6fb3dd295e6f3e4b';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',  // éditeur de tous les sites du portefeuille (RECETTE §8)
  legalForm: '',  // vide : comme sur les autres sites du portefeuille (bridgeto59.com)
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "Francia / France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "NIF-IVA",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];  // forme juridique non publiée, comme sur bridgeto59.com

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
