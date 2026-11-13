import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'plata925', group: 'silver', order: 31, tool: 'silver', toolProps: { ley: 925, grams: 1500 },
  related: ['plata', 'lote', 'vender', 'contraste'], sources: ['ley17'],
  es: {
    slug: 'plata-925-precio', nav: 'Plata 925: precio y cuberterías', card: 'Plata de ley: joyas, cuberterías y bandejas por su peso',
    title: 'Plata 925 precio hoy: cuánto vale una cubertería por peso',
    description: 'Plata 925 precio hoy en euros por gramo y por kilo, con la hora: cuánto vale una cubertería, una bandeja o un juego de café, y qué piezas no son macizas.',
    h1: 'Plata 925: precio hoy y valor de una cubertería',
    resume: 'El precio de la plata 925 por gramo es el 92,5 % del precio del gramo de plata pura: de cada mil partes, 925 son plata. Es la plata de ley de la joyería moderna y de muchas cuberterías, bandejas y juegos de café, junto con la plata 800, más frecuente en piezas antiguas. Como un gramo de plata vale poco, el valor de una herencia de plata está en el peso: una cubertería completa puede pesar varios kilos. Escribe el peso en gramos y la ley, y la calculadora da el valor del metal con la cotización de gold-api.com y su hora. Antes de pesar, separa lo que no es plata: hojas de cuchillo de acero, mangos rellenos de resina o yeso, bases de madera. Lo que queda es lo que un comprador pagará como metal.',
    faqs: [
      { q: '¿Cómo sé si mi cubertería es de plata 925?', a: 'Busca el número 925 o 800 y el punzón junto a él en el reverso de cada pieza. Si pone «plateado», «baño de plata» o lleva siglas de metal plateado, no es plata maciza y su valor como metal es mínimo.' },
      { q: '¿Los cuchillos de plata se pesan enteros?', a: 'Muchos cuchillos de cubertería tienen hoja de acero y mango hueco relleno de una masilla. Solo el mango es plata, y no todo su peso. Pésalos aparte o descuéntalos del peso total; un comprador serio hará lo mismo. Cuenta como plata maciza las cucharas y los tenedores marcados con su ley, que sí son de una sola pieza.' },
      { q: '¿Vale más una cubertería entera que su peso?', a: 'Puede, si es de un platero reconocido o está completa, con su estuche y en buen estado; entonces una tienda de antigüedades o una subasta pueden pagar más que su valor como metal. Para el resto, el peso manda. Pide un precio por la pieza entera y otro al peso, y elige el mejor con la cifra de la calculadora delante.' },
    ],
    body: (h) => `
<h2>Plata 925: precio según el peso</h2>
${h.table(['Peso', 'Plata pura', 'Valor en 925'], [100, 250, 500, 1000, 2000, 5000].map((g) => [h.num(g, 0) + ' g', h.num(g * 0.925, 0) + ' g', h.live(h.at(g, 925, 'XAG'), 'XAG')]), 'Con el precio de la plata de las ' + h.whenOf('XAG') + '.')}
<p>Un kilo de plata de 925 vale ${h.live(h.at(1000, 925, 'XAG'), 'XAG')}; uno de 800, ${h.live(h.at(1000, 800, 'XAG'), 'XAG')}. La diferencia por kilo es de ${h.live(h.at(1000, 125, 'XAG'), 'XAG')}: merece la pena separar las piezas por ley.</p>
<h2>Qué pesar y qué no</h2>
<p>Las piezas grandes de plata pueden llevar partes que no son plata: hojas de acero, refuerzos, rellenos, bases. La ${h.src('ley17', 'Ley 17/1985')} permite en su artículo 8 que el reglamento regule el acoplamiento de metales industriales y materiales no metálicos en objetos de metal precioso, así que su presencia no es un fraude, pero tampoco vale como plata. Pesa solo lo que es plata o descuenta una estimación.</p>
<h2>Vender plata</h2>
<p>Pide presupuesto a dos comercios con el peso y la ley de cada grupo y compáralos en porcentaje del metal. La ${h.a('vender', 'comparación de ofertas')} sirve igual para la plata si conviertes primero cada presupuesto en porcentaje con la calculadora de arriba.</p>
<!--tool:stamp-->
`,
  },
  en: {
    slug: '925-sterling-silver-price', nav: '925 silver: price and cutlery sets', card: 'Sterling silver: jewellery, cutlery and trays by weight',
    title: '925 sterling silver price in Spain: what cutlery is worth',
    description: '925 sterling silver price in Spain today per gram and per kilo, with the time: what a cutlery set, a tray or a coffee set is worth, and what is not solid.',
    h1: '925 sterling silver price and the value of a cutlery set',
    resume: 'The 925 sterling silver price per gram is 92.5% of the price of a gram of pure silver: out of every thousand parts, 925 are silver. It is the standard of modern jewellery and of many cutlery sets, trays and coffee services in Spain, alongside 800 silver, more common on older pieces. Because a gram of silver is worth little, the value of inherited silver lies in its weight: a full cutlery set can weigh several kilos. Enter the weight in grams and the fineness, and the calculator returns the metal value at the gold-api.com price with its time. Before weighing, set aside what is not silver: steel knife blades, handles filled with resin or plaster, wooden bases. What remains is what a buyer will pay for as metal.',
    faqs: [
      { q: 'How do I know if my cutlery is 925 silver?', a: 'Look for 925 or 800 and the hallmark beside it on the back of each piece, usually on the handle. If it says silver-plated, or carries plated-metal initials, it is not solid silver and is worth very little as metal. A magnet is a quick first test: silver is not magnetic, so a piece that sticks is not silver.' },
      { q: 'Should silver knives be weighed whole?', a: 'Many cutlery knives have a steel blade and a hollow handle filled with a paste. Only the handle is silver, and not all of its weight. Weigh them apart or deduct them from the total; a serious buyer will do the same. Count as solid silver the spoons and forks stamped with their fineness, which are made in one piece.' },
      { q: 'Is a complete cutlery set worth more than its weight?', a: 'It can be, if it is by a known silversmith or complete, boxed and in good condition; an antiques dealer or auction may then pay more than the metal. For the rest, weight decides. Ask for one price for the whole set and another by weight, and choose with the calculator’s figure in front of you.' },
    ],
    body: (h) => `
<h2>925 sterling silver price by weight</h2>
${h.table(['Weight', 'Pure silver', 'Value at 925'], [100, 250, 500, 1000, 2000, 5000].map((g) => [h.num(g, 0) + ' g', h.num(g * 0.925, 0) + ' g', h.live(h.at(g, 925, 'XAG'), 'XAG')]), 'At the silver price of ' + h.whenOf('XAG') + '.')}
<p>A kilo of 925 silver is worth ${h.live(h.at(1000, 925, 'XAG'), 'XAG')}; a kilo of 800, ${h.live(h.at(1000, 800, 'XAG'), 'XAG')}. The gap per kilo is ${h.live(h.at(1000, 125, 'XAG'), 'XAG')}: sorting pieces by fineness pays.</p>
<h2>What to weigh and what not to</h2>
<p>Large silver pieces can include parts that are not silver: steel blades, reinforcements, fillings, bases. Article 8 of ${h.src('ley17', 'Law 17/1985')} leaves it to regulations to govern industrial metals and non-metallic materials fitted to precious-metal articles, so their presence is not fraud, but it is not silver either. Weigh only what is silver, or deduct an estimate.</p>
<h2>Selling silver</h2>
<p>Ask two shops for quotes with the weight and fineness of each group and compare them as a share of the metal. The ${h.a('vender', 'quote comparison')} works for silver too once you turn each quote into a share with the calculator above.</p>
<!--tool:stamp-->
`,
  },
});
