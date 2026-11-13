import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'plata', group: 'silver', order: 30, tool: 'silver', toolProps: { ley: 999, grams: 100 },
  related: ['plata925', 'onza', 'contraste', 'inversion'], sources: ['ley17', 'liva'],
  es: {
    slug: 'precio-plata-gramo', nav: 'Precio de la plata por gramo', card: 'Plata fina, de ley y 800: el gramo, la onza y el kilo',
    title: 'Precio de la plata hoy por gramo: 999, 925 y 800 en euros',
    description: 'Precio de la plata hoy por gramo en euros, con la hora: plata fina 999, plata de ley 925 y plata 800, la onza y el kilo, y por qué no es oro de inversión.',
    h1: 'Precio de la plata hoy, por gramo',
    resume: 'El precio de la plata por gramo es el de la onza troy de plata pura dividido entre {oz} gramos, multiplicado por la ley de la pieza. La Ley 17/1985 solo admite tres leyes para la plata en España: 999, la plata fina de lingotes y monedas; 925, la plata de ley de la joyería y la cubertería modernas; y 800, frecuente en cubiertos, bandejas y objetos antiguos. La calculadora de abajo da el valor de cualquier peso de plata en cada ley con la cotización de gold-api.com y su hora. La plata vale mucho menos por gramo que el oro, así que lo que cuenta es el peso: una bandeja o una cubertería completa pueden pesar varios kilos. Recuerda que la plata de inversión no entra en el régimen especial del oro de inversión de la Ley del IVA, que es el que exime de IVA a lingotes y monedas de oro.',
    faqs: [
      { q: '¿Cuánto vale un kilo de plata?', a: 'Un kilo de plata fina vale mil veces el precio del gramo de plata pura; uno de 925 o de 800, la parte que indica su ley. La tabla de la calculadora lo da con el precio del momento y su hora. Un comprador te pagará una parte menor que con el oro, porque el valor por gramo es mucho más bajo y el coste de refinar pesa más.' },
      { q: '¿La plata de inversión paga IVA en España?', a: 'El régimen especial de exención de los artículos 140 y 140 bis de la Ley del IVA se refiere solo al oro de inversión. Los lingotes y monedas de plata no entran en ese régimen, así que su compra a un comercio no se beneficia de esa exención. Compara siempre el precio final que pagas con el valor del metal que da la calculadora.' },
      { q: '¿Qué es la plata de primera ley?', a: 'En el comercio se usa a menudo para la plata de 925 milésimas, y «segunda ley» para la de 800. La Ley 17/1985 no usa esas expresiones: habla de leyes en milésimas, y para la plata admite 999, 925 y 800. Fíjate en el número grabado, no en el nombre que le den, para saber cuánta plata contiene una pieza.' },
    ],
    body: (h) => `
<h2>Precio de la plata por gramo y por ley</h2>
${h.table(['Ley', 'Un gramo', 'Un kilo'], h.P.silver.map((l) => [String(l), h.live(h.at(1, l, 'XAG'), 'XAG', 'eur2'), h.live(h.at(1000, l, 'XAG'), 'XAG')]), 'Con el precio de la plata de las ' + h.whenOf('XAG') + '.')}
<p>Una onza troy de plata fina vale ahora ${h.live(h.at(31.1034768, 1000, 'XAG'), 'XAG', 'eur2')}. Un gramo de oro de 750 vale lo mismo que unos ${h.num(h.at(1, 750) / h.at(1, 925, 'XAG'), 0)} gramos de plata de 925.</p>
<h2>Las tres leyes de la plata en España</h2>
<p>El artículo 9 de la ${h.src('ley17', 'Ley 17/1985')} fija para la plata las leyes 999, 925 y 800, sin tolerancia en menos. El artículo 7 permite bañar la plata en oro o rodio sin que deje de ser plata, siempre que cumpla su ley: una pieza de plata dorada se valora como plata. Lo contrario también ocurre: una pieza chapada en plata sobre otro metal no es plata y su valor como metal es casi nulo.</p>
<h2>La plata y el IVA</h2>
<p>La exención de los artículos 140 y 140 bis de la ${h.src('liva', 'Ley 37/1992')} se refiere al oro de inversión. Para la plata no hay un régimen equivalente en esos artículos, de modo que comprar un lingote de plata a un comercio no es lo mismo, fiscalmente, que comprar uno de oro. Para el oro, mira la página de ${h.a('inversion', 'oro de inversión')}.</p>
<!--tool:stamp-->
`,
  },
  en: {
    slug: 'silver-price-per-gram', nav: 'Silver price per gram', card: 'Fine, sterling and 800 silver: the gram, the ounce and the kilo',
    title: 'Silver price per gram in Spain today: 999, 925 and 800',
    description: 'Silver price per gram in Spain today, in euros with the time: 999 fine silver, 925 sterling and 800 silver, the ounce and the kilo, and the VAT question.',
    h1: 'Silver price per gram in Spain today',
    resume: 'The silver price per gram is the troy ounce price of pure silver divided by {oz} grams, times the fineness of the piece. Spanish Law 17/1985 only allows three silver finenesses: 999, the fine silver of bars and coins; 925, the sterling of modern jewellery and cutlery; and 800, common on old cutlery, trays and ornaments. The calculator below values any weight of silver at each fineness at the gold-api.com price with its time. Silver is worth far less per gram than gold, so weight is what counts: a tray or a full cutlery set can weigh several kilos. Bear in mind that investment silver falls outside the special investment gold regime of the Spanish VAT Act, which is what exempts gold bars and coins from VAT.',
    faqs: [
      { q: 'What is a kilo of silver worth?', a: 'A kilo of fine silver is worth a thousand times the price of a gram of pure silver; a kilo of 925 or 800, the share its fineness shows. The calculator’s table gives it at the current price, with its time. A buyer will pay you a smaller share than for gold, because the value per gram is far lower and refining costs weigh more.' },
      { q: 'Does investment silver carry VAT in Spain?', a: 'The special exemption in articles 140 and 140 bis of the VAT Act covers investment gold only. Silver bars and coins fall outside that regime, so buying them from a shop does not benefit from that exemption. Always compare the final price you pay with the metal value the calculator gives, at the same time.' },
      { q: 'What is first-standard silver?', a: 'Spanish shops often use “primera ley” for 925 silver and “segunda ley” for 800. Law 17/1985 does not use those phrases: it speaks of finenesses in thousandths, and for silver allows 999, 925 and 800. Look at the stamped number, not the name a shop gives it, to know how much silver a piece holds.' },
    ],
    body: (h) => `
<h2>Silver price per gram by fineness</h2>
${h.table(['Fineness', 'One gram', 'One kilo'], h.P.silver.map((l) => [String(l), h.live(h.at(1, l, 'XAG'), 'XAG', 'eur2'), h.live(h.at(1000, l, 'XAG'), 'XAG')]), 'At the silver price of ' + h.whenOf('XAG') + '.')}
<p>A troy ounce of fine silver is now worth ${h.live(h.at(31.1034768, 1000, 'XAG'), 'XAG', 'eur2')}. A gram of 750 gold is worth as much as about ${h.num(h.at(1, 750) / h.at(1, 925, 'XAG'), 0)} grams of 925 silver.</p>
<h2>Spain’s three silver finenesses</h2>
<p>Article 9 of ${h.src('ley17', 'Law 17/1985')} sets 999, 925 and 800 for silver, with no tolerance below. Article 7 lets silver be plated in gold or rhodium and still count as silver, as long as it meets its fineness: a gilt silver piece is valued as silver. The reverse happens too: silver plate over another metal is not silver and is worth next to nothing as metal.</p>
<h2>Silver and VAT</h2>
<p>The exemption in articles 140 and 140 bis of ${h.src('liva', 'Act 37/1992')} is for investment gold. Those articles have no equivalent for silver, so buying a silver bar from a shop is not, for tax purposes, the same as buying a gold one. For gold, see the ${h.a('inversion', 'investment gold')} page.</p>
<!--tool:stamp-->
`,
  },
});
