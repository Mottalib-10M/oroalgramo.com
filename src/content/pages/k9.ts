import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'k9', group: 'gold', order: 13, tool: 'ley', toolProps: { ley: 375, grams: 3 },
  related: ['k14', 'contraste', 'lote', 'offer'], sources: ['ley17'],
  es: {
    slug: 'precio-oro-9-kilates', nav: 'Oro de 9 kilates (375)', card: 'Tres octavos de oro: la ley más baja admitida en España',
    title: 'Precio del oro de 9 kilates hoy por gramo: ley 375',
    description: 'Precio del oro de 9 kilates hoy por gramo en euros, con la hora: la ley 375 es la más baja que admite la ley española; cuánto vale una pieza y por qué.',
    h1: 'Precio del oro de 9 kilates hoy, por gramo',
    resume: 'El precio del oro de 9 kilates por gramo es tres octavos del precio del gramo de oro puro: una pieza marcada 375 lleva 375 milésimas de oro y 625 de otros metales, sobre todo plata y cobre. Es la ley más baja que el artículo 9 de la Ley 17/1985 admite para vender una pieza como oro en España; por debajo de 375 milésimas no puede comercializarse como objeto de oro. Se ve en joyería económica, en piezas británicas, en cadenas finas y en algunos relojes y anillos de moda. La calculadora de abajo da el valor de cualquier peso de 375 con la cotización de gold-api.com y su hora. Cuando no sabes la ley de una pieza, este es el valor prudente: si resulta ser de ley más alta, solo puedes ganar.',
    faqs: [
      { q: '¿El oro de 9 kilates es oro de verdad?', a: 'Sí, en la medida de su ley: 375 milésimas de oro. Es menos de la mitad, pero la ley española lo admite como oro si lleva sus marcas. Su valor como metal es la mitad que el del 750 del mismo peso.' },
      { q: '¿Por qué calcular con 375 una pieza sin marca?', a: 'Porque es la ley legal más baja que admite la Ley 17/1985: así no esperas de más. Si un ensayo da una ley superior, el valor sube y te llevas una buena noticia. Lo contrario, contar con 750 y descubrir que era 375, sale caro, porque una pieza de 9 kilates vale la mitad por gramo que una de 18.' },
      { q: '¿Se oscurece el oro de 9 kilates?', a: 'Puede ganar un tono más apagado con el tiempo porque, con solo 375 milésimas de oro, lleva mucha plata y cobre, que reaccionan con el aire y la piel. Eso no cambia su ley ni su valor como metal: se paga por el oro que contiene. Una limpieza suave le devuelve el color, pero no la limpies con abrasivos antes de venderla.' },
    ],
    body: (h) => `
<h2>Precio del oro de 9 kilates por peso</h2>
${h.table(['Peso', 'Oro puro', 'Valor en 375'], [1, 2, 3, 5, 10].map((g) => [g + ' g', h.dec(g * 0.375, 3) + ' g', h.live(h.at(g, 375))]), 'Con la cotización de las ' + h.when + '.')}
<p>Un gramo de 375 vale ${h.live(h.at(1, 375), 'XAU', 'eur2')}, exactamente la mitad que un gramo de 750. En piezas ligeras, el margen fijo de un comprador pesa mucho: una oferta baja en euros puede ser razonable en porcentaje, o al revés. Compruébalo siempre en porcentaje.</p>
<!--tool:offer-->
<h2>El límite de la ley española</h2>
<p>La ${h.src('ley17', 'Ley 17/1985')} fija cinco leyes para el oro y 375 es la menor. Una pieza de 333 milésimas (8 kilates), habitual en Alemania, no alcanza ninguna ley española; según el artículo 10, el objeto que no llega a la ley mínima se rechaza para el comercio como oro. Si la vendes, el comprador pagará el metal que contenga tras un ensayo.</p>
<h2>Qué comprobar antes de vender</h2>
<p>Busca el 375 y el punzón del laboratorio al lado. Separa estas piezas de las de 585 y 750, y usa el ${h.a('contraste', 'lector de contrastes')} si encuentras un número que no reconoces.</p>
`,
  },
  en: {
    slug: '9-karat-gold-price', nav: '9 karat gold (375)', card: 'Three eighths gold: the lowest fineness allowed in Spain',
    title: '9k gold price per gram in Spain today: 375 gold in euros',
    description: '9k gold price per gram in Spain today, in euros with the time: 375 is the lowest gold fineness Spanish law allows; what a piece is worth and why to weigh it.',
    h1: '9k gold price per gram in Spain today',
    resume: 'The 9k gold price per gram is three eighths of the price of a gram of pure gold: a piece stamped 375 holds 375 thousandths of gold and 625 of other metals, mostly silver and copper. It is the lowest fineness article 9 of Spanish Law 17/1985 allows for a piece to be sold as gold; below 375 thousandths it cannot be marketed as a gold article. You find it in budget jewellery, British pieces, fine chains and some fashion rings and watches. The calculator below values any weight of 375 at the gold-api.com price with its time. When you do not know a piece’s fineness, this is the cautious value: if it turns out higher, you can only gain.',
    faqs: [
      { q: 'Is 9 karat gold real gold?', a: 'Yes, to the extent of its fineness: 375 thousandths of gold. That is under half, but Spanish law accepts it as gold if it carries its marks. As metal it is worth half as much as 750 of the same weight.' },
      { q: 'Why value an unmarked piece at 375?', a: 'Because it is the lowest fineness Law 17/1985 allows, so you do not expect too much. If an assay shows a higher fineness, the value goes up and the news is good. The reverse, counting on 750 and finding 375, is the costly mistake, because a 9 karat piece is worth half as much per gram as an 18 karat one.' },
      { q: 'Does 9 karat gold tarnish?', a: 'It can dull over time because, with only 375 thousandths of gold, it holds a lot of silver and copper, which react with air and skin. That changes neither its fineness nor its metal value: the buyer pays for the gold inside. A gentle clean brings back the colour, but do not use abrasives before selling.' },
    ],
    body: (h) => `
<h2>9k gold price per gram in Spain today, by weight</h2>
${h.table(['Weight', 'Pure gold', 'Value at 375'], [1, 2, 3, 5, 10].map((g) => [g + ' g', h.dec(g * 0.375, 3) + ' g', h.live(h.at(g, 375))]), 'At the gold price of ' + h.when + '.')}
<p>A gram of 375 is worth ${h.live(h.at(1, 375), 'XAU', 'eur2')}, exactly half a gram of 750. On light pieces a buyer’s fixed margin weighs heavily: an offer that looks low in euros can be fair as a share, or the other way round. Always check it as a share.</p>
<!--tool:offer-->
<h2>The limit set by Spanish law</h2>
<p>${h.src('ley17', 'Law 17/1985')} sets five gold finenesses and 375 is the lowest. A 333 piece (8 karat), common in Germany, reaches no Spanish fineness; under article 10, an article below the minimum is rejected for sale as gold. If you sell it, the buyer will pay for the metal an assay finds.</p>
<h2>What to check before selling</h2>
<p>Look for 375 and the assay office mark beside it. Keep these pieces apart from 585 and 750, and use the ${h.a('contraste', 'hallmark reader')} if you find a number you do not recognise.</p>
`,
  },
});
