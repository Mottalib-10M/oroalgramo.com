import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'irpf', group: 'rules', order: 40, tool: 'gains',
  related: ['heredado', 'vender', 'inversion', 'efectivo'], sources: ['lirpf'],
  es: {
    slug: 'impuestos-vender-oro-irpf', nav: 'Impuestos al vender oro (IRPF)', card: 'La ganancia va a la base del ahorro: del {r1} al {r5}',
    title: 'Impuestos al vender oro: IRPF de la ganancia en la renta',
    description: 'Impuestos al vender oro en España: la ganancia tributa en la base del ahorro del IRPF del {r1} al {r5}; cómo se calcula y qué pasa con joyas antiguas.',
    h1: 'Impuestos al vender oro: el IRPF de la ganancia',
    resume: 'Los impuestos al vender oro en España se reducen, para un particular, al IRPF de la ganancia: la diferencia entre lo que cobras y lo que te costó la pieza. Esa ganancia patrimonial forma parte de la renta del ahorro, según el artículo 46 de la Ley 35/2006, y se grava con una escala que, sumando la parte estatal y la autonómica, va del {r1} hasta {t1} al {r5} por encima de {t4}. Si vendes por menos de lo que pagaste, tienes una pérdida que se puede compensar. La calculadora estima el impuesto de tu venta añadiendo la ganancia a tus otras rentas del ahorro del año, porque la escala es progresiva. El ITP de la operación lo paga el comprador, no tú, y la venta de una joya entre particulares no lleva IVA.',
    faqs: [
      { q: '¿Hay que declarar la venta de oro aunque gane poco?', a: 'La ganancia patrimonial forma parte de la renta del ahorro y se declara, sea grande o pequeña. Si estás obligado a presentar la declaración, la incluyes; las reglas de obligación de declarar dependen del conjunto de tus rentas del año. Guarda el recibo del comercio con el peso, la ley y el precio: es tu prueba del valor de transmisión.' },
      { q: '¿Y si no tengo la factura de compra?', a: 'El valor de adquisición es el importe real que pagaste más los gastos de compra (artículo 35). Sin factura, tendrás que probarlo con otros medios; si la pieza fue heredada o donada, vale el valor del impuesto de sucesiones o donaciones.' },
      { q: '¿Las joyas muy antiguas tributan menos?', a: 'Las compradas antes del 31 de diciembre de 1994 tienen el régimen transitorio de la disposición transitoria novena, que reduce la parte de la ganancia generada hasta el 20 de enero de 2006 un {abat} por año de permanencia que exceda de dos. Esta calculadora no lo aplica, así que su cifra es un máximo; consulta tu caso con la Agencia Tributaria.' },
    ],
    body: (h) => `
<h2>Impuestos al vender oro: la escala del ahorro</h2>
${h.table(['Base del ahorro', 'Tipo (Estado + comunidad)', 'Impuesto en el tramo completo'], h.P.irpf.brackets.map((b, i, a) => { const from = i ? a[i - 1].upTo! : 0; return [b.upTo ? h.eur(from) + ' a ' + h.eur(b.upTo) : 'Más de ' + h.eur(from), h.pct(b.rate, 0), b.upTo ? h.eur((b.upTo - from) * b.rate) : 'según la base']; }), 'Artículos 66 y 76 de la Ley 35/2006, texto consolidado leído el 13 de noviembre de 2026.')}
<p>La escala es la suma de la del artículo 66 (parte del Estado) y la del 76 (parte de la comunidad) de la ${h.src('lirpf', 'Ley 35/2006')}. Una ganancia de ${h.eur(1600)}, sin otras rentas del ahorro, paga ${h.eur(1600 * h.P.irpf.brackets[0].rate)}; si ya tienes ${h.eur(h.P.irpf.brackets[0].upTo!)} de intereses o dividendos ese año, la misma ganancia cae entera en el tramo del {r2} y paga ${h.eur(1600 * h.P.irpf.brackets[1].rate)}.</p>
<h2>Cómo se calcula la ganancia</h2>
<p>El artículo 35 define el valor de adquisición como el importe real pagado más los gastos y tributos de la compra, y el de transmisión como el importe real cobrado menos los gastos de la venta, sin que pueda ser inferior al valor normal de mercado. El artículo 36 añade que, en una herencia o donación, se toma el valor del impuesto sobre sucesiones y donaciones, sin superar el de mercado. La ${h.a('heredado', 'página del oro heredado')} lo desarrolla.</p>
<h2>Joyas compradas antes de 1995</h2>
<p>La disposición transitoria novena reduce la parte de la ganancia generada antes del 20 de enero de 2006 en un {abat} por cada año de permanencia hasta el 31 de diciembre de 1996, redondeado por exceso, que exceda de dos, mientras la suma de ventas acogidas desde 2015 no supere {abatLimit}. Para una pieza comprada a principios de los años noventa puede ser una reducción grande; consulta tu caso con la Agencia Tributaria.</p>
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
    ],
    body: (h) => `
<h2>Tax on selling gold in Spain: the savings scale</h2>
${h.table(['Savings base', 'Rate (state + region)', 'Tax on the full band'], h.P.irpf.brackets.map((b, i, a) => { const from = i ? a[i - 1].upTo! : 0; return [b.upTo ? h.eur(from) + ' to ' + h.eur(b.upTo) : 'Over ' + h.eur(from), h.pct(b.rate, 0), b.upTo ? h.eur((b.upTo - from) * b.rate) : 'depends on the base']; }), 'Articles 66 and 76 of Act 35/2006, consolidated text read on 13 November 2026.')}
<p>The scale is the sum of article 66 (state share) and article 76 (regional share) of ${h.src('lirpf', 'Act 35/2006')}. A ${h.eur(1600)} gain with no other savings income pays ${h.eur(1600 * h.P.irpf.brackets[0].rate)}; if you already have ${h.eur(h.P.irpf.brackets[0].upTo!)} of interest or dividends that year, the same gain falls wholly in the {r2} band and pays ${h.eur(1600 * h.P.irpf.brackets[1].rate)}.</p>
<h2>How the gain is worked out</h2>
<p>Article 35 defines the acquisition value as the actual amount paid plus the costs and taxes of buying, and the transfer value as the actual amount received less the costs of selling, never below the normal market value. Article 36 adds that for an inheritance or gift, the inheritance or gift tax value is used, capped at market value. The ${h.a('heredado', 'inherited gold')} page goes into it.</p>
<h2>Jewellery bought before 1995</h2>
<p>The ninth transitional provision cuts the part of the gain built up before 20 January 2006 by {abat} for each year held up to 31 December 1996, rounded up, beyond two, as long as the total of sales under the regime since 2015 stays under {abatLimit}. For a piece bought in the early nineties the cut can be large; check your case with the Spanish tax agency.</p>
<!--tool:cash-->
`,
  },
});
