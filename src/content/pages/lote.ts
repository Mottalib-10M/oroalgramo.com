import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'lote', group: 'sell', order: 22, tool: 'lot',
  related: ['offer', 'vender', 'k14', 'k9'], sources: ['ley17'],
  es: {
    slug: 'valor-oro-usado-joyas', nav: 'Valor del oro usado (lote de joyas)', card: 'Varias joyas de leyes distintas: valor de cada grupo y del total',
    title: 'Valor del oro usado: joyas de leyes distintas en un lote',
    description: 'Valor del oro usado de un lote de joyas con leyes distintas: separa 750, 585 y 375, pesa cada grupo y obtén el valor del metal de cada uno y del total.',
    h1: 'Valor del oro usado de un lote de joyas',
    resume: 'El valor del oro usado de un cajón de joyas viejas no se calcula de una vez: cada pieza tiene su ley, y una alianza de 750 vale el doble por gramo que una cadena de 375. Esta calculadora valora hasta tres grupos de leyes distintas y suma el total, con la cotización de gold-api.com y su hora. Separa las piezas por el número grabado, pesa cada grupo en una báscula de cocina y escribe ley y peso. El resultado dice cuánto oro puro hay en el lote y cuánto vale cada grupo, que es lo que debes pedir que el comprador pague por separado. El oro usado vale lo mismo como metal que el nuevo: lo que cambia es que nadie paga ya la hechura, salvo que la pieza tenga valor de joya por su firma o su antigüedad.',
    faqs: [
      { q: '¿Cómo separo las joyas por ley?', a: 'Busca con una lupa el número de tres cifras en cada pieza: 750, 585, 375 o 916, en el cierre, el interior del anillo o la anilla. Haz un montón por número y otro con las que no tienen marca. Pesa cada montón y escribe los pesos en la calculadora; las que no tienen marca, valóralas aparte con la ley más baja.' },
      { q: '¿El oro roto o con piedras vale menos?', a: 'El oro roto vale lo mismo como metal: una cadena partida contiene el mismo oro que entera. Las piedras, en cambio, pesan sin ser oro: si no las quitas, resta un peso aproximado o pide que el comprador las saque antes de pesar. Si alguna piedra puede tener valor propio, pide que te la devuelvan.' },
      { q: '¿Debo vender el lote entero en un solo sitio?', a: 'No necesariamente. Una pieza firmada, antigua o de diseño puede valer más en una joyería, un anticuario o una subasta que fundida al peso. Sepárala y pide una tasación aparte. El resto, las piezas que solo valen por su metal, compáralo en porcentaje del valor del oro en dos comercios el mismo día.' },
    ],
    body: (h) => `
<h2>Valor del oro usado por grupo de ley</h2>
<p>Con el ejemplo de la calculadora, 8 g de 750, 4 g de 585 y 3 g de 375, el lote contiene ${h.dec(8 * 0.75 + 4 * 0.585 + 3 * 0.375, 3)} g de oro puro y vale ${h.live(h.at(8, 750) + h.at(4, 585) + h.at(3, 375))} a las ${h.when}. Si un comprador pagara los 15 gramos como si todo fuera de 375, el metal reconocido sería ${h.live(h.at(15, 375))}: una diferencia de ${h.live(h.at(8, 750) + h.at(4, 585) - h.at(12, 375))}.</p>
${h.table(['Grupo', 'Peso', 'Valor del metal'], [[750, 8], [585, 4], [375, 3]].map(([l, g]) => ['Ley ' + l, g + ' g', h.live(h.at(g, l))]), 'Ejemplo del calculador, con la cotización de las ' + h.when + '.')}
<h2>Piezas sin marca y piezas raras</h2>
<p>Una pieza sin número puede ser de oro, chapada o de otro metal. La ${h.src('ley17', 'Ley 17/1985')} deja fuera de su ámbito los objetos de más de cien años, que a menudo no llevan contraste. Para no inflar el valor, cuenta esas piezas a 375 o pide un ensayo. Las que llevan un número que no es una ley española, como 333 o 875, míralas en el ${h.a('contraste', 'lector de contrastes')}.</p>
<h2>Después: la oferta</h2>
<p>Con el valor de cada grupo, pide al comprador precio por grupo y pasa cada oferta a porcentaje con el ${h.a('offer', 'comprobador')}.</p>
<!--tool:offer-->
`,
  },
  en: {
    slug: 'scrap-gold-value-mixed-lot', nav: 'Scrap gold value (mixed lot)', card: 'Several pieces of different fineness: value of each group and the total',
    title: 'Scrap gold value in Spain: a lot of mixed-fineness jewellery',
    description: 'Scrap gold value of a jewellery lot in Spain with mixed fineness: sort 750, 585 and 375, weigh each group and get the metal value of each and of the total.',
    h1: 'Scrap gold value of a mixed lot of jewellery',
    resume: 'The scrap gold value of a drawer of old jewellery cannot be worked out in one go: each piece has its own fineness, and a 750 ring is worth twice as much per gram as a 375 chain. This calculator values up to three groups of different fineness and adds up the total, at the gold-api.com price with its time. Sort the pieces by the stamped number, weigh each group on a kitchen scale and enter fineness and weight. The result shows how much pure gold the lot holds and what each group is worth, which is what you should ask the buyer to pay separately. Old gold is worth the same as new gold as metal: what changes is that nobody pays for the workmanship any more, unless the piece has value as jewellery for its maker or age.',
    faqs: [
      { q: 'How do I sort jewellery by fineness?', a: 'Use a magnifier to find the three-digit number on each piece: 750, 585, 375 or 916, on the clasp, inside the ring or on the jump ring. Make a pile per number and one for pieces with no mark. Weigh each pile and enter the weights in the calculator; value the unmarked ones separately at the lowest fineness.' },
      { q: 'Is broken gold or gold with stones worth less?', a: 'Broken gold is worth the same as metal: a snapped chain holds the same gold as a whole one. Stones, on the other hand, weigh without being gold: if you do not remove them, deduct an estimated weight or ask the buyer to take them out before weighing. If a stone may have value of its own, ask for it back.' },
      { q: 'Should I sell the whole lot in one place?', a: 'Not necessarily. A signed, antique or designer piece may fetch more at a jeweller, an antiques dealer or an auction than melted down by weight. Set it aside and get it valued separately. Compare the rest, the pieces worth only their metal, as a share of the gold value at two shops on the same day.' },
    ],
    body: (h) => `
<h2>Scrap gold value by fineness group</h2>
<p>With the calculator’s example, 8 g of 750, 4 g of 585 and 3 g of 375, the lot holds ${h.dec(8 * 0.75 + 4 * 0.585 + 3 * 0.375, 3)} g of pure gold and is worth ${h.live(h.at(8, 750) + h.at(4, 585) + h.at(3, 375))} at ${h.when}. If a buyer paid all 15 grams as 375, the metal it recognised would be ${h.live(h.at(15, 375))}: a gap of ${h.live(h.at(8, 750) + h.at(4, 585) - h.at(12, 375))}.</p>
${h.table(['Group', 'Weight', 'Metal value'], [[750, 8], [585, 4], [375, 3]].map(([l, g]) => [l + ' fineness', g + ' g', h.live(h.at(g, l))]), 'Calculator example, at the gold price of ' + h.when + '.')}
<h2>Unmarked and unusual pieces</h2>
<p>A piece without a number may be gold, plated or another metal. ${h.src('ley17', 'Law 17/1985')} leaves articles over a hundred years old outside its scope, and they often carry no hallmark. To avoid inflating the value, count those at 375 or get an assay. Pieces with a number that is not a Spanish fineness, such as 333 or 875, check them in the ${h.a('contraste', 'hallmark reader')}.</p>
<h2>Next: the offer</h2>
<p>With each group’s value in hand, ask the buyer for a price per group and turn each offer into a share with the ${h.a('offer', 'offer checker')}.</p>
<!--tool:offer-->
`,
  },
});
