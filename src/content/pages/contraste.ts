import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'contraste', group: 'rules', order: 43, tool: 'stamp',
  related: ['gramo', 'k9', 'k22', 'plata925'], sources: ['ley17'],
  es: {
    slug: 'contraste-oro-leyes', nav: 'Contraste del oro: leer las marcas', card: 'El número grabado, el punzón y qué leyes son legales en España',
    title: 'Contraste del oro: cómo leer las marcas de una joya',
    description: 'Contraste del oro en España: qué significan el número de tres cifras, el punzón de garantía y la marca del fabricante, qué leyes son legales y el caso del 875.',
    h1: 'Contraste del oro: cómo leer las marcas de una joya',
    resume: 'El contraste del oro es la señal que, según la Ley 17/1985, deben llevar punzonada los objetos de metal precioso antes de venderse en España. Se compone de dos marcas: la de identificación de origen, del fabricante o del importador, y junto a ella la de garantía, que pone un laboratorio de contraste autorizado y que lleva dentro la ley de la aleación. Las figuras de los punzones de garantía son distintas para el platino, el oro y la plata. Lo que más importa para valorar una pieza es el número de tres cifras: la ley en milésimas. Escribe abajo el número que ves y el peso: la calculadora dice si es una ley legal en España, a cuántos kilates equivale y cuánto vale el metal con la cotización de gold-api.com y su hora.',
    faqs: [
      { q: '¿Qué significa 750 en el oro?', a: 'Que la pieza tiene 750 milésimas de oro: de cada 1000 partes de peso, 750 son oro fino y el resto es la aleación de plata, cobre u otros metales que le da dureza y color. Equivale a 18 kilates. Es la ley más habitual en la joyería española, y la calculadora de esta página la usa como valor por defecto cuando escribes el peso.' },
      { q: '¿Una joya sin contraste es falsa?', a: 'No necesariamente. Los objetos de más de cien años quedan fuera de la Ley 17/1985 y muchos no llevan marca, y una pieza muy pequeña o muy gastada puede haber perdido el número. Sin marca, solo un ensayo dice la ley. Mientras tanto, calcula su valor con la ley legal más baja, 375, para no esperar de más; si el ensayo da más, mejor.' },
      { q: '¿Qué hago con una pieza marcada 875 o 333?', a: 'Ni 875 ni 333 son leyes legales en España, así que no se pueden vender aquí como oro de esa ley. Pero el oro que contienen tiene valor: el comprador hará un ensayo y pagará el oro que encuentre. Pésala aparte del resto del lote, para que no se mezcle con tus piezas de 750 y no rebaje su precio por gramo.' },
    ],
    body: (h) => `
<h2>Contraste del oro: las leyes legales en España</h2>
${h.table(['Metal', 'Leyes admitidas (milésimas)'], [['Oro', h.P.gold.map((g) => g.ley).join(', ')], ['Plata', h.P.silver.join(', ')], ['Platino', h.P.platinum.join(', ')]], 'Artículo 9.1 de la Ley 17/1985.')}
<p>El artículo 9 de la ${h.src('ley17', 'Ley 17/1985')} añade que no se admite tolerancia en menos y que una pieza es de una ley si su contenido es igual o superior al marcado. El artículo 10 pide primero la marca del fabricante o importador, bien nítida, y junto a ella el punzón de garantía. Si una pieza no alcanza la ley mínima de su metal, se rechaza.</p>
<h2>Números que no son leyes españolas</h2>
<p>Verás a menudo 875 (21 kilates, joyería del Golfo), 333 (8 kilates, joyería alemana) o 417 (10 kilates, joyería estadounidense). Ninguno está en la lista española. Con un 875, el metal vale ${h.live(h.at(1, 875), 'XAU', 'eur2')} el gramo a las ${h.when}; con un 333, ${h.live(h.at(1, 333), 'XAU', 'eur2')}. Pero el comprador no puede revenderlas en España como oro de esa ley, así que pedirá un ensayo y pagará el oro que encuentre.</p>
<h2>Platino y piezas bañadas</h2>
<p>El platino tiene sus propias leyes (950 es la más común en joyería). El artículo 7 permite bañar la plata en oro o rodio y el oro en rodio sin que cambie su consideración, si cumplen su ley. Una pieza solo bañada en oro sobre otro metal no lleva contraste de oro y su valor como metal es casi nulo.</p>
<!--tool:lot-->
`,
  },
  en: {
    slug: 'spanish-gold-hallmarks', nav: 'Spanish gold hallmarks explained', card: 'The stamped number, the assay mark and which finenesses are legal',
    title: 'Gold hallmarks in Spain: how to read the marks on jewellery',
    description: 'Spanish gold hallmarks: what the three-digit number, the assay mark and the maker’s mark mean, which finenesses are legal in Spain and what to do with 875.',
    h1: 'Spanish gold hallmarks: how to read the marks',
    resume: 'Spanish gold hallmarks are the marks that, under Law 17/1985, precious-metal articles must carry, punched in, before they are sold in Spain. There are two: the origin mark of the maker or importer and, next to it, the guarantee mark struck by an authorised assay office, with the fineness of the alloy inside it. The guarantee marks have different shapes for platinum, gold and silver. What matters most for value is the three-digit number: the fineness in thousandths. Type below the number you see and the weight: the calculator says whether it is a legal Spanish fineness, what karat it equals and what the metal is worth at the gold-api.com price with its time. A magnifier is enough to read most marks on a clasp or inside a ring.',
    faqs: [
      { q: 'What does 750 mean on gold?', a: 'That the piece holds 750 thousandths of gold: out of every 1000 parts by weight, 750 are fine gold and the rest is an alloy of silver, copper or other metals that gives hardness and colour. It equals 18 karat. It is the most common fineness in Spanish jewellery, and the calculator on this page uses it by default when you enter a weight.' },
      { q: 'Is unmarked jewellery fake?', a: 'Not necessarily. Articles over a hundred years old are outside Law 17/1985 and many carry no mark, and a very small or worn piece may have lost its number. Without a mark, only an assay tells the fineness. Meanwhile, value it at the lowest legal fineness, 375, so you do not expect too much; if the assay shows more, all the better.' },
      { q: 'What do I do with a piece marked 875 or 333?', a: 'Neither 875 nor 333 is a legal fineness in Spain, so the piece cannot be sold here as gold of that fineness. The gold inside still has value: the buyer will assay it and pay for the gold it finds. Have it weighed apart from the rest of the lot so it does not get mixed with your 750 pieces and drag down their price per gram.' },
    ],
    body: (h) => `
<h2>Spanish gold hallmarks: the legal finenesses</h2>
${h.table(['Metal', 'Finenesses allowed (thousandths)'], [['Gold', h.P.gold.map((g) => g.ley).join(', ')], ['Silver', h.P.silver.join(', ')], ['Platinum', h.P.platinum.join(', ')]], 'Article 9.1 of Law 17/1985.')}
<p>Article 9 of ${h.src('ley17', 'Law 17/1985')} adds that there is no tolerance below the mark and that a piece meets a fineness if its content is equal to or above it. Article 10 requires first the maker’s or importer’s mark, clearly legible, and beside it the guarantee mark. A piece below the minimum fineness for its metal is rejected.</p>
<h2>Numbers that are not Spanish finenesses</h2>
<p>You will often see 875 (21 karat, Gulf jewellery), 333 (8 karat, German jewellery) or 417 (10 karat, American jewellery). None is on the Spanish list. At 875 the metal is worth ${h.live(h.at(1, 875), 'XAU', 'eur2')} a gram at ${h.when}; at 333, ${h.live(h.at(1, 333), 'XAU', 'eur2')}. But the buyer cannot resell them in Spain as gold of that fineness, so it will ask for an assay and pay for the gold it finds.</p>
<h2>Platinum and plated pieces</h2>
<p>Platinum has its own finenesses (950 is the most common in jewellery). Article 7 lets silver be plated in gold or rhodium, and gold in rhodium, without changing what they are, provided they meet their fineness. A piece merely gold-plated over another metal carries no gold hallmark and is worth next to nothing as metal.</p>
<!--tool:lot-->
`,
  },
});
