import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'vender', group: 'sell', order: 21, tool: 'compare', toolProps: { ley: 750, grams: 12 },
  related: ['offer', 'lote', 'irpf', 'efectivo'], sources: ['lo4_2015', 'l7_2012', 'lirpf'],
  es: {
    slug: 'vender-oro', nav: 'Vender oro: comparar ofertas', card: 'Dos o tres presupuestos por las mismas piezas, en porcentaje del metal',
    title: 'Vender oro en España: compara ofertas en porcentaje del oro',
    description: 'Vender oro en España sin malvenderlo: compara dos o tres presupuestos por las mismas piezas en porcentaje del valor del metal, con DNI, pago, recibo e IRPF.',
    h1: 'Vender oro: compara las ofertas antes de decidir',
    resume: 'Vender oro bien consiste en hacer que dos o tres compradores pongan precio a las mismas piezas el mismo día y quedarte con el que paga más parte del metal. Esta calculadora pone las ofertas una al lado de otra: escribe la ley, el peso y cada presupuesto, y verás el porcentaje del valor del oro que paga cada uno y la diferencia en euros entre el mejor y el peor, con la cotización de gold-api.com y su hora. Un mismo lote puede recibir ofertas muy distintas en la misma calle, y ninguna norma fija un mínimo. Debajo están los pasos que la ley española impone a la venta: identificación y registro de la operación, pago por transferencia desde cierto importe y, si ganas dinero respecto a lo que pagaste, declaración en el IRPF.',
    faqs: [
      { q: '¿Dónde vender oro al mejor precio?', a: 'No hay un tipo de comercio que pague siempre más. Joyerías, compro oro, casas de subastas y negociantes de lingotes pagan distinto según la pieza: el oro al peso, las joyas de firma o los lingotes. Pide al menos dos presupuestos el mismo día por las mismas piezas y compáralos en porcentaje del valor del metal, no en euros sueltos.' },
      { q: '¿Tengo que declarar la venta de oro en Hacienda?', a: 'Si vendes por más de lo que te costó, la ganancia va a la base del ahorro del IRPF, del {r1} al {r5}. Si vendes por menos, puedes declarar la pérdida y compensarla con otras ganancias. Necesitas saber lo que pagaste o el valor heredado, y guardar el recibo del comercio con el peso, la ley y el precio.' },
      { q: '¿Me pagarán en efectivo?', a: 'Solo si la operación no llega a {cash}. A partir de ese importe, la Ley 7/2012 prohíbe el pago en efectivo cuando una de las partes es un comercio, y suma los pagos si la venta se fracciona. Lleva los datos de una cuenta para recibir una transferencia y pide que el recibo indique el medio de pago.' },
    ],
    body: (h) => `
<h2>Vender oro paso a paso</h2>
<ol>
<li><strong>Separa por ley.</strong> Mira el número grabado y haz grupos: 750, 585, 375, sin marca. Pesa cada grupo en casa.</li>
<li><strong>Calcula el valor del metal</strong> de cada grupo con la ${h.a('lote', 'calculadora de lotes')}. Ese es tu techo.</li>
<li><strong>Pide dos o tres presupuestos</strong> el mismo día, con peso y ley por escrito.</li>
<li><strong>Compara en porcentaje</strong> con la calculadora de esta página. Un presupuesto en euros sin el peso no se puede comparar.</li>
<li><strong>Cobra y guarda el recibo.</strong> Te pedirán el DNI: es la obligación de registro del artículo 25 de la ${h.src('lo4_2015', 'Ley Orgánica 4/2015')}.</li>
</ol>
<h2>Cuánto cambia vender bien</h2>
${h.table(['Diferencia entre ofertas', 'En 12 g de 750'], [0.05, 0.1, 0.15, 0.2].map((s) => [h.pct(s, 0) + ' del metal', h.live(h.at(12, 750) * s)]), 'Con la cotización de las ' + h.when + '.')}
<h2>Pago e impuestos</h2>
<p>El artículo 7 de la ${h.src('l7_2012', 'Ley 7/2012')} impide pagar en efectivo {cash} o más cuando interviene un comercio; el pago llegará por transferencia o cheque. Si la venta te deja ganancia respecto a lo que pagaste, tributa en el IRPF según la ${h.src('lirpf', 'Ley 35/2006')}: calcula cuánto con el ${h.a('irpf', 'cálculo del IRPF')}.</p>
<!--tool:gains-->
`,
  },
  en: {
    slug: 'selling-gold-in-spain', nav: 'Selling gold: compare quotes', card: 'Two or three quotes for the same pieces, as a share of the metal',
    title: 'Selling gold in Spain: compare quotes as a share of metal',
    description: 'Selling gold in Spain without underselling: compare two or three quotes for the same pieces as a share of the metal value, with ID, payment and tax explained.',
    h1: 'Selling gold in Spain: compare quotes before you decide',
    resume: 'Selling gold in Spain well means getting two or three buyers to price the same pieces on the same day and taking the one that pays the largest share of the metal. This calculator puts the quotes side by side: enter the fineness, the weight and each quote, and see the share of the gold value each one pays and the gap in euros between the best and the worst, at the gold-api.com price with its time. One lot can draw very different offers in the same street, and no rule sets a minimum. Below are the steps Spanish law attaches to a sale: identification and a record of the deal, payment by transfer above a certain amount and, if you make money over what you paid, a line on your income tax return.',
    faqs: [
      { q: 'Where do you get the best price for gold in Spain?', a: 'No type of shop always pays more. Jewellers, gold buyers, auction houses and bullion dealers pay differently depending on the piece: scrap gold, signed jewellery or bars. Get at least two quotes the same day for the same pieces and compare them as a share of the metal value, not as bare euro amounts.' },
      { q: 'Do I have to declare a gold sale to the Spanish tax office?', a: 'If you sell for more than it cost you, the gain goes into the savings base of income tax. If you sell for less, you can declare the loss. You need to know what you paid or the inherited value.' },
      { q: 'Will I be paid in cash?', a: 'Only if the deal is under {cash}. From that amount, Law 7/2012 bans cash payment when one of the parties is a business, and adds up the payments if the sale is split. Bring the details of a bank account to receive a transfer and ask for the receipt to state how you were paid.' },
    ],
    body: (h) => `
<h2>Selling gold in Spain step by step</h2>
<ol>
<li><strong>Sort by fineness.</strong> Read the stamped number and make groups: 750, 585, 375, unmarked. Weigh each group at home.</li>
<li><strong>Work out the metal value</strong> of each group with the ${h.a('lote', 'mixed-lot calculator')}. That is your ceiling.</li>
<li><strong>Get two or three quotes</strong> the same day, with weight and fineness in writing.</li>
<li><strong>Compare them as shares</strong> with the calculator on this page. A quote in euros without the weight cannot be compared.</li>
<li><strong>Get paid and keep the receipt.</strong> You will be asked for ID: that is the record-keeping duty in article 25 of ${h.src('lo4_2015', 'Organic Law 4/2015')}.</li>
</ol>
<h2>How much selling well is worth</h2>
${h.table(['Gap between quotes', 'On 12 g of 750'], [0.05, 0.1, 0.15, 0.2].map((s) => [h.pct(s, 0) + ' of the metal', h.live(h.at(12, 750) * s)]), 'At the gold price of ' + h.when + '.')}
<h2>Payment and tax</h2>
<p>Article 7 of ${h.src('l7_2012', 'Law 7/2012')} bans cash payments of {cash} or more when a business is involved; payment will come by transfer or cheque. If the sale leaves you a gain over what you paid, it is taxed under ${h.src('lirpf', 'Act 35/2006')}: work out how much with the ${h.a('irpf', 'income tax estimate')}.</p>
<!--tool:gains-->
`,
  },
});
