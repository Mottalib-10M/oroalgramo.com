import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'heredado', group: 'rules', order: 44, tool: 'gains',
  related: ['irpf', 'lote', 'vender', 'contraste'], sources: ['lirpf'],
  es: {
    slug: 'vender-oro-heredado', nav: 'Vender oro heredado', card: 'El valor declarado en la herencia es tu precio de compra',
    title: 'Vender oro heredado: valor de partida e IRPF de la venta',
    description: 'Vender oro heredado en España: la ganancia se mide desde el valor declarado en sucesiones, no desde lo que pagó el familiar; cómo calcularla y su IRPF.',
    h1: 'Vender oro heredado: qué se declara y cuánto',
    resume: 'Al vender oro heredado, la ganancia que declaras en el IRPF no se mide desde lo que pagó en su día la persona fallecida, sino desde el valor que se dio a las joyas en el impuesto sobre sucesiones. Lo dice el artículo 36 de la Ley 35/2006: en las adquisiciones a título lucrativo, como una herencia o una donación, se toma por valor de adquisición el que resulte de las normas del impuesto sobre sucesiones y donaciones, sin que pueda superar el valor de mercado. Si las joyas se valoraron en la herencia cerca de su valor como metal y las vendes poco después, la ganancia será pequeña o nula. La calculadora estima el IRPF: escribe el precio de venta y, como coste, el valor declarado en la herencia.',
    faqs: [
      { q: '¿Qué valor tienen unas joyas en la herencia?', a: 'El que se declare en el impuesto sobre sucesiones, que debe reflejar su valor real. Si las joyas no se declararon por separado, revisa el inventario de la herencia o pregunta a quien la tramitó: a veces figuran como un ajuar o un porcentaje del caudal. Ese valor es tu punto de partida para medir la ganancia al vender.' },
      { q: '¿Y si el oro me lo regalaron en vida?', a: 'En una donación también se toma, en principio, el valor del impuesto sobre donaciones. El artículo 36 de la Ley 35/2006 prevé además casos en que el donatario se subroga en la fecha y el valor de adquisición del donante, lo que cambia la cuenta. Guarda el documento de la donación y consulta tu caso con la Agencia Tributaria.' },
      { q: '¿Tengo que pagar algo más que el IRPF?', a: 'Al vender, no: el ITP de la compra lo paga el comprador, y la venta de una joya entre un particular y un comercio no lleva IVA a tu cargo. El impuesto sobre sucesiones de la herencia es otro asunto, que se liquida al heredar y depende de tu comunidad autónoma. Vender después no lo vuelve a cobrar.' },
    ],
    body: (h) => `
<h2>Vender oro heredado: el valor de partida</h2>
<p>El artículo 35 de la ${h.src('lirpf', 'Ley 35/2006')} mide la ganancia como la diferencia entre el valor de transmisión y el de adquisición. Para lo heredado, el artículo 36 sustituye el precio que pagó el causante por el valor del impuesto sobre sucesiones, con el valor de mercado como tope. Por eso conviene que la valoración de las joyas en la herencia sea realista: un valor bajo hoy es más impuesto mañana.</p>
${h.table(['Valor declarado en la herencia', 'Vendes por', 'Ganancia', 'IRPF sin otras rentas'], [[800, 1000], [1000, 1000], [1200, 1500], [3000, 3600]].map(([c, v]) => [h.eur(c), h.eur(v), h.eur(Math.max(0, v - c)), h.eur(Math.max(0, v - c) * h.P.irpf.brackets[0].rate)]), 'Escala del ahorro, tramo del ' + h.pct(h.P.irpf.brackets[0].rate, 0) + ' hasta ' + h.eur(h.P.irpf.brackets[0].upTo!) + '. Ejemplos de cálculo.')}
<h2>Antes de vender un lote heredado</h2>
<p>Separa las piezas por ley y pésalas: la ${h.a('lote', 'calculadora de lotes')} da el valor del metal de cada grupo. Aparta las que puedan valer más como joya, por firma o antigüedad, y pide para ellas una tasación aparte. El resto, compáralo en porcentaje en dos comercios.</p>
<!--tool:lot-->
<h2>Herencias antiguas</h2>
<p>Si la herencia es anterior al 31 de diciembre de 1994, la fecha de adquisición es antigua y puede aplicarse la reducción de la disposición transitoria novena a la parte de la ganancia generada hasta el 20 de enero de 2006. Lo explica la página de ${h.a('irpf', 'impuestos al vender oro')}.</p>
`,
  },
  en: {
    slug: 'selling-inherited-gold-spain', nav: 'Selling inherited gold', card: 'The value declared for inheritance tax is your purchase price',
    title: 'Selling inherited gold in Spain: base value and income tax',
    description: 'Selling inherited gold in Spain: the gain runs from the value declared for inheritance tax, not from what your relative paid; how to work it out and the tax.',
    h1: 'Selling inherited gold in Spain: what is declared',
    resume: 'When selling inherited gold in Spain, the gain you declare for income tax is not measured from what the deceased once paid, but from the value given to the jewellery for inheritance tax. Article 36 of Act 35/2006 says so: for acquisitions free of charge, such as an inheritance or a gift, the acquisition value is the one that results from the inheritance and gift tax rules, capped at market value. If the jewellery was valued in the estate close to its metal value and you sell soon after, the gain will be small or nil. The calculator estimates the income tax: enter the sale price and, as the cost, the value declared for the inheritance. A loss, if you sell below that value, can be offset against other gains.',
    faqs: [
      { q: 'What value does jewellery have in an inheritance?', a: 'Whatever is declared for inheritance tax, which should reflect its real value. If the jewellery was not listed separately, check the estate inventory or ask whoever handled the estate: it is sometimes included as household goods or a percentage of the estate. That value is your starting point for measuring the gain when you sell.' },
      { q: 'What if the gold was a gift during their lifetime?', a: 'For a gift, the gift tax value is used in principle. Article 36 of Act 35/2006 also covers cases where the recipient takes over the donor’s acquisition date and value, which changes the sum. Keep the gift document and check your case with the Spanish tax agency before you file the return for the year of the sale.' },
      { q: 'Do I pay anything besides income tax?', a: 'Not on the sale: the buyer pays the transfer tax on the purchase, and selling a piece of jewellery to a shop as a private person carries no VAT for you. Inheritance tax is a separate matter, settled when you inherit and set by your region. Selling later does not charge it again.' },
    ],
    body: (h) => `
<h2>Selling inherited gold: the starting value</h2>
<p>Article 35 of ${h.src('lirpf', 'Act 35/2006')} measures the gain as the gap between the transfer value and the acquisition value. For inherited assets, article 36 replaces the price the deceased paid with the inheritance tax value, capped at market value. That is why a realistic valuation of jewellery in the estate matters: a low value today means more tax tomorrow.</p>
${h.table(['Value declared for inheritance', 'You sell for', 'Gain', 'Income tax with no other savings'], [[800, 1000], [1000, 1000], [1200, 1500], [3000, 3600]].map(([c, v]) => [h.eur(c), h.eur(v), h.eur(Math.max(0, v - c)), h.eur(Math.max(0, v - c) * h.P.irpf.brackets[0].rate)]), 'Savings scale, ' + h.pct(h.P.irpf.brackets[0].rate, 0) + ' band up to ' + h.eur(h.P.irpf.brackets[0].upTo!) + '. Worked examples.')}
<h2>Before selling an inherited lot</h2>
<p>Sort the pieces by fineness and weigh them: the ${h.a('lote', 'mixed-lot calculator')} gives the metal value of each group. Set aside any that may be worth more as jewellery, for maker or age, and get them valued separately. Compare the rest as a share of the metal at two shops.</p>
<!--tool:lot-->
<h2>Old inheritances</h2>
<p>If the inheritance dates from before 31 December 1994, the acquisition date is old and the ninth transitional provision’s reduction can apply to the part of the gain built up to 20 January 2006. The ${h.a('irpf', 'tax on selling gold')} page explains it.</p>
`,
  },
});
