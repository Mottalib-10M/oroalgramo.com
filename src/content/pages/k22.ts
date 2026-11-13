import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'k22', group: 'gold', order: 14, tool: 'ley', toolProps: { ley: 916, grams: 10 },
  related: ['k24', 'inversion', 'contraste', 'k18'], sources: ['ley17', 'liva'],
  es: {
    slug: 'precio-oro-22-kilates', nav: 'Oro de 22 kilates (916)', card: 'Once doceavos de oro: joyería de India y Oriente Medio y monedas',
    title: 'Precio del oro de 22 kilates hoy por gramo: ley 916',
    description: 'Precio del oro de 22 kilates hoy por gramo en euros, con la hora: la ley 916 en joyas de India y del Golfo y en monedas, y qué pasa con el 21 kilates.',
    h1: 'Precio del oro de 22 kilates hoy, por gramo',
    resume: 'El precio del oro de 22 kilates por gramo es once doceavos del precio del gramo de oro puro: una pieza marcada 916 lleva 916 milésimas de oro. Es una de las cinco leyes del oro admitidas por la Ley 17/1985, aunque en la joyería española casi no se fabrica; llega sobre todo en joyas traídas de India, Pakistán o los países del Golfo, donde el oro se compra como ahorro, y en algunas monedas de oro con aleación de cobre. La calculadora de abajo da el valor de cualquier peso de 916 con la cotización de gold-api.com y su hora. Si tu pieza lleva 875 o la indicación 21K, no es una ley admitida en España: calcula su valor con la lectura de contrastes y pide un ensayo antes de vender, porque el comprador pagará por el oro que encuentre.',
    faqs: [
      { q: '¿Puedo vender en España joyas de 22 kilates compradas fuera?', a: 'Sí. El 916 es una de las leyes legales en España, así que una pulsera o un collar de 22 kilates comprado en la India o en el Golfo se puede vender aquí como tal. El comprador las paga por gramo de 916; pide que las pese aparte de tus piezas de 750, porque valen bastante más por gramo y no deben mezclarse.' },
      { q: '¿Y las joyas de 21 kilates del Golfo?', a: 'El 875 no está en la lista de leyes de la Ley 17/1985, así que no se venden en España como oro de 875. Se pueden vender como metal: el comprador ensaya la pieza y paga el oro que contiene.' },
      { q: '¿Las monedas de 22 kilates son oro de inversión?', a: 'Pueden serlo: el artículo 140 de la Ley del IVA admite monedas de {coinLey} milésimas o más, acuñadas después de {coinYear}, con curso legal y vendidas a un precio que no supere en más del {coinPrem} el valor de su oro.' },
    ],
    body: (h) => `
<h2>Precio del oro de 22 kilates por peso</h2>
${h.table(['Peso', 'Oro puro', 'Valor en 916'], [5, 8, 10, 20, 40, 100].map((g) => [g + ' g', h.dec(g * 0.916, 3) + ' g', h.live(h.at(g, 916))]), 'Con la cotización de las ' + h.when + '.')}
<p>Las joyas de 22 kilates suelen ser pesadas: un juego de pulseras o un collar de boda puede pasar de 50 gramos. Con ese peso, cada punto de porcentaje de una oferta son ${h.live(h.at(50, 916) / 100)} por cada 50 gramos.</p>
<h2>916 frente a 750</h2>
<p>Un gramo de 916 vale ${h.live(h.at(1, 916), 'XAU', 'eur2')} y uno de 750, ${h.live(h.at(1, 750), 'XAU', 'eur2')}. La diferencia es de un 22 % a favor del 916. Si un comprador acostumbrado al 750 aplica su precio a una joya de 916, pierdes esa diferencia: muestra el número grabado y pide el precio de esa ley.</p>
<!--tool:offer-->
<h2>Monedas y oro de inversión</h2>
<p>Muchas monedas de oro se acuñan con 916 milésimas porque el cobre las hace más resistentes. La ${h.src('liva', 'Ley 37/1992')} las trata como oro de inversión, exento de IVA, si cumplen sus condiciones; compruébalo en la página de ${h.a('inversion', 'oro de inversión')}. La ${h.src('ley17', 'Ley 17/1985')} excluye de su ámbito las monedas con curso legal o que lo tuvieron.</p>
`,
  },
  en: {
    slug: '22-karat-gold-price', nav: '22 karat gold (916)', card: 'Eleven twelfths gold: Indian and Gulf jewellery and coins',
    title: '22k gold price per gram in Spain today: 916 gold in euros',
    description: '22k gold price per gram in Spain today, in euros with the time: 916 in Indian and Gulf jewellery and coins, and why 21 karat is not a legal fineness in Spain.',
    h1: '22k gold price per gram in Spain today',
    resume: 'The 22k gold price per gram is eleven twelfths of the price of a gram of pure gold: a piece stamped 916 holds 916 thousandths of gold. It is one of the five gold finenesses Spanish Law 17/1985 allows, though Spanish jewellers hardly make it; in Spain it mostly arrives as jewellery brought from India, Pakistan or the Gulf, where gold is bought as savings, and in some gold coins alloyed with copper. The calculator below values any weight of 916 at the gold-api.com price with its time. If your piece reads 875 or 21K, that is not a legal fineness in Spain: work out its value with the hallmark reader and get an assay before selling, since the buyer will pay for the gold it finds.',
    faqs: [
      { q: 'Can I sell 22 karat jewellery bought abroad in Spain?', a: 'Yes. 916 is one of the legal finenesses in Spain, so a 22 karat bracelet or necklace bought in India or the Gulf can be sold here as such. The buyer pays per gram of 916; ask for it to be weighed apart from your 750 pieces, because it is worth noticeably more per gram and should not be mixed with them.' },
      { q: 'What about 21 karat Gulf jewellery?', a: '875, or 21 karat, is not on the list in Law 17/1985, so it cannot be sold in Spain as 875 gold. It can be sold as metal: the buyer assays it and pays for the gold inside, which is still more per gram than 18 karat. Weigh it apart, note the 875 stamp on the receipt and compare the offer as a share of the metal value.' },
      { q: 'Are 22 karat coins investment gold?', a: 'They can be: article 140 of the VAT Act accepts coins of {coinLey} thousandths or more, struck after {coinYear}, that are or were legal tender and are usually sold for no more than {coinPrem} above their gold value. Many 22 karat bullion coins meet those terms. The investment gold page checks a coin against each condition.' },
    ],
    body: (h) => `
<h2>22k gold price per gram in Spain today, by weight</h2>
${h.table(['Weight', 'Pure gold', 'Value at 916'], [5, 8, 10, 20, 40, 100].map((g) => [g + ' g', h.dec(g * 0.916, 3) + ' g', h.live(h.at(g, 916))]), 'At the gold price of ' + h.when + '.')}
<p>22 karat jewellery tends to be heavy: a set of bangles or a wedding necklace can pass 50 grams. At that weight, every percentage point of an offer is ${h.live(h.at(50, 916) / 100)} per 50 grams.</p>
<h2>916 against 750</h2>
<p>A gram of 916 is worth ${h.live(h.at(1, 916), 'XAU', 'eur2')} and a gram of 750 ${h.live(h.at(1, 750), 'XAU', 'eur2')}: 22% more for the 916. If a buyer used to 750 applies its 750 price to a 916 piece, you lose that gap. Show the stamped number and ask for that fineness’s price.</p>
<!--tool:offer-->
<h2>Coins and investment gold</h2>
<p>Many gold coins are struck at 916 because copper makes them tougher. ${h.src('liva', 'Act 37/1992')} treats them as VAT-exempt investment gold if they meet its conditions; check on the ${h.a('inversion', 'investment gold')} page. ${h.src('ley17', 'Law 17/1985')} leaves coins that are or were legal tender outside its scope.</p>
`,
  },
});
