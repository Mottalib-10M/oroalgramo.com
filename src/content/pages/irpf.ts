import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'irpf', group: 'rules', order: 40, tool: 'gains',
  related: ['heredado', 'vender', 'inversion', 'efectivo'], sources: ['lirpf'],
  es: {
    slug: 'impuestos-vender-oro-irpf', nav: 'Impuestos al vender oro (IRPF)', card: 'La ganancia va a la base del ahorro: del {r1} al {r5}',
    title: 'Impuestos al vender oro: IRPF de la ganancia en la renta',
    description: 'Impuestos al vender oro en España: la ganancia tributa en la base del ahorro del IRPF del {r1} al {r5}; cómo se calcula y qué pasa con joyas antiguas.',
    h1: 'Impuestos al vender oro: el IRPF de la ganancia',
    resume: 'Los impuestos al vender oro, para un particular, se reducen a uno: el IRPF, el impuesto sobre la renta, y solo sobre la ganancia, es decir, la diferencia entre lo que cobras y lo que te costó la pieza. Si la heredaste, cuenta como coste el valor que se declaró en la herencia. Esa ganancia se apunta en la declaración de la renta del año siguiente, en la parte de los ahorros, y paga un porcentaje que sube por tramos: el {r1} de los primeros {t1}, y así hasta el {r5} de lo que pase de {t4}. Si vendes por menos de lo que pagaste, no pagas nada y la pérdida se puede restar de otras ganancias. La calculadora estima el impuesto de tu venta sumándola a tus otras ganancias del año, como intereses o dividendos, porque el porcentaje sube cuanto más ganas. El otro impuesto de la operación, el ITP, lo paga el comercio que te compra, no tú.',
    faqs: [
      { q: '¿Hay que declarar la venta de oro aunque gane poco?', a: 'La ganancia patrimonial forma parte de la renta del ahorro y se declara, sea grande o pequeña. Si estás obligado a presentar la declaración, la incluyes; las reglas de obligación de declarar dependen del conjunto de tus rentas del año. Guarda el recibo del comercio con el peso, la ley y el precio: es tu prueba del valor de transmisión.' },
      { q: '¿Y si no tengo la factura de compra?', a: 'El coste es lo que pagaste de verdad, más los gastos de la compra. Sin factura, tendrás que probarlo con otros medios; si la pieza fue heredada o donada, vale el valor del impuesto de sucesiones o donaciones. Un extracto del banco o una tasación antigua pueden servir.' },
      { q: '¿Las joyas muy antiguas tributan menos?', a: 'Sí, las compradas antes de 1995: pagan menos, a veces casi nada, porque una regla antigua rebaja la parte de la ganancia generada hasta el 20 de enero de 2006. Esta calculadora no hace esa rebaja, así que su cifra es un máximo; pregunta tu caso en la Agencia Tributaria (Hacienda).' },
      { q: '¿Qué escala se aplicará a una venta de oro en 2027?', a: 'La misma que hoy, del 19 al 30 % sumando Estado y comunidad, porque la Ley 35/2006 no le pone fecha de fin y ninguna norma publicada la cambia a 23 de noviembre de 2026. La venta se declarará en la campaña de la renta de 2028.' },
    ],
    body: (h) => `
<h2>Impuestos al vender oro: la escala del ahorro</h2>
${h.table(['Ganancias del año', 'Porcentaje (Estado + comunidad)', 'Impuesto si llenas el tramo'], h.P.irpf.brackets.map((b, i, a) => { const from = i ? a[i - 1].upTo! : 0; return [b.upTo ? h.eur(from) + ' a ' + h.eur(b.upTo) : 'Más de ' + h.eur(from), h.pct(b.rate, 0), b.upTo ? h.eur((b.upTo - from) * b.rate) : 'según lo ganado']; }), 'Fuente: Ley 35/2006, artículos 66 y 76, texto consolidado leído el 13 de noviembre de 2026.')}
<p>Los porcentajes suman la parte del Estado y la de tu comunidad (${h.src('lirpf', 'norma del IRPF')}). Cada porcentaje se aplica solo a la parte de la ganancia que cae en su tramo. Una ganancia de ${h.eur(1600)}, sin otras ganancias de ahorro ese año, paga ${h.eur(1600 * h.P.irpf.brackets[0].rate)}; si ya tienes ${h.eur(h.P.irpf.brackets[0].upTo!)} de intereses o dividendos, la misma ganancia cae entera en el tramo del {r2} y paga ${h.eur(1600 * h.P.irpf.brackets[1].rate)}.</p>
<h2>Cómo se calcula la ganancia</h2>
<p>La ganancia es lo que cobras, menos los gastos de la venta, menos lo que pagaste por la pieza con los gastos e impuestos de la compra. Si vendes por menos de lo que vale en el mercado, se toma el valor de mercado. Si heredaste la pieza o te la regalaron, el coste es el valor declarado en el impuesto de sucesiones o de donaciones, sin pasar del valor de mercado. La ${h.a('heredado', 'página del oro heredado')} lo desarrolla.</p>
<h2>La escala del ahorro en 2027</h2>
<p>Los cinco tramos del {r1} al {r5} salen de los artículos 66 y 76 de la ${h.src('lirpf', 'Ley 35/2006')}, en la redacción vigente desde el 1 de enero de 2025, y no tienen fecha de caducidad. A 23 de noviembre de 2026, ninguna ley publicada en el BOE los cambia para 2027, así que una venta de oro hecha en 2027 se declarará con esta misma escala en la campaña de la renta de 2028, salvo reforma posterior; en ese caso, la calculadora pasará a la nueva escala en cuanto se publique en el BOE.</p>
<h2>Joyas compradas antes de 1995</h2>
<p>¿Compraste la joya antes de 1995? Pagarás menos impuestos, a veces casi nada. Una regla antigua rebaja la parte de la ganancia que se generó hasta el 20 de enero de 2006: cuantos más años tuviste la joya antes de 1997, más grande es la rebaja. Tiene un tope: la suma de las ventas que la usan desde 2015 no puede pasar de {abatLimit}. Esta calculadora no hace la rebaja, así que su cifra es un máximo: pregunta en la Agencia Tributaria (Hacienda) con la fecha de compra.</p>
<p>Para quien quiera el detalle: la rebaja es de un {abat} por cada año de permanencia hasta el 31 de diciembre de 1996, a partir del tercero, redondeando los años hacia arriba (disposición transitoria novena de la norma del IRPF).</p>
<!--tool:cash-->
`,
  },
  en: {
    slug: 'tax-on-selling-gold-spain', nav: 'Tax on selling gold (income tax)', card: 'The gain goes into the savings base: {r1} to {r5}',
    title: 'Tax on selling gold in Spain: income tax on the gain',
    description: 'Tax on selling gold in Spain: the gain is taxed in the savings base at {r1} to {r5}; how it is worked out, which papers count and what about old jewellery.',
    h1: 'Tax on selling gold in Spain: income tax on the gain',
    resume: 'For a private person, the tax on selling gold in Spain comes down to income tax on the gain: the difference between what you receive and what the piece cost you. That capital gain is savings income under article 46 of Act 35/2006 and is taxed on a scale that, adding the state and regional shares, runs from {r1} up to {t1} to {r5} above {t4}. If you sell for less than you paid, you have a loss that can be offset. The calculator estimates the tax on your sale by adding the gain to your other savings income for the year, because the scale is progressive. The transfer tax on the deal is paid by the buyer, not you, and selling a piece of jewellery as a private person carries no VAT.',
    faqs: [
      { q: 'Must I declare a gold sale even if the gain is small?', a: 'The capital gain is savings income and is declared, large or small. If you are required to file a return, you include it; whether you must file depends on all your income for the year. Keep the shop’s receipt showing weight, fineness and price: it is your proof of the transfer value if the tax agency asks.' },
      { q: 'What if I have no purchase invoice?', a: 'The acquisition value is the actual amount paid plus purchase costs (article 35). Without an invoice you will need other proof, such as a bank statement, a jeweller’s certificate or an insurance valuation from the time. For an inherited or gifted piece, the inheritance or gift tax value counts instead of the original price.' },
      { q: 'Is very old jewellery taxed less?', a: 'Pieces bought before 31 December 1994 fall under the ninth transitional provision, which reduces the part of the gain built up to 20 January 2006 by {abat} for each year held beyond two. This calculator does not apply it, so its figure is a ceiling; check your case with the Spanish tax agency before filing.' },
      { q: 'Which scale applies to a gold sale in 2027?', a: 'The same as today, 19 to 30% adding the state and regional shares, because Act 35/2006 sets no end date and no published rule changes it as of 23 November 2026. The sale will be declared in the 2028 tax campaign.' },
    ],
    body: (h) => `
<h2>Tax on selling gold in Spain: the savings scale</h2>
${h.table(['Savings base', 'Rate (state + region)', 'Tax on the full band'], h.P.irpf.brackets.map((b, i, a) => { const from = i ? a[i - 1].upTo! : 0; return [b.upTo ? h.eur(from) + ' to ' + h.eur(b.upTo) : 'Over ' + h.eur(from), h.pct(b.rate, 0), b.upTo ? h.eur((b.upTo - from) * b.rate) : 'depends on the base']; }), 'Articles 66 and 76 of Act 35/2006, consolidated text read on 13 November 2026.')}
<p>The scale is the sum of article 66 (state share) and article 76 (regional share) of ${h.src('lirpf', 'Act 35/2006')}. A ${h.eur(1600)} gain with no other savings income pays ${h.eur(1600 * h.P.irpf.brackets[0].rate)}; if you already have ${h.eur(h.P.irpf.brackets[0].upTo!)} of interest or dividends that year, the same gain falls wholly in the {r2} band and pays ${h.eur(1600 * h.P.irpf.brackets[1].rate)}.</p>
<h2>How the gain is worked out</h2>
<p>Article 35 defines the acquisition value as the actual amount paid plus the costs and taxes of buying, and the transfer value as the actual amount received less the costs of selling, never below the normal market value. Article 36 adds that for an inheritance or gift, the inheritance or gift tax value is used, capped at market value. The ${h.a('heredado', 'inherited gold')} page goes into it.</p>
<h2>The savings scale in 2027</h2>
<p>The five bands from {r1} to {r5} come from articles 66 and 76 of ${h.src('lirpf', 'Act 35/2006')}, as worded since 1 January 2025, and have no expiry date. As of 23 November 2026, no law published in the BOE changes them for 2027, so a gold sale made in 2027 will be declared with this same scale in the 2028 tax campaign, unless the law changes later; in that case the calculator will switch to the new scale as soon as it is published in the BOE.</p>
<h2>Jewellery bought before 1995</h2>
<p>The ninth transitional provision cuts the part of the gain built up before 20 January 2006 by {abat} for each year held up to 31 December 1996, rounded up, beyond two, as long as the total of sales under the regime since 2015 stays under {abatLimit}. For a piece bought in the early nineties the cut can be large; check your case with the Spanish tax agency.</p>
<!--tool:cash-->
`,
  },
});
