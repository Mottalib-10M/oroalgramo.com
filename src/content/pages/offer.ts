import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'offer', group: 'sell', order: 20, tool: 'offer', toolProps: { ley: 750, grams: 10 },
  related: ['vender', 'lote', 'itp', 'efectivo'], sources: ['ley17', 'lo4_2015'],
  es: {
    slug: 'comprobar-oferta-compro-oro', nav: 'Comprobar la oferta de un compro oro', card: 'Qué porcentaje del valor del metal te paga una oferta',
    title: 'Compro oro: precio por gramo y qué parte del oro te pagan',
    description: 'Comprueba la oferta de un compro oro: escribe ley, peso y precio ofrecido y verás qué porcentaje del valor del oro te pagan y cuánto se queda el comprador.',
    h1: 'Compro oro: comprueba el precio que te ofrecen por gramo',
    resume: 'Un compro oro te ofrece un precio por tus piezas, a veces por gramo, a veces en total; esta calculadora lo convierte en el único dato que permite juzgarlo: qué parte del valor del metal te paga. Escribe la ley grabada, el peso que anotó el comprador y lo que ofrece. El resultado dice el porcentaje, los euros que se queda el comprador y el precio por gramo de tu oferta frente al valor del gramo de esa ley, con la cotización de gold-api.com y su hora. Ninguna ley española fija cuánto debe pagar un compro oro y ningún organismo publica lo que pagan, así que no hay un porcentaje justo oficial: lo que sí puedes hacer es comparar dos ofertas por las mismas piezas el mismo día y quedarte con la que paga más parte del metal.',
    faqs: [
      { q: '¿Qué porcentaje del valor del oro pagan los compro oro?', a: 'No hay dato oficial: cada comercio fija su precio y ningún organismo los publica. Por eso la calculadora no da un porcentaje justo, sino el tuyo: lo que te ofrecen dividido por el valor del metal a la hora de la cotización. Compáralo con el de un segundo comercio el mismo día, por las mismas piezas y el mismo peso.' },
      { q: '¿Me pueden pedir el DNI para vender oro?', a: 'Sí. La compraventa de joyas y metales es una actividad sujeta a registro documental según la norma de seguridad ciudadana, y el comercio anota tus datos, la descripción de las piezas y la operación. Es normal y no significa que sospechen de ti. Sin documento de identidad, un comercio serio no te comprará el oro.' },
      { q: '¿Qué hago si el peso del comprador no coincide con el mío?', a: 'Pide que pese delante de ti, con la báscula en cero y a la vista, y que escriba el peso y la ley de cada grupo en el recibo. Una diferencia de una décima de gramo es normal entre básculas; de un gramo, no. Si no te convence, recoge tus piezas y ve a otro comercio: no estás obligado a vender.' },
    ],
    body: (h) => `
<h2>Compro oro: del precio por gramo al porcentaje</h2>
<p>Si te dan el precio por gramo, compáralo con el valor del gramo de tu ley. Con el último precio, del ${h.when}, un gramo de 750 vale ${h.live(h.at(1, 750), 'XAU', 'eur2')} como metal. Una oferta de la mitad de esa cifra por gramo paga el 50 %. Si te dan un total, la calculadora divide entre el valor de todo el peso.</p>
${h.table(['Porcentaje del metal', 'Por 10 g de 750'], [0.5, 0.6, 0.7, 0.8, 0.9].map((s) => [h.pct(s, 0), h.live(h.at(10, 750) * s)]), 'Con la cotización del ' + h.when + '. Es el valor del metal por cada porcentaje, no lo que paga un comercio concreto.')}
<h2>Qué revisar antes de aceptar</h2>
<p>Que la báscula esté a la vista y marque cero. Que cada ley se pese aparte. Que el recibo diga peso y ley de cada grupo. Que la ley usada sea la grabada en tu pieza: la ${h.src('ley17', 'norma española de metales preciosos')} no admite tolerancia en menos, así que un 750 auténtico tiene al menos 750 milésimas. Y que te paguen por transferencia si la operación alcanza el límite del ${h.a('efectivo', 'pago en efectivo')}.</p>
<h2>Por qué el comprador no paga el 100 %</h2>
<p>El comercio vende el oro a una fundición que cobra el refinado, paga un impuesto por comprarte (el ITP), inmoviliza dinero hasta cobrar y asume que el precio baje. Su margen sale de ahí. Lo que puedes hacer es que compitan: ${h.a('vender', 'compara dos o tres presupuestos')}.</p>
<!--tool:compare-->
`,
  },
  en: {
    slug: 'check-gold-buyer-offer', nav: 'Check a gold buyer’s offer', card: 'What share of the metal value an offer pays',
    title: 'Gold buyer offer checker for Spain: share of the gold paid',
    description: 'Check a Spanish gold buyer’s offer: enter fineness, weight and the price offered to see what share of the gold value you are paid and what the buyer keeps.',
    h1: 'Gold buyer offer checker: what share of your gold is paid',
    resume: 'A Spanish gold buyer (“compro oro”) quotes for your pieces, sometimes per gram, sometimes as a total; this gold buyer offer checker turns that into the one figure that lets you judge it: what share of the metal value you are being paid. Enter the stamped fineness, the weight the buyer wrote down and the offer. The result gives the share, the euros the buyer keeps and the per-gram price of your offer against the gram value of that fineness, at the gold-api.com price with its time. No Spanish law sets what a gold buyer must pay and no agency publishes what buyers pay, so there is no official fair share; what you can do is compare two offers for the same pieces on the same day and take the one that pays the larger share.',
    faqs: [
      { q: 'What share of the gold value do Spanish buyers pay?', a: 'There is no official figure: each shop sets its own price and no agency publishes them. So the checker gives no fair share, only yours: what you are offered divided by the metal value at the time of the price. Compare it with a second shop the same day, for the same pieces and the same weight.' },
      { q: 'Will I be asked for ID to sell gold in Spain?', a: 'Yes. Buying and selling jewellery and metals is subject to record-keeping under article 25 of Organic Law 4/2015, and the shop logs your details, a description of the pieces and the deal. It is routine and does not mean you are suspected of anything. Without an identity document, a reputable shop will not buy your gold.' },
      { q: 'What if the buyer’s weight differs from mine?', a: 'Ask for the pieces to be weighed in front of you, scale at zero, and for the weight and fineness of each group to go on the receipt. A tenth of a gram is normal; a whole gram is not.' },
    ],
    body: (h) => `
<h2>Gold buyer offer checker: from per-gram price to share</h2>
<p>If you are quoted per gram, compare it with the gram value of your fineness. Right now, at ${h.when}, a gram of 750 is worth ${h.live(h.at(1, 750), 'XAU', 'eur2')} as metal. An offer of half that per gram pays 50%. If you are quoted a total, the calculator divides it by the value of the whole weight.</p>
${h.table(['Share of the metal', 'For 10 g of 750'], [0.5, 0.6, 0.7, 0.8, 0.9].map((s) => [h.pct(s, 0), h.live(h.at(10, 750) * s)]), 'At the gold price of ' + h.when + '. Worked examples, not market prices.')}
<h2>What to check before you say yes</h2>
<p>That the scale is in view and reads zero. That each fineness is weighed apart. That the receipt gives the weight and fineness of each group. That the fineness used is the one stamped on your piece: ${h.src('ley17', 'Law 17/1985')} allows no tolerance below the mark, so a genuine 750 holds at least 750 thousandths. And that you are paid by transfer if the deal reaches the ${h.a('efectivo', 'cash payment limit')}.</p>
<h2>Why the buyer never pays 100%</h2>
<p>The shop sells the gold to a refiner who charges for refining, pays the transfer tax on the purchase, ties up cash until it is paid and carries the risk of a falling price. Its margin comes out of that. What you can do is make buyers compete: ${h.a('vender', 'compare two or three quotes')}.</p>
<!--tool:compare-->
`,
  },
});
