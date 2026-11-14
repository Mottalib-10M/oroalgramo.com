import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'k18', group: 'gold', order: 10, tool: 'ley', toolProps: { ley: 750, grams: 5 },
  related: ['k14', 'offer', 'lote', 'contraste'], sources: ['ley17'],
  es: {
    slug: 'precio-oro-18-kilates', nav: 'Oro de 18 kilates (750)', card: 'Tres cuartas partes de oro: la ley de casi toda la joyería española',
    title: 'Precio del oro de 18 kilates hoy por gramo: ley 750',
    description: 'Precio del oro de 18 kilates hoy por gramo en euros, con la hora: qué significa 750, cuánto valen 2, 5 o 10 gramos y qué parte suele quedarse el comprador.',
    h1: 'Precio del oro de 18 kilates hoy, por gramo',
    resume: 'El precio del oro de 18 kilates por gramo es tres cuartas partes del precio de un gramo de oro puro, porque una pieza de 18 kilates lleva 750 milésimas de oro, el número que verás grabado en ella. Escribe el peso abajo y la calculadora da su valor como metal en euros, con la cotización de gold-api.com y la hora de esa cotización. El 750 es la ley de la mayoría de las alianzas, cadenas, medallas y pendientes fabricados en España, y de muchos relojes de oro. La norma española de metales preciosos no admite que una pieza marcada 750 tenga menos oro del indicado: no hay tolerancia en menos. Lo que ves es un techo: piedras y cierres de acero pesan sin ser oro, y un comprador paga una parte de ese valor.',
    faqs: [
      { q: '¿El oro blanco de 18 kilates vale lo mismo que el amarillo?', a: 'Por gramo de metal, sí: los dos llevan 750 milésimas de oro y solo cambian las otras 250. El comprador funde ambos y paga el oro. El baño de rodio del oro blanco no añade valor medible; lo que sí reduce el metal es un engaste con muchas piedras.' },
      { q: '¿Qué significa el número 750 en un anillo?', a: 'Que de cada 1000 partes de peso, 750 son oro: 18 kilates. Junto al número suele haber el punzón del laboratorio de contraste y la marca del fabricante, que exige la norma española de metales preciosos para vender la pieza en España. Si el anillo tiene una piedra, el número no dice nada de ella: solo el metal cuenta para el valor que da la calculadora.' },
      { q: '¿Cuánto vale una alianza de oro de 18 kilates?', a: 'Pésala y multiplica: una alianza de 4 gramos, por ejemplo, contiene 3 gramos de oro puro. La calculadora de arriba hace la cuenta con el precio del momento y su hora. Una alianza con inscripción vale igual como metal, porque el grabado no quita oro apreciable. Lo que te ofrezca un comprador será una parte de esa cifra.' },
    ],
    body: (h) => `
<h2>Precio del oro de 18 kilates por gramo, según el peso</h2>
${h.table(['Peso', 'Oro puro', 'Valor en 750'], [2, 3, 4, 5, 7.5, 10, 20].map((g) => [h.dec(g, 1) + ' g', h.dec(g * 0.75, 3) + ' g', h.live(h.at(g, 750))]), 'Con la cotización del ' + h.when + ', la misma que usa la calculadora.')}
<p>Pesa con una décima de gramo si puedes: en una pieza de 750 cada décima vale ${h.live(h.at(0.1, 750), 'XAU', 'eur2')}. Una cadena fina puede pesar menos de 3 gramos; un cordón o una esclava maciza, decenas.</p>
<h2>Por qué en España casi todo es de 750</h2>
<p>La tradición joyera española trabaja el oro de 750, que el comercio llama a menudo de primera ley. Es lo bastante duro para el uso diario y conserva el color del oro. La ${h.src('ley17', 'norma española de metales preciosos')} obliga a que lleve dos marcas antes de venderse: la del fabricante o importador y, al lado, el punzón de garantía de un laboratorio de contraste con la ley escrita dentro. Una pieza española de 750 sin esas marcas es rara; si la tuya no las lleva, puede ser antigua (más de cien años, fuera de la ley) o de otro origen.</p>
<h2>Vender oro de 18 kilates sin perder dinero</h2>
<p>Lo que más cuesta al vender 750 es que lo paguen como si fuera de menos ley o que lo pesen junto con piezas de 585 o 375. Separa por número, pesa cada grupo y pide un precio por gramo de 750. Luego mete la oferta en el ${h.a('offer', 'comprobador de ofertas')}: verás qué parte del valor del metal te pagan.</p>
<!--tool:offer-->
`,
  },
  en: {
    slug: '18-karat-gold-price', nav: '18 karat gold (750)', card: 'Three quarters gold: the fineness of most Spanish jewellery',
    title: '18k gold price per gram in Spain today: 750 gold in euros',
    description: '18k gold price per gram in Spain today, in euros with the time: what the 750 stamp means, what 2, 5 or 10 grams are worth and how much a buyer usually keeps.',
    h1: '18k gold price per gram in Spain today',
    resume: 'The 18k gold price per gram is three quarters of the price of a gram of pure gold, because 18 karat holds 750 thousandths of gold, the number you will find stamped on the piece. Type the weight below and the calculator returns its metal value in euros at the gold-api.com price, with the time of that price. In Spain, 750 is the fineness of most wedding bands, chains, christening medals and earrings, and of many gold watches. Spanish Law 17/1985 allows no shortfall below the stamp: a piece marked 750 must hold at least 750. Treat the result as a ceiling: stones and steel clasps weigh without being gold, and a buyer pays a share of the value, never all of it.',
    faqs: [
      { q: 'Is 18k white gold worth the same as yellow gold?', a: 'Per gram of metal, yes: both hold 750 thousandths of gold and only the other 250 differ. Buyers melt both and pay for the gold. Rhodium plating on white gold adds nothing measurable; a setting with many stones simply means less metal in the total weight.' },
      { q: 'What does 750 mean on a Spanish ring?', a: 'That out of every 1,000 parts by weight, 750 are gold: 18 karat. Beside the number there is usually the assay office mark and the maker’s mark, both required by Law 17/1985 before a piece can be sold in Spain.' },
      { q: 'What is an 18k wedding band worth as metal?', a: 'Weigh it and multiply: a 4 gram band, say, holds 3 grams of pure gold. The calculator above does the sum at the current price, with its time. An engraved band is worth the same as metal, because engraving removes no noticeable gold. What a buyer offers you will be a share of that figure, so compare it in percent.' },
    ],
    body: (h) => `
<h2>18k gold price per gram, by weight</h2>
${h.table(['Weight', 'Pure gold', 'Value at 750'], [2, 3, 4, 5, 7.5, 10, 20].map((g) => [h.dec(g, 1) + ' g', h.dec(g * 0.75, 3) + ' g', h.live(h.at(g, 750))]), 'At the gold price of ' + h.when + ', the one the calculator uses.')}
<p>Weigh to a tenth of a gram if you can: on a 750 piece each tenth is worth ${h.live(h.at(0.1, 750), 'XAU', 'eur2')}. A fine chain can weigh under 3 grams; a solid curb chain or bangle, tens of grams.</p>
<h2>Why nearly everything in Spain is 750</h2>
<p>Spanish jewellers traditionally work in 750, which the trade often calls first-standard gold. It is hard enough to wear daily and keeps the colour of gold. ${h.src('ley17', 'Law 17/1985')} requires two marks before it is sold: the maker’s or importer’s mark and, next to it, the guarantee mark of an assay office with the fineness written inside. A Spanish 750 piece without them is unusual; if yours has none, it may be antique (over a hundred years old, outside the law) or from elsewhere.</p>
<h2>Selling 18 karat gold without losing money</h2>
<p>The usual way to lose money on 750 is to have it paid as a lower fineness, or weighed together with 585 or 375 pieces. Sort by number, weigh each group and ask for a price per gram of 750. Then put the offer into the ${h.a('offer', 'offer checker')} to see what share of the metal value you are being paid.</p>
<!--tool:offer-->
`,
  },
});
