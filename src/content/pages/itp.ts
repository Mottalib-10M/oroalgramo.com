import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'itp', group: 'rules', order: 41, tool: 'itp', toolProps: { ley: 750, grams: 10 },
  related: ['offer', 'irpf', 'vender', 'efectivo'], sources: ['itp'],
  es: {
    slug: 'itp-compra-oro-particulares', nav: 'ITP en la compra de oro', card: 'El impuesto que paga el compro oro al comprarte: quién y cuánto',
    title: 'ITP en la compra de oro a particulares: quién lo paga',
    description: 'ITP en la compra de oro a particulares: lo paga el comprador, no quien vende, al tipo de su comunidad o al {itp} estatal; cuánto supone en cada oferta real.',
    h1: 'ITP en la compra de oro a particulares: si vendes, lo paga el comprador',
    resume: 'El ITP en la compra de oro a particulares es un impuesto que se paga cuando un comercio te compra joyas: el Impuesto sobre Transmisiones Patrimoniales. Lo paga siempre quien compra, es decir, el compro oro o la joyería, no tú, aunque un papel que firmes diga otra cosa. No te lo pueden descontar de tu precio, pero el comercio lo tiene en cuenta al hacer su oferta. El porcentaje lo fija cada comunidad autónoma; si una no fijara ninguno, se aplica el {itp}. La calculadora muestra cuánto ITP paga el comprador sobre lo que te da y cómo se reparte el valor del metal entre lo que recibes, el impuesto y lo que le queda al comercio. Si conoces el porcentaje de tu comunidad, puedes cambiarlo. Tu único impuesto como vendedor es el IRPF, el impuesto sobre la renta, y solo si ganas dinero con la venta.',
    faqs: [
      { q: '¿Me pueden descontar el ITP de mi precio?', a: 'No. La norma dice que el impuesto lo paga quien compra, aunque se pacte otra cosa. El comercio puede ofrecer el precio que quiera, pero el impuesto es suyo y no debe aparecer como un descuento a tu cargo en el recibo. Si lo ves, pide que lo quiten o ve a otro comercio.' },
      { q: '¿Qué tipo de ITP se aplica al oro en mi comunidad?', a: 'Cada comunidad autónoma fija su tipo para los bienes muebles y algunas tienen reglas propias para las compras de oro a particulares. No hemos leído las leyes de las diecisiete comunidades una a una, así que no publicamos sus tipos: la calculadora usa el {itp} general salvo que escribas otro. Tu comunidad lo publica en su web tributaria.' },
      { q: '¿Pago ITP si vendo oro a otro particular?', a: 'En una compraventa entre particulares el impuesto lo debe quien compra, no quien vende, igual que cuando compra un comercio. Si eres tú quien compra oro a otro particular, te corresponde a ti liquidarlo ante tu comunidad autónoma, en el plazo y con el modelo que ella fije. El vendedor solo tendrá que declarar su ganancia en el IRPF.' },
    ],
    body: (h) => `
<h2>ITP en la compra de oro: quién lo paga</h2>
<p>La ${h.src('itp', 'norma del ITP')} dice que, cuando alguien compra un bien a un particular, el impuesto lo paga quien compra, y que un pacto entre las dos partes no cambia eso. El porcentaje lo aprueba cada comunidad autónoma; si una no aprobara ninguno, se aplica el {itp} a los objetos como las joyas, que la norma llama bienes muebles.</p>
<h2>Cuánto pesa el ITP en una oferta</h2>
${h.table(['Te pagan', 'ITP al ' + h.pct(h.P.itp.defaultMueblesRate, 0)], [100, 300, 500, 800, 1500].map((v) => [h.eur(v), h.eur(v * h.P.itp.defaultMueblesRate)]))}
<p>Al {itp}, el impuesto es una pequeña parte del valor del metal; la diferencia entre una oferta y otra suele venir sobre todo del margen del comercio y de lo que le cobra la fundición por refinar. Por eso el porcentaje del metal que te pagan es la cifra útil para comparar: hazlo con el ${h.a('offer', 'comprobador de ofertas')}.</p>
<h2>Tu parte: el IRPF</h2>
<p>Como vendedor, tú no pagas ITP. Solo pagas IRPF, el impuesto sobre la renta, si vendes por más de lo que te costó la pieza. Lo estima el ${h.a('irpf', 'cálculo del IRPF')}.</p>
<!--tool:gains-->
`,
  },
  en: {
    slug: 'transfer-tax-gold-buyers-spain', nav: 'Transfer tax on buying gold', card: 'The tax a gold buyer pays when it buys from you: who and how much',
    title: 'Transfer tax on gold bought from individuals in Spain',
    description: 'Spanish transfer tax (ITP) on gold bought from individuals: the buyer pays it, not the seller, at the regional rate or the {itp} state rate; what it means.',
    h1: 'Transfer tax on gold bought from individuals in Spain',
    resume: 'Spanish transfer tax on gold bought from individuals, the Impuesto sobre Transmisiones Patrimoniales or ITP, is charged when a business buys your jewellery. Under article 8 of the consolidated act, in a transfer of goods the person acquiring them pays, whatever the parties agree otherwise: the gold buyer settles the tax, not you. Each autonomous region sets the rate; if a region approved none, article 11 applies {itp} to movable goods. The calculator shows how much transfer tax the buyer pays on the price it gives you, and how the metal value splits between what you receive, the tax and the buyer’s gross margin. You can change the rate if you know your region’s. None of this changes the share of the metal value you should compare between shops.',
    faqs: [
      { q: 'Can the buyer deduct the transfer tax from my price?', a: 'Article 8 says the acquirer pays, whatever the parties agree. The shop can offer any price it likes, and its price will reflect its costs, but the tax is its own and should not appear on your receipt as a deduction charged to you. If it does, compare the net amount with another shop as a share of the metal value.' },
      { q: 'Which transfer tax rate applies to gold in my region?', a: 'Each region sets its own rate for movable goods and some have specific rules for these purchases. We have not read them one by one, so we do not publish them: the calculator uses the {itp} state rate unless you enter another.' },
      { q: 'Do I pay transfer tax if I sell gold to another private person?', a: 'In a sale between private persons the tax is owed by the buyer, not the seller, just as when a shop buys. If you are the one buying gold from another individual, it is yours to settle with your region, within the deadline and on the form it sets. The seller only has to declare any gain in income tax.' },
    ],
    body: (h) => `
<h2>Transfer tax on gold bought from individuals in Spain: the act</h2>
<p>Article 8 of ${h.src('itp', 'Royal Legislative Decree 1/1993')} makes the acquirer liable, as taxpayer, in transfers of goods and rights, whatever the parties stipulate to the contrary. Article 11.1.a leaves the rate to the autonomous region and, if there is no regional rate, sets {itp} for transfers of movable goods.</p>
<h2>How much transfer tax weighs in an offer</h2>
${h.table(['You are paid', 'Transfer tax at ' + h.pct(h.P.itp.defaultMueblesRate, 0)], [100, 300, 500, 800, 1500].map((v) => [h.eur(v), h.eur(v * h.P.itp.defaultMueblesRate)]))}
<p>At the state rate, the tax is a small part of the metal value; gaps between offers mostly come from the shop’s margin and refining cost. That is why the share of the metal you are paid is the useful figure to compare: use the ${h.a('offer', 'offer checker')}.</p>
<h2>Your side: income tax</h2>
<p>As the seller you pay no transfer tax, but if you make money over what the piece cost you, the gain goes on your income tax. The ${h.a('irpf', 'income tax estimate')} gives a figure.</p>
<!--tool:gains-->
`,
  },
});
