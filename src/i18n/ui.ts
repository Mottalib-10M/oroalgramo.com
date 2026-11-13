import type { Locale } from './routes';
const es = {
  updatedOn: 'Leyes e impuestos revisados el', editorialPolicy: 'Política editorial', contactLabel: 'Contacto', reviewedBy: 'Cifras y normas comprobadas por el editor del sitio,',
  skipToContent: 'Ir al contenido', mainNav: 'Navegación principal', breadcrumbLabel: 'Ruta de navegación', breadcrumbHome: 'Inicio', menuOpen: 'Abrir el menú',
  faqTitle: 'Preguntas antes de vender o comprar', faqHint: 'Toca una pregunta para ver la respuesta.', relatedCalculators: 'Calcula también', sourcesTitle: 'De dónde salen las cifras: BOE y cotización con hora', writtenBy: 'Calculado por',
  asOf: 'Normas de', lastUpdated: 'cálculo actualizado con el BOE el', footerValidated: 'Comprobado con la Ley 17/1985 de metales preciosos, la Ley 35/2006 del IRPF, el texto refundido del ITP, la Ley 37/1992 del IVA y la Ley 7/2012, noviembre de 2026',
  footerBrowser: 'Los cálculos se hacen en tu navegador · nada de lo que escribes se envía · la única petición es la del precio del metal, a gold-api.com',
  footerDisclaimer: 'Oro al Gramo es un sitio independiente publicado por Radif Partners: no es un compro oro, ni una joyería, ni un banco. No compra, no vende, no tasa y no cobra comisiones. Los valores son orientativos: estiman el metal que contiene una pieza y no sustituyen el asesoramiento financiero ni fiscal. El precio del metal viene de gold-api.com, sin garantía de exactitud.',
  footerPopular: '',
  notFound: 'En esta dirección no hay ninguna página. El precio del gramo de oro por ley y el comprobador de ofertas están a un clic.',
  readMore: 'Seguir leyendo',
  ogl: '',
};
const en: typeof es = {
  updatedOn: 'Fineness and tax rules checked on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Figures and rules checked by the site’s publisher,',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Questions before you sell or buy', faqHint: 'Tap a question to see the answer.', relatedCalculators: 'Work out next', sourcesTitle: 'Where the figures come from: the Spanish Official Gazette and a timed price', writtenBy: 'Worked out by',
  asOf: 'Rules as of', lastUpdated: 'updated from the Official Gazette on', footerValidated: 'Checked against Spanish Law 17/1985 on precious metals, Income Tax Act 35/2006, the transfer tax act, VAT Act 37/1992 and Law 7/2012, November 2026',
  footerBrowser: 'Every sum runs in your browser · nothing you type is sent · the only request is for the metal price, from gold-api.com',
  footerDisclaimer: 'Oro al Gramo is an independent site published by Radif Partners: not a gold buyer, a jeweller or a bank. It buys, sells and tests nothing and takes no commission. Values are estimates only: they gauge the metal inside a piece and do not replace financial or tax advice. Metal prices come from gold-api.com with no guarantee of accuracy.',
  footerPopular: '',
  notFound: 'Nothing lives at this address. The gold price per gram by fineness and the offer checker are one click away.',
  readMore: 'Read more',
  ogl: '',
};
const ALL = { es, en };
export function t(lang: Locale) { return ALL[lang] ?? es; }
