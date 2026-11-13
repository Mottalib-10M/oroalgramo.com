import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'efectivo', group: 'sell', order: 23, tool: 'cash',
  related: ['vender', 'offer', 'irpf', 'itp'], sources: ['l7_2012', 'lo4_2015'],
  es: {
    slug: 'pago-efectivo-venta-oro', nav: 'Pago en efectivo al vender oro', card: 'El límite de {cash}: cuándo te pagan por transferencia',
    title: 'Pago en efectivo al vender oro: el límite de 1000 euros',
    description: 'Pago en efectivo al vender oro en España: desde {cash} un comercio no puede pagarte en billetes; cómo se suman los pagos fraccionados y qué recibos guardar.',
    h1: 'Pago en efectivo al vender oro: hasta dónde se permite',
    resume: 'El pago en efectivo al vender oro tiene un tope fijado por ley: el artículo 7 de la Ley 7/2012 prohíbe pagar en efectivo una operación de {cash} o más cuando una de las partes actúa como empresario o profesional, y un compro oro o una joyería lo son. Por debajo de esa cifra, el comercio puede pagarte en billetes; a partir de ella, la operación entera se paga por transferencia, cheque u otro medio que deje rastro. La ley suma los pagos en que se haya fraccionado una misma operación, así que partir una venta en dos tickets no cambia nada. Escribe el total de tu venta en la calculadora y verás si cabe el efectivo. Los justificantes del pago se conservan {cashYears} años y Hacienda puede pedirlos.',
    faqs: [
      { q: '¿Puedo dividir la venta en dos para cobrar en efectivo?', a: 'No sirve. El artículo 7 de la Ley 7/2012 suma todas las operaciones o pagos en que se haya fraccionado una misma entrega de bienes, así que dos recibos el mismo día por las mismas joyas cuentan como una sola venta. Si el total llega a {cash}, no cabe el efectivo, y la multa alcanza tanto al que paga como al que cobra.' },
      { q: '¿El límite es de {cash} o de 999 euros?', a: 'La ley prohíbe pagar en efectivo las operaciones de importe igual o superior a {cash} cuando una de las partes actúa como empresario o profesional. Una venta de 999,99 euros puede cobrarse en billetes; una de {cash} justos, no. Por encima de esa cifra el comercio te pagará por transferencia o con otro medio que deje rastro.' },
      { q: '¿Y si soy un turista sin residencia en España?', a: 'La ley eleva el límite a {cashNR} cuando el pagador es una persona física sin domicilio fiscal en España que no actúa como empresario. Cuando vendes oro a un comercio, el que paga es el comercio, no tú, así que esa excepción no se aplica a tu venta: rige el límite general de {cash}. Lleva una cuenta donde recibir la transferencia.' },
    ],
    body: (h) => `
<h2>Pago en efectivo al vender oro: qué dice la ley</h2>
<p>El artículo 7.Uno de la ${h.src('l7_2012', 'Ley 7/2012')} dice que no podrán pagarse en efectivo las operaciones en las que alguna de las partes actúe como empresario o profesional, con un importe igual o superior a {cash}. Se suman los pagos en que se fraccione una operación y los justificantes del pago se guardan {cashYears} años. Saltarse el límite es una infracción grave de la que responden a la vez el que paga y el que cobra: la multa es del {cashFine} de lo pagado en efectivo. Cobrar en billetes por encima del límite también te expone a ti.</p>
<h2>Cuánto oro cabe por debajo del límite</h2>
${h.table(['Si te pagan', 'Oro de 750 que cabe por debajo de ' + h.eur(h.P.cash.limit)], [0.6, 0.7, 0.8, 0.9].map((s) => [h.pct(s, 0) + ' del metal', h.dec(h.P.cash.limit / (h.at(1, 750) * s), 1) + ' g']), 'Gramos de 750 con la cotización de las ' + h.when + '; si el precio sube, caben menos.')}
<p>Por encima de esos gramos, cuenta con una transferencia. Es más seguro para ti: queda constancia de la operación y del importe, útil si luego tienes que declarar una ganancia en el ${h.a('irpf', 'IRPF')}.</p>
<h2>El registro de la operación</h2>
<p>Con o sin efectivo, el comercio anota la compra y tus datos: la compraventa de joyas y metales está sujeta a registro documental según el artículo 25 de la ${h.src('lo4_2015', 'Ley Orgánica 4/2015')}. Lleva tu DNI o pasaporte.</p>
<!--tool:offer-->
`,
  },
  en: {
    slug: 'cash-limit-selling-gold', nav: 'Cash limit when selling gold', card: 'The {cash} limit: when you are paid by transfer',
    title: 'Cash limit when selling gold in Spain: the €1,000 rule',
    description: 'The cash limit when selling gold in Spain: from {cash} a business may not pay you in notes; how split payments are added up and which proof you should keep.',
    h1: 'Cash limit when selling gold in Spain',
    resume: 'There is a legal cash limit when selling gold in Spain: article 7 of Law 7/2012 bans paying in cash for a deal of {cash} or more when one of the parties acts as a business or professional, and a gold buyer or jeweller does. Below that amount the shop may pay you in notes; from it, the whole deal is paid by transfer, cheque or another traceable means. The law adds together the payments a single deal is split into, so breaking a sale into two tickets changes nothing. Enter your sale total in the calculator to see whether cash is allowed. Proof of payment is kept for {cashYears} years and the tax office may ask for it. A bank transfer protects both sides and leaves a record of the price.',
    faqs: [
      { q: 'Can I split the sale in two to be paid in cash?', a: 'It does not work. Article 7 of Law 7/2012 adds up all the payments a single sale of goods is split into, so two receipts on the same day for the same jewellery count as one sale. If the total reaches {cash}, cash is not allowed, and the fine reaches both the one who pays and the one who is paid.' },
      { q: 'Is the limit {cash} or €999?', a: 'The law bans cash for deals equal to or above {cash} when one of the parties acts as a business or professional. A sale of €999.99 can be paid in notes; one of exactly {cash} cannot. Above that figure the shop will pay you by bank transfer or another method that leaves a trace, so bring the details of an account.' },
      { q: 'What if I am a tourist not resident in Spain?', a: 'The law raises the limit to {cashNR} when the payer is an individual with no tax residence in Spain who is not acting as a business. When you sell gold to a shop, the shop is the payer, not you, so that exception does not cover your sale: the general {cash} limit applies. Have an account ready to receive a transfer.' },
    ],
    body: (h) => `
<h2>Cash limit when selling gold: what the law says</h2>
<p>Article 7.One of ${h.src('l7_2012', 'Law 7/2012')} says deals where one party acts as a business or professional cannot be paid in cash for amounts equal to or above {cash}. Payments a deal is split into are added up and proof of payment is kept for {cashYears} years. Breaking the limit is a serious offence for which the payer and the person paid answer jointly: the fine is {cashFine} of the amount paid in cash. Taking notes above the limit puts you at risk too.</p>
<h2>How much gold fits under the limit</h2>
${h.table(['If you are paid', '750 gold that fits under ' + h.eur(h.P.cash.limit)], [0.6, 0.7, 0.8, 0.9].map((s) => [h.pct(s, 0) + ' of the metal', h.dec(h.P.cash.limit / (h.at(1, 750) * s), 1) + ' g']), 'Grams of 750 at the gold price of ' + h.when + '; if the price rises, fewer fit.')}
<p>Above that weight, expect a transfer. It is safer for you too: the deal and the amount are on record, which helps if you later have to declare a gain for ${h.a('irpf', 'income tax')}.</p>
<h2>The record of the deal</h2>
<p>Cash or not, the shop logs the purchase and your details: buying and selling jewellery and metals is subject to record-keeping under article 25 of ${h.src('lo4_2015', 'Organic Law 4/2015')}. Bring your ID card or passport.</p>
<!--tool:offer-->
`,
  },
});
