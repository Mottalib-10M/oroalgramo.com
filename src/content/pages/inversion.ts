import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'inversion', group: 'rules', order: 42, tool: 'inversion',
  related: ['k24', 'onza', 'irpf', 'k22'], sources: ['liva', 'ley17'],
  es: {
    slug: 'oro-de-inversion-iva', nav: 'Oro de inversión sin IVA', card: 'Lingotes de {barLey} y monedas de {coinLey}: exención de IVA y prima',
    title: 'Oro de inversión: lingotes y monedas sin IVA en España',
    description: 'Oro de inversión en España: qué lingotes y monedas están exentos de IVA según la ley (ley mínima, año, curso legal, precio) y qué prima pagas sobre el metal.',
    h1: 'Oro de inversión: lingotes y monedas sin IVA',
    resume: 'El oro de inversión es oro que no paga IVA, el impuesto sobre el valor añadido. Son los lingotes de oro casi puro, de {barLey} milésimas o más y de un peso admitido, y las monedas de oro de {coinLey} milésimas o más, acuñadas después de {coinYear}, que sean o hayan sido dinero oficial en su país y se vendan normalmente a no más de un {coinPrem} por encima del valor del oro que llevan. Comprarlos o venderlos no lleva IVA. Una joya de oro de 750, en cambio, no es oro de inversión, aunque se compre para ahorrar. La calculadora comprueba si un lingote o una moneda cumple esas condiciones y calcula la prima, es decir, lo que pagas de más sobre el valor del oro que contiene, con el precio del oro y su hora. La norma exacta está en las fuentes, al final de la página.',
    faqs: [
      { q: '¿Comprar oro de inversión paga IVA?', a: 'No, si es oro de inversión según la norma del IVA: su compra no lleva IVA. Si el lingote no llega a {barLey} milésimas, o la moneda no cumple las condiciones, sí lleva IVA. Las joyas, aunque sean de oro de 750 o de 916, siempre lo llevan cuando las compras en una tienda.' },
      { q: '¿Qué prima es razonable al comprar un lingote?', a: 'No hay una cifra oficial. Los lingotes pequeños, de uno o cinco gramos, tienen más prima por gramo que los de cien gramos o un kilo, porque fabricarlos cuesta casi lo mismo. Compara el precio pedido con el valor del metal que da la calculadora, pide precio en dos sitios y pregunta también cuánto te recomprarían el mismo lingote.' },
      { q: '¿Hay que declarar la venta de oro de inversión?', a: 'Sí, como cualquier venta de un bien: la ganancia o la pérdida frente a lo que pagaste va a la base del ahorro del IRPF, con la escala del {r1} al {r5}. Que la compra estuviera exenta de IVA no cambia nada en el impuesto sobre la renta. Guarda la factura de compra, que es la prueba de tu valor de adquisición.' },
    ],
    body: (h) => `
<h2>Oro de inversión: las condiciones</h2>
${h.table(['Pieza', 'Condición', 'Lo que se exige'], [['Lingote o lámina', 'Pureza mínima (ley)', h.P.iva.barMinLey + ' milésimas'], ['Lingote o lámina', 'Peso', 'uno de los admitidos por la norma'], ['Moneda', 'Pureza mínima (ley)', h.P.iva.coinMinLey + ' milésimas'], ['Moneda', 'Acuñación', 'después de ' + h.P.iva.coinAfterYear], ['Moneda', 'Dinero oficial (curso legal)', 'lo es o lo fue en su país'], ['Moneda', 'Precio habitual', 'no más del ' + h.pct(h.P.iva.coinMaxPremium, 0) + ' sobre su oro']], 'Fuente: Ley 37/1992 del IVA, artículos 140 y 140 bis.')}
<p>Lo dice la ${h.src('liva', 'norma del IVA')}. Además, las monedas de la lista que la Unión Europea publica cada año en su diario oficial cuentan como oro de inversión durante el año siguiente.</p>
<h2>La prima: lo que pagas por encima del metal</h2>
<p>Un lingote de 10 gramos de 999,9 contiene ahora ${h.live(h.at(10, 999.9))} de oro a la cotización del ${h.when}. Si te lo venden un 4 % por encima, pagas ${h.live(h.at(10, 999.9) * 1.04)}. La calculadora hace la cuenta con tu precio.</p>
<h2>Monedas: sin contraste</h2>
<p>La ${h.src('ley17', 'norma española de metales preciosos')} no se aplica a las monedas que son o fueron dinero oficial: por eso una moneda de oro no lleva contraste como una joya. Su pureza la fija quien la acuña. Si vendes oro de inversión, la ganancia paga ${h.a('irpf', 'IRPF')} como la de cualquier otro oro.</p>
<!--tool:units-->
`,
  },
  en: {
    slug: 'investment-gold-vat-spain', nav: 'VAT-free investment gold', card: '{barLey} bars and {coinLey} coins: VAT exemption and premium',
    title: 'Investment gold in Spain: VAT-free bars and coins explained',
    description: 'Investment gold in Spain: which bars and coins are VAT-exempt under Spanish law (minimum fineness, year, legal tender, price) and the premium over the metal.',
    h1: 'Investment gold in Spain: bars and coins without VAT',
    resume: 'Investment gold is, for Spanish VAT law, a precise category: bars and wafers of {barLey} thousandths or more of an accepted weight, and coins of {coinLey} thousandths or more, struck after {coinYear}, that are or were legal tender in their country and are usually sold for no more than {coinPrem} above the market value of the gold they contain. That is how article 140 of Act 37/1992 defines it, and article 140 bis exempts its sale from VAT. A 750 piece of jewellery is not investment gold, however much it is bought as savings. The calculator checks a bar or coin against those conditions and works out the premium you pay over the metal value, at the gold-api.com price with its time.',
    faqs: [
      { q: 'Is there VAT on investment gold in Spain?', a: 'No, if it is investment gold under article 140 of Act 37/1992: its sale is exempt under article 140 bis. A bar below {barLey} thousandths, or a coin that fails one of the conditions on year, legal tender or price, does not benefit and is treated like any other gold. The calculator on this page checks those conditions one by one.' },
      { q: 'What premium is reasonable on a gold bar?', a: 'There is no official figure. Small bars, of one or five grams, carry more premium per gram than bars of a hundred grams or a kilo, because making them costs almost the same. Compare the asking price with the metal value from the calculator, get prices in two places and also ask what they would pay to buy the same bar back.' },
      { q: 'Must I declare the sale of investment gold?', a: 'Yes, like any sale of an asset: the gain or loss against what you paid goes into the savings base of income tax, at {r1} to {r5}. The VAT exemption on the purchase changes nothing for income tax. Keep the purchase invoice, which is the proof of your acquisition value if the tax agency asks.' },
    ],
    body: (h) => `
<h2>Investment gold: the conditions in article 140</h2>
${h.table(['Item', 'Condition', 'Legal figure'], [['Bar or wafer', 'Minimum fineness', h.P.iva.barMinLey + ' thousandths'], ['Bar or wafer', 'Weight', 'one listed in the Act’s annex'], ['Coin', 'Minimum fineness', h.P.iva.coinMinLey + ' thousandths'], ['Coin', 'Struck', 'after ' + h.P.iva.coinAfterYear], ['Coin', 'Legal tender', 'is or was, in its country'], ['Coin', 'Usual price', 'no more than ' + h.pct(h.P.iva.coinMaxPremium, 0) + ' above its gold']])}
<p>So says article 140 of ${h.src('liva', 'Act 37/1992')}, which adds that coins on the list published each year in the Official Journal of the European Union, C series, count as investment gold for the following year.</p>
<h2>The premium: what you pay above the metal</h2>
<p>A 10 gram bar of 999.9 now holds ${h.live(h.at(10, 999.9))} of gold at the price of ${h.when}. Sold at 4% above that, you pay ${h.live(h.at(10, 999.9) * 1.04)}. The calculator does the sum with your price.</p>
<h2>Coins and Law 17/1985</h2>
<p>${h.src('ley17', 'Law 17/1985')} on precious metals leaves coins that are or were legal tender outside its scope, so a gold coin carries no hallmark like jewellery. Its fineness is set by whoever strikes it. If you sell investment gold, the gain is taxed in ${h.a('irpf', 'income tax')} like any other gold.</p>
<!--tool:units-->
`,
  },
});
