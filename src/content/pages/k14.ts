import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'k14', group: 'gold', order: 12, tool: 'ley', toolProps: { ley: 585, grams: 5 },
  related: ['k18', 'k9', 'lote', 'contraste'], sources: ['ley17'],
  es: {
    slug: 'precio-oro-14-kilates', nav: 'Oro de 14 kilates (585)', card: 'Algo más de la mitad de oro: joyería importada y relojes',
    title: 'Precio del oro de 14 kilates hoy por gramo: ley 585',
    description: 'Precio del oro de 14 kilates hoy por gramo en euros, con la hora: qué es la ley 585, cómo distinguirla del 750 en un lote y cuánto vale una cadena fina.',
    h1: 'Precio del oro de 14 kilates hoy, por gramo',
    resume: 'El precio del oro de 14 kilates por gramo es algo más de la mitad del precio del gramo de oro puro: una pieza marcada 585 lleva 585 milésimas de oro y 415 de otros metales. Es una ley legal en España según la norma española de metales preciosos, pero menos habitual que el 750 en la joyería nacional; aparece sobre todo en cadenas y pendientes importados, en joyería de Alemania, Italia o Estados Unidos y en algunos relojes. La calculadora de abajo da el valor de cualquier peso de 585 con la cotización de gold-api.com y su hora. Comparado con una pieza de 750 del mismo peso, una de 585 vale un 22 % menos como metal, y esa diferencia es la que se pierde si un lote mezclado se paga todo a la ley más baja o si una pieza de 750 se confunde con una de 585.',
    faqs: [
      { q: '¿Cómo distingo una pieza de 585 de una de 750?', a: 'Solo por el número grabado o por un ensayo: a simple vista el color depende más de la aleación que de la ley. Busca 585 o 14K en el cierre o en el interior. Si no ves nada, no supongas la ley más alta.' },
      { q: '¿El oro de 14 kilates se puede vender en España?', a: 'Sí. El 585 es una de las cinco leyes del oro que admite la norma española de metales preciosos, junto con 999, 916, 750 y 375. Un compro oro lo compra igual que el 750, pagando por gramo de esa ley, que vale algo menos de seis décimas del gramo puro. Pide que lo pese aparte para que no lo mezcle con tus piezas de 18 kilates.' },
      { q: '¿Por qué 585 y no 583?', a: 'Catorce veinticuatroavos son 583,3 milésimas, pero la ley europea se fijó en 585 para dejar un pequeño margen sobre la cifra exacta. En España la ley es 585 y no se admite tolerancia en menos: una pieza marcada 585 debe contener al menos esas milésimas. La calculadora usa 585, que es lo que dice la marca y lo que paga el comprador.' },
    ],
    body: (h) => `
<h2>Precio del oro de 14 kilates por peso</h2>
${h.table(['Peso', 'Oro puro', 'Valor en 585'], [1, 2, 3, 5, 8, 12].map((g) => [g + ' g', h.dec(g * 0.585, 3) + ' g', h.live(h.at(g, 585))]), 'Con la cotización del ' + h.when + '.')}
<p>Un gramo de 585 vale ahora ${h.live(h.at(1, 585), 'XAU', 'eur2')}, frente a ${h.live(h.at(1, 750), 'XAU', 'eur2')} un gramo de 750. Si tienes las dos leyes, pésalas aparte.</p>
<h2>Un lote con 585 y 750: no lo pesen junto</h2>
<p>Es habitual llegar al mostrador con una bolsa de piezas sueltas. Si el comprador lo pesa todo junto y aplica el precio del 585 o del 375, las piezas de 750 se pagan muy por debajo. La ${h.a('lote', 'calculadora de lotes')} valora cada grupo por separado; úsala para pedir un precio por grupo.</p>
<!--tool:lot-->
<h2>Lo que dice la ley</h2>
<p>La ${h.src('ley17', 'norma española de metales preciosos')} define la ley en milésimas, exige que sea constante en todo el objeto y no admite tolerancia en menos. Una pieza marcada 585 con menos oro no cumple la ley. Si dudas del grabado, un laboratorio de contraste puede ensayarla.</p>
`,
  },
  en: {
    slug: '14-karat-gold-price', nav: '14 karat gold (585)', card: 'Just over half gold: imported jewellery and watches',
    title: '14k gold price per gram in Spain today: 585 gold in euros',
    description: '14k gold price per gram in Spain today, in euros with the time: what the 585 stamp means, how to keep it apart from 750 in a lot and what a chain is worth.',
    h1: '14k gold price per gram in Spain today',
    resume: 'The 14k gold price per gram is just over half the price of a gram of pure gold: a piece stamped 585 holds 585 thousandths of gold and 415 of other metals. It is a legal fineness in Spain under article 9 of Law 17/1985, but less usual than 750 in Spanish-made jewellery; you mostly meet it on imported chains and earrings, on German, Italian or American jewellery and on some watches. The calculator below values any weight of 585 at the gold-api.com price with its time. Against a 750 piece of the same weight, a 585 piece is worth 22% less as metal, and that gap is exactly what you lose if a mixed lot is all paid at the lower fineness, or a 750 piece is mistaken for 585.',
    faqs: [
      { q: 'How can I tell 585 from 750?', a: 'Only by the stamped number or an assay: colour depends more on the alloy than on the fineness. Look for 585 or 14K on the clasp or inside the band. If you see nothing, do not assume the higher fineness.' },
      { q: 'Can 14 karat gold be sold in Spain?', a: 'Yes. 585 is one of the five gold finenesses Law 17/1985 allows, alongside 999, 916, 750 and 375. A gold buyer takes it just like 750, paying per gram of that fineness, which is worth a little under six tenths of a gram of pure gold. Ask for it to be weighed apart so it is not mixed with your 18 karat pieces.' },
      { q: 'Why 585 rather than 583?', a: 'Fourteen twenty-fourths is 583.3 thousandths, but the European standard was set at 585 to leave a small margin above the exact figure. In Spain the standard is 585, with no tolerance below it: a piece marked 585 must hold at least that many thousandths. The calculator uses 585, which is what the mark says and what the buyer pays for.' },
    ],
    body: (h) => `
<h2>14k gold price per gram in Spain today, by weight</h2>
${h.table(['Weight', 'Pure gold', 'Value at 585'], [1, 2, 3, 5, 8, 12].map((g) => [g + ' g', h.dec(g * 0.585, 3) + ' g', h.live(h.at(g, 585))]), 'At the gold price of ' + h.when + '.')}
<p>A gram of 585 is now worth ${h.live(h.at(1, 585), 'XAU', 'eur2')}, against ${h.live(h.at(1, 750), 'XAU', 'eur2')} for a gram of 750. If you have both, weigh them separately.</p>
<h2>A lot with 585 and 750: keep them apart</h2>
<p>Many sellers arrive at the counter with a bag of loose pieces. If the buyer weighs it all together and applies the 585 or 375 price, the 750 pieces are badly underpaid. The ${h.a('lote', 'mixed-lot calculator')} values each group separately; use it to ask for a price per group.</p>
<!--tool:lot-->
<h2>What the law says</h2>
<p>${h.src('ley17', 'Law 17/1985')} defines fineness in thousandths, requires it to be the same throughout the piece and allows no tolerance below the mark. A piece stamped 585 with less gold does not comply. If you doubt the stamp, an assay office can test it.</p>
`,
  },
});
