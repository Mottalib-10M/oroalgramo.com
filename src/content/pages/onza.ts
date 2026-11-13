import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'onza', group: 'gold', order: 15, tool: 'units',
  related: ['k24', 'gramo', 'inversion', 'plata'], sources: ['nistB9'],
  es: {
    slug: 'precio-onza-de-oro', nav: 'Precio de la onza de oro', card: 'Onza troy, gramo y kilo: el precio del oro en cada unidad',
    title: 'Precio de la onza de oro hoy en euros, en gramos y en kilos',
    description: 'Precio de la onza de oro hoy en euros, con la hora: qué es la onza troy de {oz2} g, cómo pasar a gramos y kilos, y por qué no sirve la onza de la cocina.',
    h1: 'Precio de la onza de oro hoy, en euros',
    resume: 'El precio de la onza de oro es la cifra con la que se cotiza el metal en todo el mundo: es el precio de una onza troy, {oz} gramos, de oro puro. Todas las demás cifras de este sitio salen de ella dividiéndola entre ese número de gramos y multiplicando por la ley. La onza troy no es la onza que aparece en algunas recetas, que pesa menos: confundirlas hace que el valor salga mal. La calculadora de abajo convierte cualquier cantidad entre onzas troy, gramos y kilos y da su valor con la cotización en euros de gold-api.com y su hora. La equivalencia de la onza troy en gramos procede de la guía del Sistema Internacional del NIST, que define el grano de forma exacta y la onza troy como 480 granos.',
    faqs: [
      { q: '¿Cuántos gramos tiene una onza de oro?', a: 'Una onza troy tiene {oz} gramos. Es la unidad en que se cotizan el oro, la plata y el platino en los mercados. Una moneda de una onza contiene una onza troy de oro puro aunque pese algo más por su aleación; por eso, para su valor, cuenta el oro fino que declara y no su peso total en la báscula.' },
      { q: '¿Cuánto vale un kilo de oro?', a: 'Un kilo de oro puro son unas 32,15 onzas troy, así que vale unas treinta y dos veces el precio de la onza. Su valor exacto aparece en la tabla de la calculadora con el precio del momento y su hora. Un kilo de joyas de 750 contiene solo 750 gramos de oro puro y vale tres cuartas partes de esa cifra.' },
      { q: '¿Por qué el precio de la onza cambia durante el día?', a: 'El oro se negocia casi sin parar de lunes a viernes en mercados de varios continentes, y el precio en euros depende además del tipo de cambio con el dólar, en el que se fija sobre todo. Por eso cada resultado de esta página lleva su hora. Los fines de semana el precio apenas se mueve.' },
    ],
    body: (h) => `
<h2>Precio de la onza de oro hoy en euros, en gramos y en kilos</h2>
${h.table(['Unidad', 'Gramos', 'Oro puro, valor ahora'], [['1 gramo', 1], ['1 onza troy', 31.1034768], ['100 gramos', 100], ['1 kilo', 1000]].map(([n, g]) => [String(n), h.dec(Number(g), 4), h.live(h.at(Number(g), 1000))]), 'Oro puro (1000 milésimas), con la cotización de las ' + h.when + '.')}
<p>La onza troy pesa {oz} gramos según la ${h.src('nistB9', 'guía del NIST')}: 480 granos de 64,79891 miligramos. La onza común, la de los pesos ingleses de cocina, pesa unos 28,35 gramos, un 9 % menos. Si alguien te habla de onzas, pregunta cuál.</p>
<h2>De la onza al gramo de tu joya</h2>
<p>Para pasar del precio de la onza al de un gramo de tu pieza, divide entre {oz2} y multiplica por la ley: un gramo de 750 vale tres cuartos del gramo puro. Es la cuenta de todas las páginas por ley, como la del ${h.a('k18', 'oro de 18 kilates')} o la del ${h.a('k24', 'oro de 24 kilates')}.</p>
<!--tool:lot-->
<h2>La onza en las monedas y los lingotes</h2>
<p>Las monedas de inversión de una onza contienen exactamente una onza troy de oro fino, aunque pesen un poco más si llevan aleación. Los lingotes se venden a menudo por gramos (1, 5, 10, 100) o por onzas. En los dos casos, compara el precio pedido con el valor del metal: la diferencia es la prima. Lo explica la página de ${h.a('inversion', 'oro de inversión')}.</p>
`,
  },
  en: {
    slug: 'gold-price-per-ounce', nav: 'Gold price per ounce', card: 'Troy ounce, gram and kilo: the gold price in each unit',
    title: 'Gold price per ounce in euros today, in grams and in kilos',
    description: 'Gold price per ounce in euros today, with the time: what the {oz2} g troy ounce is, how to turn it into grams and kilos, and why the kitchen ounce is wrong.',
    h1: 'Gold price per ounce in euros today',
    resume: 'The gold price per ounce is the figure the metal is quoted in worldwide: the price of one troy ounce, {oz} grams, of pure gold. Every other figure on this site comes from it, divided by that number of grams and multiplied by the fineness. The troy ounce is not the ounce in recipes, which is lighter: mixing them up gives the wrong value. The calculator below converts any amount between troy ounces, grams and kilos and values it at the gold-api.com price in euros with its time. The gram equivalent of the troy ounce comes from the NIST guide to the International System of units, which defines the grain exactly and the troy ounce as 480 grains. The kitchen ounce of about 28.35 grams is a different, smaller unit.',
    faqs: [
      { q: 'How many grams are in an ounce of gold?', a: 'A troy ounce is {oz} grams. It is the unit in which gold, silver and platinum are priced on the markets. A one-ounce coin holds one troy ounce of pure gold even if it weighs a little more because of its alloy; for its value, what counts is the fine gold it declares, not its total weight on the scale.' },
      { q: 'What is a kilo of gold worth?', a: 'A kilo of pure gold is about 32.15 troy ounces, so it is worth roughly thirty-two times the ounce price. Its exact value is in the calculator’s table at the current price, with its time. A kilo of 750 jewellery holds only 750 grams of pure gold and is worth three quarters of that figure.' },
      { q: 'Why does the ounce price change during the day?', a: 'Gold trades almost non-stop on weekdays across several continents, and the euro price also moves with the euro to dollar exchange rate, since gold is mostly priced in dollars. That is why every result on this page carries its time. At weekends the price barely moves.' },
    ],
    body: (h) => `
<h2>Gold price per ounce in euros today, in grams and in kilos</h2>
${h.table(['Unit', 'Grams', 'Pure gold, value now'], [['1 gram', 1], ['1 troy ounce', 31.1034768], ['100 grams', 100], ['1 kilo', 1000]].map(([n, g]) => [String(n), h.dec(Number(g), 4), h.live(h.at(Number(g), 1000))]), 'Pure gold (1,000 thousandths) at the price of ' + h.when + '.')}
<p>The troy ounce weighs {oz} grams according to the ${h.src('nistB9', 'NIST guide')}: 480 grains of 64.79891 milligrams. The common ounce of English kitchen weights is about 28.35 grams, 9% less. If someone quotes you ounces, ask which ones.</p>
<h2>From the ounce to a gram of your jewellery</h2>
<p>To go from the ounce price to a gram of your piece, divide by {oz2} and multiply by the fineness: a gram of 750 is worth three quarters of a pure gram. That is the sum behind every fineness page, such as ${h.a('k18', '18 karat gold')} or ${h.a('k24', '24 karat gold')}.</p>
<!--tool:lot-->
<h2>The ounce in coins and bars</h2>
<p>One-ounce investment coins contain exactly one troy ounce of fine gold, even if they weigh a little more because of their alloy. Bars are often sold by the gram (1, 5, 10, 100) or by the ounce. Either way, compare the asking price with the metal value: the gap is the premium. See the ${h.a('inversion', 'investment gold')} page.</p>
`,
  },
});
