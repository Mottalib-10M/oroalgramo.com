import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'k24', group: 'gold', order: 11, tool: 'ley', toolProps: { ley: 999, grams: 10 },
  related: ['onza', 'inversion', 'k22', 'irpf'], sources: ['ley17', 'liva'],
  es: {
    slug: 'precio-oro-24-kilates', nav: 'Oro de 24 kilates (999)', card: 'Oro fino: lingotes, monedas de inversión y precio del gramo puro',
    title: 'Precio del oro de 24 kilates hoy por gramo: oro fino 999',
    description: 'Precio del oro de 24 kilates hoy por gramo en euros, con la hora: oro fino 999, lingotes de 1 a 100 gramos, cuándo es oro de inversión sin IVA y su prima.',
    h1: 'Precio del oro de 24 kilates hoy, por gramo',
    resume: 'El precio del oro de 24 kilates por gramo es prácticamente el precio del gramo de oro puro, porque esa ley, marcada 999, solo admite una milésima de otros metales. Es la ley de los lingotes y de buena parte de las monedas de inversión; casi nunca de una joya, porque el oro fino es demasiado blando para llevarlo puesto. La calculadora de abajo da el valor de cualquier peso de oro de 999 con la cotización de gold-api.com y su hora. Si compras un lingote, compara ese valor con lo que te piden: la diferencia es la prima del vendedor. Si vendes, la oferta de un comprador profesional por un lingote suele acercarse más al valor del metal que la oferta por una joya, porque no hay que refinarlo, aunque ninguna norma fija ese porcentaje.',
    faqs: [
      { q: '¿Hay joyas de 24 kilates en España?', a: 'Pocas. El oro de 999 se raya y se deforma con facilidad, por eso la joyería española usa sobre todo 750. Las piezas de 24 kilates suelen ser lingotes, láminas, monedas o joyas importadas de mercados donde el oro fino se lleva como ahorro.' },
      { q: '¿Un lingote de 24 kilates paga IVA?', a: 'No, si su ley es de al menos {barLey} milésimas y su peso es uno de los admitidos: es oro de inversión según la norma del IVA y su venta está exenta. La página de oro de inversión comprueba una pieza concreta.' },
      { q: '¿Qué diferencia hay entre 999 y 999,9?', a: 'Una décima de milésima: 999,9 es el oro de muchos lingotes de refinería. En valor, 10 gramos de 999,9 contienen apenas un miligramo más de oro que 10 gramos de 999. La norma española de metales preciosos trabaja con la ley 999 como la más alta.' },
    ],
    body: (h) => `
<h2>Precio del oro de 24 kilates en los pesos más comunes</h2>
${h.table(['Lingote o peso', 'Valor del metal'], [1, 2.5, 5, 10, 20, 31.1034768, 50, 100].map((g) => [g === 31.1034768 ? '1 onza troy (31,1 g)' : h.dec(g, 1) + ' g', h.live(h.at(g, 999))]), 'Oro de 999, con la cotización del ' + h.when + '.')}
<p>Los lingotes pequeños tienen más prima por gramo que los grandes: fabricarlos, certificarlos y empaquetarlos cuesta casi lo mismo pese a su tamaño. Por eso un gramo comprado en un lingote de 1 g sale más caro que un gramo comprado en uno de 100 g, aunque el oro que contienen valga lo mismo.</p>
<h2>Oro de 24 kilates y oro de inversión</h2>
<p>No todo el oro de 24 kilates es oro de inversión a efectos fiscales. La ${h.src('liva', 'norma del IVA')} exige, para lingotes y láminas, una ley de al menos {barLey} milésimas y un peso admitido; para monedas, ley de {coinLey} o más, acuñación posterior a {coinYear}, curso legal y un precio que no supere en más del {coinPrem} el valor de su oro. Si se cumplen, la compra y la venta están exentas de IVA. ${h.a('inversion', 'Comprueba tu lingote o moneda')}.</p>
<h2>Si vendes oro fino</h2>
<p>Al vender un lingote, pide la oferta por escrito y conviértela en porcentaje del valor del metal. La ganancia frente a lo que pagaste tributa en el IRPF, en la base del ahorro: el ${h.a('irpf', 'cálculo del IRPF')} te da una estimación.</p>
<!--tool:gains-->
`,
  },
  en: {
    slug: '24-karat-gold-price', nav: '24 karat gold (999)', card: 'Fine gold: bars, investment coins and the pure gram price',
    title: '24k gold price per gram in Spain today: fine gold 999',
    description: '24k gold price per gram in Spain today, in euros with the time: 999 fine gold, bars from 1 to 100 grams, when it is VAT-free investment gold and the premium.',
    h1: '24k gold price per gram in Spain today',
    resume: 'The 24k gold price per gram is, for all practical purposes, the price of a gram of pure gold, because that fineness, stamped 999, allows only one thousandth of other metals. It is the fineness of bars and many investment coins, and almost never of jewellery, since fine gold is too soft to wear. The calculator below values any weight of 999 gold at the gold-api.com price with its time. If you are buying a bar, compare that value with the asking price: the difference is the seller’s premium. If you are selling, a professional buyer’s offer for a bar tends to sit closer to the metal value than an offer for jewellery, because nothing needs refining, though no rule fixes that share.',
    faqs: [
      { q: 'Is 24 karat jewellery sold in Spain?', a: 'Rarely. 999 gold scratches and bends easily, which is why Spanish jewellery is mostly 750. 24 karat pieces in Spain are usually bars, wafers, coins or jewellery brought from markets where fine gold is worn as savings. If you have one, it is worth the most per gram of any piece you own, so have it weighed on its own.' },
      { q: 'Does a 24k gold bar carry VAT in Spain?', a: 'No, if its fineness is at least {barLey} thousandths and its weight is one of those accepted: it is investment gold under article 140 of the VAT Act and its sale is exempt. The investment gold page checks a given piece.' },
      { q: 'What is the difference between 999 and 999.9?', a: 'One tenth of a thousandth: 999.9 is the gold of many refinery bars. In value, 10 grams of 999.9 hold barely a milligram more gold than 10 grams of 999, a gap of cents at today’s price. Spanish law lists 999 as the highest gold fineness, so a 999.9 bar is simply sold as fine gold.' },
    ],
    body: (h) => `
<h2>24k gold price per gram in Spain today, by bar weight</h2>
${h.table(['Bar or weight', 'Metal value'], [1, 2.5, 5, 10, 20, 31.1034768, 50, 100].map((g) => [g === 31.1034768 ? '1 troy ounce (31.1 g)' : h.dec(g, 1) + ' g', h.live(h.at(g, 999))]), '999 gold at the price of ' + h.when + '.')}
<p>Small bars carry more premium per gram than big ones: making, certifying and packing them costs about the same whatever the size. So a gram bought as a 1 g bar costs more than a gram bought inside a 100 g bar, though the gold is worth the same.</p>
<h2>24 karat gold and investment gold</h2>
<p>Not all 24 karat gold is investment gold for tax purposes. ${h.src('liva', 'Act 37/1992')} requires bars and wafers to be at least {barLey} thousandths and of an accepted weight; coins must be {coinLey} or more, struck after {coinYear}, legal tender and priced no more than {coinPrem} above their gold. If they qualify, buying and selling them is exempt from VAT. ${h.a('inversion', 'Check your bar or coin')}.</p>
<h2>If you sell fine gold</h2>
<p>When selling a bar, get the offer in writing and turn it into a share of the metal value. The gain over what you paid is taxed in the savings base of Spanish income tax: the ${h.a('irpf', 'income tax estimate')} gives you a figure.</p>
<!--tool:gains-->
`,
  },
});
