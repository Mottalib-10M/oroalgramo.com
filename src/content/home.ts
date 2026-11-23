/** Accueil (pilier), en espagnol et en anglais, écrits chacun pour sa langue. Jetons {…} : helpers.fill.
 *  Chiffres réglementaires tirés de params-2026.json ; montants qui dépendent du cours posés dans des
 *  spans recalculés (h.live). */
import type { FAQ, Helpers } from '../lib/page-types';
import { exampleOffer } from '../lib/exemple';

interface HomeText { title: string; description: string; h1: string; lead: string; resume: string; faqs: FAQ[]; body: (h: Helpers) => string }

export const HOME: Record<'es' | 'en', HomeText> = {
  es: {
    title: 'Precio del oro hoy por gramo: 18, 24, 14 y 9 kilates',
    description: 'Precio del oro hoy por gramo en euros según la ley española, con la hora: 18 kilates (750), 24, 22, 14, 9 y plata 925, y qué parte del metal te paga una oferta.',
    h1: 'Precio del oro hoy por gramo, según su ley',
    lead: 'El precio del oro hoy por gramo, con la hora de la cotización: elige la ley grabada en tu pieza, escribe el peso y verás cuánto vale su metal. No compramos ni vendemos oro.',
    resume: 'El precio del oro hoy por gramo depende de la ley, es decir, de la pureza: el número de tres cifras grabado en la pieza. Un gramo de oro de 750, el de 18 kilates, es tres cuartas partes de oro puro; uno de 585, algo más de la mitad; uno de 375, tres octavos. Esta página pasa esas proporciones a euros con el precio internacional del oro, que se da por onza troy (31,1 gramos), y escribe junto a cada resultado la hora exacta de ese precio, en hora de Madrid. En España solo se pueden vender joyas de oro de 999, 916, 750, 585 y 375 milésimas, y de plata de 999, 925 y 800, y una pieza nunca puede llevar menos metal del que marca. El resultado es el valor del metal que contiene la pieza, no lo que pagará un comprador: un compro oro funde, refina, paga un impuesto por comprar y se queda un margen, así que su oferta siempre es una parte de ese valor. Para saber qué parte, escribe la oferta debajo del calculador.',
    faqs: [
      { q: '¿Cómo sé la ley de un anillo o una cadena?', a: 'La ley es la pureza. Busca un número de tres cifras en el interior del aro o en el cierre: 750, 585, 375 o 916 en el oro, 925 u 800 en la plata. Al lado suele haber una figura (el punzón de garantía) y una marca del fabricante. Una lupa ayuda. Sin ningún número, solo un ensayo dirá la ley; hasta entonces, calcula con 375 para no esperar de más.', open: true },
      { q: '¿Por qué un compro oro paga menos que el precio del gramo de esta página?', a: 'Aquí ves el valor del metal: oro puro de la pieza por la cotización. El comprador vende ese oro a una fundición que cobra el refinado, paga el impuesto de la compra a particulares, corre el riesgo de que el precio baje mientras tanto y quiere ganar algo. Su oferta cubre todo eso, así que siempre es un porcentaje del valor del metal, nunca el total.' },
      { q: '¿El oro de 18 kilates es lo mismo que el oro de primera ley?', a: 'En el comercio español se llama a menudo oro de primera ley al de 750 milésimas, es decir, 18 kilates. La norma española no usa esa expresión: habla de leyes (purezas) en milésimas. Para calcular, lo que cuenta es el número grabado: 750 son 750 partes de oro de cada 1000.' },
      { q: '¿El precio del gramo de oro es el mismo en toda España?', a: 'Sí. La cotización es un precio mundial por onza troy convertido a euros, así que un gramo de 750 contiene el mismo valor en Bilbao que en Sevilla. Lo que cambia de un sitio a otro es lo que ofrece cada comprador y el porcentaje del ITP, el impuesto que paga el comercio al comprarte, que fija cada comunidad.', open: true },
      { q: '¿A qué hora corresponde el precio de esta página?', a: 'A la hora que aparece junto a cada resultado, en hora de Madrid, que es la que gold-api.com da para el precio que devuelve. El oro cotiza casi todo el día de lunes a viernes y apenas se mueve el fin de semana. Para pedir otro más reciente, abre «De dónde sale este precio», bajo el calculador, y toca «Buscar un precio más reciente».' },
      { q: '¿Oro al Gramo compra oro o recomienda comercios?', a: 'No. Lo publica Radif Partners, que no compra, no vende, no guarda ni tasa oro, y no cobra comisión a quien lo hace. No muestra precios de comercios ni los clasifica. Su único trabajo es la cuenta: cuánto vale tu metal y qué parte de ese valor te paga una oferta.' },
      { q: '¿Cambian en 2027 los impuestos al vender oro?', a: 'A 23 de noviembre de 2026 no hay ningún cambio publicado: la ganancia sigue en la base del ahorro del IRPF, con la escala del 19 al 30 % de la Ley 35/2006, que no tiene fecha de fin. Si una ley publicada en el BOE la cambia, la calculadora aplicará la nueva escala en cuanto se publique.' },
    ],
    body: (h) => {
      const off = exampleOffer(10, 750);
      return `
<h2>Precio del oro hoy por gramo y por ley</h2>
<p><strong>La ley de una joya es su pureza: cuántas partes de oro puro lleva de cada mil.</strong> Así la define la ${h.src('ley17', 'norma española de metales preciosos')}, que obliga a grabarla con tres cifras y a mantenerla igual en todo el objeto. El oro puro es demasiado blando para un anillo de diario, de modo que el joyero lo mezcla con plata, cobre o paladio. Una pieza de 750 lleva 750 partes de oro y 250 de otros metales. En España solo se puede vender oro de 999, 916, 750, 585 y 375 milésimas, y una pieza nunca puede llevar menos oro del que marca: una pieza marcada 750 tiene 750 o más.</p>
${h.table(['Ley', 'Kilates de uso', 'Oro puro en 10 g', 'Precio del gramo ahora'], h.P.gold.map((g) => [String(g.ley), String(g.k), h.dec(g.ley / 100, 2) + ' g', h.live(h.at(1, g.ley), 'XAU', 'eur2')]), 'Precio del gramo con la cotización del ' + h.when + '; sigue al calculador.')}
<p>El kilate es otra forma de decir lo mismo, en veinticuatroavos: 24 kilates sería oro puro, 18 kilates son 18 partes de 24, es decir, tres cuartos. Por eso 750 y 18 kilates se usan como sinónimos. El 585 corresponde a unos 14 kilates y el 375 a 9. En España casi toda la joyería tradicional es de 750; el 585 y el 375 abundan en piezas importadas y en cadenas y pendientes baratos. El 916, unos 22 kilates, es típico de joyería de India y de Oriente Medio y de algunas monedas.</p>
<p>Fíjate en que el 21 kilates, muy común en el Golfo, no figura en la lista: una pieza de 875 milésimas no puede comercializarse en España como oro de esa ley. Si tienes una, la calculadora de ${h.a('contraste', 'contrastes')} te dice qué hacer.</p>

<h2>Cuánto vale tu oro: el peso y la ley bastan</h2>
<p>El valor del metal es una multiplicación: peso en gramos por la ley dividida entre mil por el precio del gramo de oro puro. Diez gramos de oro de 750 contienen 7,5 gramos de oro puro; a la cotización del ${h.when}, eso son ${h.live(h.at(10, 750))}. Para pesar, sirve una báscula de cocina o de cartas que marque gramos; si marca décimas, mejor. Quita antes lo que no es oro: piedras, perlas, muelles de acero de algunos cierres, el reloj de un brazalete.</p>
<p>No pongas en la báscula piezas de leyes distintas a la vez. Sepáralas por el número grabado, pesa cada grupo y suma: la ${h.a('lote', 'calculadora de lotes')} lo hace por ti. Un comprador que pesa todo junto y paga como si fuera de 375 se queda con la diferencia de las piezas de 750.</p>
<!--tool:lot-->

<h2>La oferta de un compro oro, en porcentaje del metal</h2>
<p>Ninguna ley fija lo que debe pagar un compro oro, y ningún organismo publica lo que pagan. La única forma objetiva de juzgar una oferta es compararla con el valor del metal y con otra oferta por las mismas piezas el mismo día. Si por esos diez gramos de 750 te ofrecen ${h.eur(off)}, eso es el ${h.live(off / h.at(10, 750), 'XAU', 'pct')} de su valor como metal el ${h.when}. Cada diez puntos de porcentaje que consigas de más son ${h.live(h.at(10, 750) / 10)} para ti.</p>
<p>Antes de aceptar, mira tres cosas. Que la báscula esté a la vista y en cero antes de poner tus piezas. Que el comprador escriba en el recibo el peso y la ley de cada grupo. Y que el precio por gramo que te da corresponda a la ley de tu pieza, no a una ley más baja. El ${h.a('offer', 'comprobador de ofertas')} hace la cuenta y el de ${h.a('vender', 'vender oro')} compara dos o tres presupuestos.</p>

<h2>Vender oro: lo que dice la ley española</h2>
<p>Un comercio que compra joyas tiene que apuntar cada compra en un registro (${h.src('lo4_2015', 'norma de seguridad ciudadana')}): por eso te pedirán el DNI y anotarán la operación. Además, un comercio no puede pagarte en efectivo una operación de {cash} o más (${h.src('l7_2012', 'norma contra el fraude fiscal')}): a partir de esa cifra, el pago llega por transferencia o cheque. La ${h.a('efectivo', 'calculadora del efectivo')} te lo dice para tu importe.</p>
<p>Cuando un comercio te compra oro, paga un impuesto por esa compra: el ITP, Impuesto sobre Transmisiones Patrimoniales. Lo paga el comercio, no tú, al porcentaje que fije su comunidad o, si no fija ninguno, al {itp} (${h.src('itp', 'norma del impuesto')}). No te lo pueden descontar de tu precio, pero el comercio lo tiene en cuenta al hacer su oferta. Lo explicamos en la página del ${h.a('itp', 'ITP en la compra de oro')}.</p>

<h2>Impuestos al vender oro: el IRPF</h2>
<p>Solo pagas impuestos si vendes por más de lo que te costó la pieza, o de lo que valía cuando la heredaste. Esa diferencia es una ganancia y se declara en el IRPF, el impuesto sobre la renta, en la declaración del año siguiente (${h.src('lirpf', 'norma del IRPF')}). Sumando la parte del Estado y la de la comunidad, se paga el {r1} de la ganancia hasta {t1}, el {r2} hasta {t2}, el {r3} hasta {t3}, el {r4} hasta {t4} y el {r5} por encima. Lo que costó se demuestra con la factura; si la pieza fue heredada o donada, cuenta el valor declarado en el impuesto de sucesiones o donaciones. Si vendes por menos, no pagas nada y la pérdida se puede restar de otras ganancias.</p>
<!--tool:gains-->
<p>¿Compraste la joya antes de 1995? Pagarás menos impuestos, a veces casi nada. La calculadora no lo descuenta; lo explica la página de ${h.a('irpf', 'impuestos al vender oro')}.</p>

<h2>Vender oro en 2027: lo que ya es oficial</h2>
<p>Las leyes del oro (999, 916, 750, 585 y 375) las fija la ${h.src('ley17', 'Ley 17/1985')} y no cambian con el año: en 2027, lo que vale una pieza seguirá dependiendo solo del peso, de la ley y de la cotización del día. La escala del ahorro del IRPF, del {r1} al {r5}, está en la ${h.src('lirpf', 'Ley 35/2006')} sin fecha de fin; la versión consolidada del BOE leída el 11 de noviembre de 2026 no recoge ningún cambio para 2027. Si una ley publicada en el BOE la modifica, la calculadora aplicará la nueva escala en cuanto se publique.</p>
<h2>Plata: 925, 800 y 999</h2>
<p>La plata sigue la misma lógica con otras leyes: 999 para la plata fina de lingotes y monedas, 925 para la plata de ley de joyería y cubertería, 800 para muchos cubiertos y bandejas antiguos. Un gramo de plata 925 vale ahora ${h.live(h.at(1, 925, 'XAG'), 'XAG', 'eur2')}, unas ${h.num(h.at(1, 750) / h.at(1, 925, 'XAG'), 0)} veces menos que un gramo de oro de 750. Por eso con la plata importa el peso: una cubertería entera puede pesar kilos. La ${h.a('plata', 'calculadora de la plata')} da el valor por ley y peso.</p>

<h2>Oro de inversión: lingotes y monedas sin IVA</h2>
<p>Un lingote de oro casi puro, de {barLey} milésimas o más, no paga IVA, el impuesto sobre el valor añadido (${h.src('liva', 'norma del IVA')}). Una moneda de oro tampoco, si tiene una pureza de {coinLey} o más, se acuñó después de {coinYear}, es o fue dinero oficial en su país y se vende normalmente a no más de un {coinPrem} por encima del valor de su oro. Es lo que se llama oro de inversión. Una joya de 750, en cambio, no lo es. La página de ${h.a('inversion', 'oro de inversión')} comprueba una pieza y calcula la prima que pagas sobre el metal.</p>

<h2>Por qué esta página da cifras que cuadran</h2>
<p>Muchas webs del precio del oro son plantillas internacionales traducidas: muestran dos precios distintos para el mismo día, mezclan formatos de número o hablan de monedas de otros países en la página de España. Aquí todos los importes de una página salen de la misma lectura del precio, con su hora, y el texto se recalcula con el precio que usa el calculador. Las purezas (leyes) son las españolas y cada norma enlaza a su texto en el BOE. El precio es una lectura de gold-api.com, un servicio gratuito, sin garantía de exactitud: para una operación grande, compáralo con el de tu banco o tu comprador.</p>
<p>Cómo lo calculamos, con sus límites, está en la ${h.a('method', 'metodología')}.</p>
`;
    },
  },
  en: {
    title: 'Gold price per gram in Spain today: 18k, 24k, 14k, 9k',
    description: 'Gold price per gram in Spain today in euros by Spanish fineness, with the time: 18 karat (750), 24k, 22k, 14k, 9k and 925 silver, and what an offer pays.',
    h1: 'Gold price per gram in Spain today, by fineness',
    lead: 'The gold price per gram in Spain today, with the time of the price: pick the fineness stamped on your piece, type its weight and see what its metal is worth. We do not buy or sell gold.',
    resume: 'The gold price per gram in Spain today depends on the fineness, the three-digit number stamped on the piece. A gram of 750, which is 18 karat, is three quarters pure gold; 585 is just over half; 375 is three eighths. This page turns those shares into euros using the international troy ounce price read from gold-api.com, and prints the exact time of that price, in Madrid time, beside every result. The finenesses listed are the only ones Spanish Law 17/1985 on precious-metal articles allows for gold (999, 916, 750, 585 and 375) and for silver (999, 925 and 800), with no tolerance below the mark. What you get is the value of the metal in the piece, not what a buyer will pay: a gold buyer melts, refines, pays the tax on the purchase and keeps a margin, so its offer is always a share of that value. Type the offer under the calculator to see which share.',
    faqs: [
      { q: 'How do I find the fineness of a Spanish ring or chain?', a: 'Look for a three-digit number inside the band or on the clasp: 750, 585, 375 or 916 on gold, 925 or 800 on silver. Next to it there is usually a small shape, the assay office mark, and a maker’s mark. A magnifying glass helps. With no number at all only an assay can tell; until then, work it out at 375 so you do not expect too much.', open: true },
      { q: 'Why do Spanish gold buyers pay less than the gram price on this page?', a: 'This page shows the metal value: pure gold in the piece times the market price. The buyer sells that gold to a refiner who charges for refining, pays the tax due on buying from a private person, carries the risk of a falling price in the meantime and wants a profit. Its offer covers all of that, so it is always a share of the metal value.' },
      { q: 'Is 18 karat the same as 750 gold?', a: 'Yes. Karat counts gold in twenty-fourths and fineness counts it in thousandths: 18 parts in 24 equals 750 parts in 1,000. Spanish jewellery is normally stamped 750, and Spanish shops often call it first-standard gold. For the value, only the number matters.' },
      { q: 'Is the gold price per gram the same everywhere in Spain?', a: 'Yes. The price is a world price per troy ounce turned into euros, so a gram of 750 holds the same value in Málaga as in Barcelona. What differs is what each buyer offers and the transfer tax rate each region sets on the purchase.', open: true },
      { q: 'What time does the gold price on this page refer to?', a: 'The time printed beside each result, in Madrid time, which is the time gold-api.com gives for the price it returned. Gold trades almost round the clock on weekdays and barely moves at weekends. The button under the calculator asks for a newer price.' },
      { q: 'Does Oro al Gramo buy gold or recommend buyers?', a: 'No. It is published by Radif Partners, which does not buy, sell, store or assay gold and takes no commission from anyone who does. It shows no shop prices and ranks no shops. Its only job is the arithmetic: what your metal is worth and what share of that an offer pays.' },
      { q: 'Does tax on selling gold change in 2027?', a: 'No change has been published as of 23 November 2026: the gain stays in the income tax savings base, with the 19 to 30% scale of Act 35/2006, which has no end date. If a law published in the BOE changes it, the calculator will apply the new scale as soon as it is published.' },
    ],
    body: (h) => {
      const off = exampleOffer(10, 750);
      return `
<h2>Gold price per gram in Spain today, by fineness</h2>
<p><strong>In Spain, fineness (“ley”) is the share of pure precious metal in an alloy, in thousandths.</strong> That is how article 3 of ${h.src('ley17', 'Law 17/1985')} defines it, and it must be written with three digits and be the same throughout the piece. Pure gold is too soft for a ring worn every day, so jewellers mix it with silver, copper or palladium. A 750 piece holds 750 parts gold and 250 parts other metals. Article 9 only allows gold of 999, 916, 750, 585 and 375 thousandths to be sold in Spain, and adds that there is no tolerance below the mark: a piece stamped 750 must hold 750 or more.</p>
${h.table(['Fineness', 'Karat', 'Pure gold in 10 g', 'Gram price now'], h.P.gold.map((g) => [String(g.ley), String(g.k) + 'k', h.dec(g.ley / 100, 2) + ' g', h.live(h.at(1, g.ley), 'XAU', 'eur2')]), 'Gram prices at the gold price of ' + h.when + '; they follow the calculator.')}
<p>Karat says the same thing in twenty-fourths: 24 karat would be pure gold, 18 karat is 18 parts in 24, three quarters. Hence 750 and 18k are used interchangeably. 585 is about 14 karat and 375 is 9 karat. Most traditional Spanish jewellery is 750; 585 and 375 are common on imported pieces and on cheaper chains and earrings. 916, about 22 karat, is typical of Indian and Middle Eastern jewellery and of some coins.</p>
<p>Note that 21 karat, very common in the Gulf, is not on the list: a piece of 875 thousandths cannot be sold in Spain as gold of that fineness. If you have one, the ${h.a('contraste', 'hallmark reader')} tells you what to do.</p>

<h2>What your gold is worth: weight and fineness are enough</h2>
<p>The metal value is one multiplication: weight in grams times fineness over a thousand times the price of a gram of pure gold. Ten grams of 750 gold hold 7.5 grams of pure gold; at the price of ${h.when}, that is ${h.live(h.at(10, 750))}. Any kitchen or letter scale that reads grams will do, better still one that reads tenths. Take off what is not gold first: stones, pearls, the steel springs in some clasps, the watch on a bracelet.</p>
<p>Do not weigh pieces of different fineness together. Sort them by the stamped number, weigh each group and add up: the ${h.a('lote', 'mixed-lot calculator')} does it for you. A buyer who weighs everything together and pays it all as 375 keeps the difference on your 750 pieces.</p>
<!--tool:lot-->

<h2>A gold buyer’s offer as a share of the metal</h2>
<p>No Spanish law sets what a gold buyer must pay, and no agency publishes what buyers pay. The only objective way to judge an offer is against the metal value and against a second offer for the same pieces on the same day. If you are offered ${h.eur(off)} for those ten grams of 750, that is ${h.live(off / h.at(10, 750), 'XAU', 'pct')} of their metal value at ${h.when}. Every extra ten percentage points you secure is ${h.live(h.at(10, 750) / 10)} more for you.</p>
<p>Before you say yes, check three things. That the scale is in view and reads zero before your pieces go on it. That the buyer writes the weight and fineness of each group on the receipt. And that the price per gram matches the fineness of your piece, not a lower one. The ${h.a('offer', 'offer checker')} does the sum and the ${h.a('vender', 'selling guide')} compares two or three quotes.</p>

<h2>Selling gold in Spain: what the law says</h2>
<p>Buying and selling jewellery and metals is an activity subject to record-keeping under article 25 of ${h.src('lo4_2015', 'Organic Law 4/2015')}, which is why the shop asks for your ID and logs the deal. Article 7 of ${h.src('l7_2012', 'Law 7/2012')} also bans paying {cash} or more in cash when one party is a business: from that amount, payment comes by bank transfer or cheque. The ${h.a('efectivo', 'cash limit calculator')} checks your amount.</p>
<p>A business buying gold from a private person pays Spanish transfer tax (ITP). Under the ${h.src('itp', 'transfer tax act')}, the buyer pays it, not the seller, at the rate the region sets or, if it sets none, at the {itp} rate for movable goods. It cannot legally be deducted from your price, but it is part of the buyer’s sums. See the ${h.a('itp', 'transfer tax on gold')} page.</p>

<h2>Tax when you sell gold: Spanish income tax</h2>
<p>If you sell gold for more than it cost you, the difference is a capital gain and goes on your Spanish income tax return in the savings base (article 46 of ${h.src('lirpf', 'Act 35/2006')}). Adding the state and regional shares, the rates are {r1} up to {t1}, {r2} up to {t2}, {r3} up to {t3}, {r4} up to {t4} and {r5} above. The cost is proved by the invoice; for an inherited or gifted piece, the value declared for inheritance or gift tax counts. If you sell at a loss, the loss can be set against gains.</p>
<!--tool:gains-->
<p>Jewellery bought before 31 December 1994 falls under a transitional regime that reduces the part of the gain built up to 20 January 2006. The ${h.a('irpf', 'tax on selling gold')} page explains it.</p>

<h2>Selling gold in 2027: what is already official</h2>
<p>The gold standards (999, 916, 750, 585 and 375) are set by ${h.src('ley17', 'Act 17/1985')} and do not change with the year: in 2027 a piece will still be worth its weight, its fineness and the day’s price. The income tax savings scale, from {r1} to {r5}, is written in ${h.src('lirpf', 'Act 35/2006')} with no end date; the consolidated text read in the BOE on 11 November 2026 shows no change for 2027. If a law published in the BOE amends it, the calculator will apply the new scale as soon as it is published.</p>
<h2>Silver: 925, 800 and 999</h2>
<p>Silver works the same way with other finenesses: 999 for fine silver bars and coins, 925 for sterling jewellery and cutlery, 800 for much older cutlery and trays. A gram of 925 silver is now worth ${h.live(h.at(1, 925, 'XAG'), 'XAG', 'eur2')}, roughly ${h.num(h.at(1, 750) / h.at(1, 925, 'XAG'), 0)} times less than a gram of 750 gold. That is why weight matters with silver: a full cutlery set can weigh kilos. The ${h.a('plata', 'silver calculator')} values it by fineness and weight.</p>

<h2>Investment gold: bars and coins without VAT</h2>
<p>Article 140 of ${h.src('liva', 'VAT Act 37/1992')} defines investment gold as bars and wafers of {barLey} thousandths or more, and coins of {coinLey} or more, struck after {coinYear}, legal tender in their country and usually sold for no more than {coinPrem} above the value of their gold. Their sale is exempt from VAT. A 750 piece of jewellery is not investment gold. The ${h.a('inversion', 'investment gold')} page checks a piece and works out the premium you pay over the metal.</p>

<h2>Why the figures on this page agree with each other</h2>
<p>Many gold price sites are international templates run through a translator: they show two different prices for the same day, mix number formats or talk about other countries’ currencies on the Spain page. Here every amount on a page comes from the same price reading, with its time, and the text is recalculated at the price the calculator uses. The finenesses are Spain’s and every rule links to its article in the Official Gazette. The price is a reading from gold-api.com, a free service, with no guarantee of accuracy: for a large deal, check it against your bank or your buyer.</p>
<p>How we work it out, with its limits, is on the ${h.a('method', 'method')} page.</p>
`;
    },
  },
};
