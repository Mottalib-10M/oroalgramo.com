import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'gramo', group: 'gold', order: 9, tool: 'stamp',
  related: ['k18', 'offer', 'onza', 'vender'], sources: ['ley17'],
  es: {
    slug: 'cuanto-vale-un-gramo-de-oro', nav: 'Cuánto vale un gramo de oro', card: 'El gramo de oro según la ley grabada: de 375 a 999',
    title: 'Gramo de oro hoy: cuánto vale en España según su ley',
    description: 'Cuánto vale un gramo de oro hoy en España: de 375 a 999 milésimas, con la hora del precio, y por qué depende del número grabado en la pieza y de quién compra.',
    h1: 'Cuánto vale un gramo de oro hoy',
    resume: 'Cuánto vale un gramo de oro depende de una sola cosa además del precio del día: de cuánto oro puro hay en ese gramo. Un gramo de oro puro vale lo que marca la cotización dividida entre los {oz} gramos de una onza troy; un gramo de joya de 750 vale tres cuartos de eso; uno de 375, tres octavos. Por eso la pregunta tiene cinco respuestas legales en España, una por cada ley que admite la Ley 17/1985. Escribe abajo el número que ves grabado en tu pieza y su peso: la calculadora dice si es una ley legal, a cuántos kilates equivale y cuánto vale su metal, con la cotización de gold-api.com y la hora. Lo que te paguen por ese gramo será menos: el comprador tiene que fundir, refinar y ganar algo.',
    faqs: [
      { q: '¿Cuánto vale un gramo de oro de 18 kilates?', a: 'Tres cuartos del precio del gramo de oro puro, porque 18 kilates son 750 milésimas. La tabla de esta página lo da con el precio del momento y su hora. Es el valor del metal: un compro oro te pagará una parte de esa cifra, porque descuenta su margen, el refinado y el impuesto que paga al comprarte.' },
      { q: '¿Cuánto pagan por un gramo de oro en un compro oro?', a: 'Ningún organismo lo publica y cada comercio fija el suyo, a veces distinto según la ley y el peso del lote. Lo único objetivo es pasar su oferta a porcentaje del valor del metal y compararla con otra oferta el mismo día, por las mismas piezas. El comprobador de ofertas de este sitio hace esa cuenta con tu peso y tu precio.' },
      { q: '¿Un gramo de oro vale lo mismo en una joya que en un lingote?', a: 'El oro puro que contiene vale lo mismo. Pero un gramo de joya de 750 tiene menos oro que un gramo de lingote de 999, y el comprador descuenta más por una joya porque tiene que fundirla y refinarla antes de revenderla. Un lingote de una refinería conocida se revende tal cual, con menos coste para quien lo compra.' },
    ],
    body: (h) => `
<h2>Cuánto vale un gramo de oro según la ley</h2>
${h.table(['Ley grabada', 'Kilates', 'Un gramo vale ahora'], h.P.gold.map((g) => [String(g.ley), String(g.k), h.live(h.at(1, g.ley), 'XAU', 'eur2')]), 'Con la cotización de las ' + h.when + '.')}
<p>Las cinco leyes son las del artículo 9 de la ${h.src('ley17', 'Ley 17/1985')}. Si tu pieza lleva otro número, por ejemplo 875 o 333, no tiene una ley legal en España y su valor depende de un ensayo.</p>
<h2>Del gramo de metal al gramo que te pagan</h2>
<p>El precio que da esta página es el del metal. Un compro oro paga un porcentaje de ese valor, que varía de un comercio a otro. Para saber si una oferta por gramo es razonable, divídela entre el valor del gramo de esa ley: si te ofrecen por un gramo de 750 lo que vale medio gramo, te pagan el 50 %. El ${h.a('offer', 'comprobador de ofertas')} lo hace con el total.</p>
<!--tool:offer-->
<h2>Pesar bien un gramo</h2>
<p>Una báscula de cocina que marque gramos enteros puede equivocarse en casi un gramo con piezas ligeras. Si vendes poco peso, usa una báscula de precisión o pide que pesen delante de ti con una que marque décimas. En una pieza de 3 gramos, medio gramo de error son ${h.live(h.at(0.5, 750))} en 750.</p>
`,
  },
  en: {
    slug: 'how-much-is-a-gram-of-gold', nav: 'How much is a gram of gold', card: 'A gram of gold by the stamped fineness: from 375 to 999',
    title: 'Gram of gold today: what it is worth in Spain by fineness',
    description: 'How much a gram of gold is worth in Spain today, from 375 to 999 thousandths, with the time of the price, and why it depends on the stamp and on who buys it.',
    h1: 'How much is a gram of gold worth today',
    resume: 'How much a gram of gold is worth depends on one thing besides the day’s price: how much pure gold there is in that gram. A gram of pure gold is worth the market price divided by the {oz} grams of a troy ounce; a gram of 750 jewellery is worth three quarters of that; a gram of 375, three eighths. So the question has five legal answers in Spain, one for each fineness Law 17/1985 allows. Type below the number stamped on your piece and its weight: the calculator says whether it is a legal fineness, what karat it equals and what its metal is worth, at the gold-api.com price with its time. What you are paid for that gram will be less: the buyer has to melt, refine and make a profit.',
    faqs: [
      { q: 'How much is a gram of 18 karat gold worth?', a: 'Three quarters of the price of a gram of pure gold, because 18 karat is 750 thousandths. The table on this page gives it at the current price, with its time. That is the metal value: a gold buyer will pay you part of it, because it deducts its margin, the refining cost and the tax it pays when it buys from you.' },
      { q: 'How much do Spanish gold buyers pay per gram?', a: 'No agency publishes it and each shop sets its own, sometimes different by fineness and by lot weight. The only objective test is to turn its offer into a share of the metal value and compare it with another offer the same day, for the same pieces. The offer checker on this site does that sum with your weight and price.' },
      { q: 'Is a gram of gold worth the same in jewellery as in a bar?', a: 'The pure gold inside is worth the same. But a gram of 750 jewellery holds less gold than a gram of a 999 bar, and buyers deduct more for jewellery because it has to be melted and refined before it can be resold. A bar from a known refinery is resold as it is, which costs the buyer less.' },
    ],
    body: (h) => `
<h2>How much a gram of gold is worth by fineness</h2>
${h.table(['Stamped fineness', 'Karat', 'One gram is worth now'], h.P.gold.map((g) => [String(g.ley), String(g.k), h.live(h.at(1, g.ley), 'XAU', 'eur2')]), 'At the gold price of ' + h.when + '.')}
<p>The five finenesses are those in article 9 of ${h.src('ley17', 'Law 17/1985')}. If your piece carries another number, such as 875 or 333, it has no legal Spanish fineness and its value depends on an assay.</p>
<h2>From a gram of metal to a gram you are paid for</h2>
<p>The price on this page is the metal’s. A gold buyer pays a share of that value, which varies between shops. To judge a per-gram offer, divide it by the gram value for that fineness: if you are offered for a gram of 750 what half a gram is worth, you are being paid 50%. The ${h.a('offer', 'offer checker')} does it for the total.</p>
<!--tool:offer-->
<h2>Weighing a gram properly</h2>
<p>A kitchen scale that reads whole grams can be out by almost a gram on light pieces. If you are selling little weight, use a precision scale or ask for your pieces to be weighed in front of you on one that reads tenths. On a 3 gram piece, half a gram of error is ${h.live(h.at(0.5, 750))} at 750.</p>
`,
  },
});
