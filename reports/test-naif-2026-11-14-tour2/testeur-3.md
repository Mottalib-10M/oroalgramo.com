# Test naïf du 2026-11-14 (tour2), testeur 3 : oroalgramo.com
**Persona :** Espagnol(e) de 61 ans, se sert de son téléphone pour WhatsApp et la météo, lit lentement, se méfie des sites qui demandent des données, ne comprend pas les sigles, ne lit pas l'anglais. Il/elle a cliqué sur le résultat Google « Precio del oro hoy por gramo: 18, 24, 14 y 9 kilates » parce qu'il/elle a cette question pour lui/elle-même ou un proche (des bijoux à vendre, typiquement).

## 1. Concept

**Après 5 secondes (01-accueil-1) :** « C'est le prix de l'or aujourd'hui, au gramme, avec l'heure. » Le titre « Precio del oro hoy por gramo, según su ley » reprend exactement ce qu'elle a vu sur Google. Le cadre jaune donne tout de suite la réponse : « un gramo de oro de 24 kilates (999) vale **113,13 €** y uno de 18 kilates (750), **84,93 €** ». Elle a sa réponse sans rien toucher. La phrase « No compramos ni vendemos oro » la rassure : ce n'est pas un compro oro déguisé.

**Après 2 minutes :** elle comprend que c'est une calculette : elle choisit le numéro gravé, elle pèse sa bague sur la balance de cuisine, et le site lui dit ce que vaut le métal, puis combien un acheteur paierait vraiment (« Entre el 60 % y el 90 % de este valor, un comprador pagaría de 509,58 € a 764,37 € »), et si l'offre d'un compro oro est correcte (page 03 : « la oferta paga 70,1 % »). C'est clair. C'est pour quelqu'un qui a de l'or chez lui et veut éviter de se faire avoir. Le bénéfice concret, c'est d'arriver au compro oro en connaissant déjà la valeur, et de comparer deux offres en pourcentage.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'essentiel (prix du gramme, valeur de sa pièce, contrôle d'une offre). Ça décroche sur les impôts et les pages techniques.**

Les endroits où ça décroche :
- **Sigles :** IRPF et ITP reviennent partout. Ils sont expliqués une fois (« el IRPF, el impuesto sobre la renta », « el Impuesto sobre Transmisiones Patrimoniales »), mais le titre de la page 07 commence par « ITP en la compra de oro a particulares » avant toute explication. Plus loin, IVA, BOE, NIST, « guía del SI », « gold-api.com » et « texto refundido » apparaissent dans la page Metodología, et elle n'y comprend rien.
- **Jargon fiscal :** « la escala del ahorro », « tramo », « Impuesto si llenas el tramo », et sur la carte de la page 07 : « La ganancia va a la base del ahorro: del 19 % al 30 % ». Elle ne sait pas ce qu'est la « base del ahorro ».
- **Le mot « ley » a deux sens sur la même page.** Il veut dire pureza (« Ley del oro (pureza…) ») mais aussi loi (« Vender oro: lo que dice la ley española », « Ley 17/1985 », « Contraste del oro: las leyes legales en España »). « Leyes legales » l'arrête net.
- **Les dates de la règle d'avant 1995 (06-suite4) :** 1995, 20 de enero de 2006, 1997, 2015 et 31 de diciembre de 1996 tombent dans le même paragraphe, et elle s'y perd complètement.

## 3. Parcours écran par écran

| Écran | Compris / coince |
|---|---|
| 01-accueil-1 | **Compris.** Prix du jour avec la date et l'heure de Madrid, les 4 titres principaux en gras. Le formulaire est simple : « Ley del oro (pureza: el número grabado) », « Peso », « Pesado en: gramos ». Petite hésitation sur « Pesado en » : pourquoi choisir ? Elle laisse « gramos ». |
| 01-accueil-suite1 | **Compris, et rassurant.** « Una báscula de cocina en gramos sirve. » « Nada de lo que escribes sale de tu móvil u ordenador. No pedimos nombre, correo ni código postal. » Pour elle qui se méfie, c'est exactement ce qu'il fallait. Le grand chiffre « 849,30 € », puis la fourchette de 509,58 € à 764,37 € que paierait un acheteur : très utile. **Petit doute :** « ¿Sin contraste? Elige 375 », alors que le mot « contraste » n'a pas encore été expliqué. |
| 01-accueil-suite2 | **Compris.** « ¿Ya tienes una oferta? (opcional) » avec un champ à 0 €. **Coince un peu :** le prix à côté du point vert est « 113,24 € el gramo de oro 100 % puro », alors qu'au-dessus le gramme de 24 kilates vaut 113,13 €. Elle se demande lequel est le vrai prix. La parenthèse « (una pieza de 999 tiene un poco menos) » l'explique, mais en petit. Le bloc « ¿Tu caso es otro? Empieza por aquí » avec 4 choix numérotés est très bien. |
| 01-accueil-suite3 | **Compris.** « tres cuartas partes de oro puro… tres octavos » : les fractions parlent. La phrase « Más sobre leyes, ofertas, plata e impuestos: toca un título para abrirlo » est claire. |
| 01-accueil-suite4 | **Compris et utile :** « Quita antes lo que no es oro: piedras, perlas… ». Le conseil « No pongas en la báscula piezas de leyes distintas a la vez » est concret. |
| 01-accueil-suite5/6 | **Compris.** Calculette par lots (3 groupes) : « Pide que el comprador pese y pague cada grupo por separado ». **Petite gêne :** « Oro puro del lote 9,465 g ». Avec trois décimales, elle peut lire 9 465 grammes. |
| 01-accueil-suite7 | **Coince.** Sur la page d'accueil apparaît « Impuestos al vender oro: el IRPF » avec le barème 19 %, 21 %, 23 %, 27 %, 30 % et des montants jusqu'à 300.000 €. Pour quelqu'un qui vend une gourmette, c'est intimidant : « Je vais payer 19 % ? » La phrase « Solo pagas impuestos si vendes por más de lo que te costó la pieza » la rassure, mais elle est noyée. |
| 01-accueil-suite8/9/10 | **Compris dans l'ensemble.** La calculette IRPF est claire (« Te queda 2196,00 € »). Mais elle ne sait pas ce qu'elle a payé pour une bague de mariage d'il y a 40 ans, ni ce qu'est « el valor del impuesto de sucesiones ». « Otras ganancias de este año: intereses, dividendos » : elle hésite et laisse 0. |
| 01-accueil-suite11/12 | **Compris.** Le plan « Todas las calculadoras y guías » est bien rangé. La FAQ « ¿Cómo sé la ley de un anillo o una cadena? » est parfaite pour elle (« Busca un número de tres cifras en el interior del aro… Una lupa ayuda »). Le titre « Por qué esta página da cifras que cuadran » est obscur : que veut dire « cuadran » ici ? |
| 02-menu-1 / suite1 | **Compris.** Rubriques Precio del oro / Vender / Plata / Impuestos, avec des intitulés simples. Le bouton « EN » ne la concerne pas, il ne gêne pas. Dans « Impuestos », elle voit « ITP en la compra de oro » et « Oro de inversión sin IVA » sans savoir ce qu'est l'ITP. |
| 03-…-1 | **Compris.** « Compro oro: comprueba el precio que te ofrecen por gramo » : c'est exactement son cas. Les champs « Peso que anotó el comprador » et « Lo que te ofrecen, en total » sont clairs. |
| 03-…-suite1/2 | **Très clair.** « la oferta paga 70,1 % del valor del metal ». La ligne « Lo que se queda el comprador (antes de sus gastos e impuestos) 254,30 € » lui ouvre les yeux. Le conseil « Pide precio por las mismas piezas en otro comercio el mismo día; gana el porcentaje más alto » est simple et applicable. |
| 03-…-suite3 | **Compris.** Le tableau 50 % à 90 % pour 10 g de 750 est lisible. |
| 03-…-suite4/5/6 | **Compris.** « Por qué el comprador no paga el 100 % » : l'ITP apparaît entre parenthèses sans explication ici. Le comparateur Comercio A / B / C donne « Diferencia entre la mejor y la peor 130,00 € » : parlant. La question « ¿Me pueden pedir el DNI para vender oro? » est très pertinente pour elle. |
| 04-…-1 | **Compris.** « El contraste del oro son las marcas pequeñas que lleva una joya » : enfin le mot « contraste » est expliqué. **Petite incohérence :** ici, le numéro gravé se tape au clavier (« Número grabado 750 »), alors qu'à l'accueil c'était une liste déroulante. |
| 04-…-suite1 | **Compris.** « 18 kilates », « 75 % de oro puro como mínimo ». **Gêne :** « Metal puro que contiene 3,750 g » : avec trois décimales, elle peut lire « trois mille sept cent cinquante grammes ». Le titre « Contraste del oro: las leyes legales en España » mélange les deux sens de « ley ». |
| 04-…-suite2 | **À moitié.** Le tableau des puretés (oro, plata, platino) est lisible. « milésimas » se comprend. « Primero va la marca del fabricante… y a su lado el punzón de garantía » est utile. |
| 04-…-suite3/4/5/6 | **Compris.** « Platino y piezas bañadas » : « Una pieza solo bañada en oro sobre otro metal… su valor como metal es casi nulo » est important pour elle. La calculette des lots est répétée, identique à celle de l'accueil, et elle a l'impression de l'avoir déjà vue. |
| 05-…-1/suite1 | **Compris, mais le chapeau est lourd :** « el precio internacional de la onza troy, la unidad de los mercados, dividido entre sus 31,1 gramos ». « Onza troy » ne lui dit rien. Le résultat « 1 gramo de oro de 750 (18 kilates) vale 84,93 € » avec la liste des 5 puretés est très clair. |
| 05-…-suite2/3 | **Compris.** Tableau « Ley grabada / Kilates / Un gramo vale ahora », puis « Si tu pieza lleva otro número, por ejemplo 875 o 333, no tiene una ley legal en España » : utile. |
| 05-…-suite4/5/6 | **Compris.** Même contrôleur d'offre qu'en page 03 (répétition). La rubrique « Pesar bien un gramo » est bienvenue. |
| 06-…-1/suite1 | **Compris.** « Los impuestos al vender oro, para un particular, se reducen a uno: el IRPF, el impuesto sobre la renta, y solo sobre la ganancia » : la phrase est claire et rassurante. |
| 06-…-suite2/3 | **Coince.** « la escala del ahorro », « Ganancias del año: 6000 € a 50.000 € », « Impuesto si llenas el tramo 9240 € ». Elle croit un instant qu'elle va payer 9 240 €. « Tramo » et « llenar el tramo » ne lui parlent pas. |
| 06-…-suite4/5 | **Coince fort.** Le paragraphe « Joyas compradas antes de 1995 » enchaîne 1995, 2006, 1997, 2015 et 400.000 € de plafond, puis « 14,28 % por cada año de permanencia… disposición transitoria novena ». Elle lâche. Seule la conclusion compte pour elle : « pregunta en la Agencia Tributaria (Hacienda) con la fecha de compra ». |
| 06-…-suite5/6 | **Compris.** « ¿Te pueden pagar en efectivo? » donne « Sí, se permite. Por debajo de 1000 €, el comercio puede pagarte en billetes » : simple et utile. |
| 07-…-1 | **Coince au titre.** « ITP en la compra de oro a particulares: si vendes, lo paga el comprador ». Le sigle arrive avant l'explication, qui vient juste après dans le texte. Le message « Lo paga siempre quien compra… no tú » est rassurant. |
| 07-…-suite1/2 | **À moitié.** Le champ « Porcentaje del ITP en tu comunidad 4 % » avec « Si no lo sabes, deja el 4 % » est bien guidé. Mais pourquoi lui montrer « Lo que le queda al comprador después de pagar el ITP 230,50 € » ? Elle finit par comprendre que c'est la marge de l'acheteur, après un temps d'hésitation. |
| 07-…-suite3/4/5 | **Compris.** « Tu parte: el IRPF », « Como vendedor, tú no pagas ITP » : clair. La calculette IRPF est répétée pour la troisième fois sur le parcours. |
| 07-…-suite6 | **Coince.** La carte « Impuestos al vender oro (IRPF): La ganancia va a la base del ahorro: del 19 % al 30 % » emploie du jargon. |
| 08-…-1/2/3 | **Ne comprend pas, mais n'en a pas besoin.** « Todas las calculadoras funcionan en tu navegador: lo que escribes no se envía ni se guarda » la rassure. Le reste lui passe au-dessus : formule, « 31,1034768 gramos (NIST, guía del SI) », « gold-api.com », « renta del ahorro (artículo 46 de la Ley 35/2006) », « texto refundido », « motor de cálculo tiene pruebas automáticas ». **Incohérence vue :** « último precio guardado: 14 de noviembre de 2026, a las 13:58 », alors que toutes les autres pages affichent 16:42. L'explication est donnée, mais elle trouble. |
| 08-…-suite3/4 | **Compris.** « Calculado por Radif Partners… no compra, no vende y no es un compro oro » la rassure. Le pied de page « Sobre este sitio, aviso legal y todas las páginas » est discret. |
| 09-…-1 | **Coince.** Le chapeau est très long et technique (995 milésimas, peso admitido, 900 milésimas, acuñadas después de 1800, 80 %…). Elle n'a ni lingot ni pièce, cette page ne la concerne probablement pas. Le champ « Pureza o ley (milésimas) 999,9 » mélange virgule et milièmes. |
| 09-…-suite1 | **Compris.** « Sí, sin IVA » et « Lo que pagas de más sobre el valor del oro (prima) 4,2 % » : la prima est expliquée, c'est bien. « 9,999 g » se lit comme près de 10 kilos. |
| 09-…-suite2/3 | **À moitié.** Le tableau des conditions reste lisible, mais « Dinero oficial (curso legal) » et « lo es o lo fue en su país » sont techniques. |
| 09-…-suite4/5/6 | **À moitié.** Le convertisseur « onzas troy » donne « 31,103 g », « Kilos 0,0311 », « Precio de 1 kilo de oro fino 113.240,26 € ». Ce n'est pas utile pour elle, mais c'est lisible. |

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Prix du gramme par pureté (cadre en tête d'accueil) | Oui, immédiatement | Oui | Très | 5 |
| Calculateur valeur de ma pièce (accueil) | Oui | Oui | Très | 5 |
| Fourchette « lo que pagaría un comprador » (60–90 %) | Oui | Oui | Très | 5 |
| « ¿Ya tienes una oferta? » sur l'accueil | Oui | Oui (champ optionnel) | Oui | 4 |
| Contrôle d'une offre de compro oro (page 03) | Oui (menu + « Empieza por aquí ») | Oui, très bien | Très | 5 |
| Comparer 2 ou 3 commerces | Oui (page 03) | Oui | Très | 5 |
| Lot de puretés différentes | Oui (accueil, page 04) | Oui | Oui | 4 |
| Lire le contraste (Número grabado → kilates) | Oui | Oui | Oui | 4 |
| Calculateur IRPF | Oui (3 fois) | Les champs oui, le barème mal | Moyen pour elle | 3 |
| Paiement en espèces | Oui (page 06) | Oui | Oui | 4 |
| ITP (page 07) | Oui via le menu | Le sigle non, le message « no lo pagas tú » oui | Moyen | 3 |
| Oro de inversión / IVA (page 09) | Oui via le menu | À moitié | Faible pour elle | 2 |
| Convertisseur onzas / gramos / kilos | Oui (page 09) | Oui | Faible pour elle | 3 |
| « De dónde sale este precio » | Vu partout | Pas ouvert, mais le lien est clair | Rassurant | 4 |
| FAQ en accordéon | Oui | Oui (« Toca una pregunta… ») | Oui | 4 |

## 5. Enchaînement et navigation

- **Points forts :** le menu ☰ est bien rangé en 4 rubriques aux mots simples. Le fil d'Ariane « Inicio / … » est présent partout. Le bloc « ¿Tu caso es otro? Empieza por aquí » oriente très bien. Le plan « Todas las calculadoras y guías » est lisible. Les blocs « Calcula también » prolongent naturellement.
- **Répétitions :** le même cadre « Precio del oro en este momento… 113,24 € » revient après chaque calculette (5 à 6 fois sur l'accueil et les pages). La calculette IRPF apparaît sur l'accueil, puis en page 06 et en page 07. La calculette des lots apparaît sur l'accueil et en page 04. Le contrôleur d'offre apparaît en pages 03 et 05. Sur téléphone, elle doit faire défiler beaucoup et a parfois l'impression de tourner en rond.
- **Petites incohérences :** la pureté se choisit dans une liste à l'accueil et en pages 03, 07 et 09, mais se tape au clavier en pages 04 et 05. Il y a deux prix pour l'or pur (113,13 € pour le 999 et 113,24 € pour le 100 %). L'heure est 13:58 en page Metodología contre 16:42 ailleurs.
- **Page d'accueil très longue :** il faut 13 écrans, et les impôts y arrivent avant les questions simples (FAQ « ¿Cómo sé la ley…? »).

## 6. Difficultés classées

1. **Barème IRPF effrayant et jargonneux (01-accueil-suite7/8, 06-suite2/3, 07-suite6).** Elle lit « Impuesto si llenas el tramo 9240 € » et « base del ahorro » et croit qu'elle va payer gros. **Recommandation :** mettre en tête du barème une phrase simple, et renommer la colonne. Phrase d'en-tête proposée : « Solo pagas por lo que ganas: si vendes por menos de lo que te costó, no pagas nada. » Remplacer « Impuesto si llenas el tramo » par « Impuesto máximo en esta franja ». Remplacer « La ganancia va a la base del ahorro: del 19 % al 30 % » par « Pagas entre el 19 % y el 30 % de lo que ganas, no del precio de venta ».
2. **Paragraphe « Joyas compradas antes de 1995 » illisible (06-suite4/5).** Les dates 1995, 1997, 2006, 2015 et 1996 s'empilent. **Recommandation :** réduire à « ¿Compraste o heredaste la joya antes de 1995? Puede que pagues mucho menos, o nada. Esta calculadora no lo descuenta: pregunta en Hacienda con la fecha de compra. » et replier le détail technique dans un accordéon « Para quien quiera el detalle ».
3. **Sigles en titre avant l'explication (07-1, menu).** **Recommandation :** titre « El impuesto que paga el comprador (ITP) cuando vendes oro: no lo pagas tú ». Dans le menu, écrire « Impuesto que paga el comprador (ITP) » et « Impuestos al vender oro (renta, IRPF) ».
4. **Le double sens de « ley » (01-suite7, 04-suite1).** « Vender oro: lo que dice la ley española » et « las leyes legales en España » côtoient « ley = pureza ». **Recommandation :** remplacer « las leyes legales en España » par « Las purezas permitidas en España », et « lo que dice la ley española » par « lo que dicen las normas españolas ».
5. **Nombres à trois décimales (« 3,750 g », « 9,465 g », « 9,999 g », « 31,103 g »).** Une lectrice lente peut y voir des milliers de grammes. **Recommandation :** arrondir à deux décimales (« 3,75 g ») ou écrire « 3,75 gramos de oro puro ».
6. **Deux prix pour « oro puro » (01-1 contre 01-suite2).** On lit 113,13 € pour le 24 kilates et 113,24 € pour le 100 % puro. **Recommandation :** « Precio de referencia: 113,24 € el gramo de oro totalmente puro. Una joya de 24 kilates (999) vale un poco menos: 113,13 €. »
7. **Répétition des mêmes calculettes et du même cadre de prix.** Le parcours est long sur téléphone, avec le sentiment de déjà-vu. **Recommandation :** sur l'accueil, remplacer la calculette IRPF complète par un lien-carte « ¿Pagarás impuestos? Calcúlalo aquí », et n'afficher le cadre « Precio del oro en este momento » qu'une fois par page.
8. **Page Metodología et chapeau « onza troy » trop techniques (05-1, 08).** **Recommandation :** en page 05, écrire « el precio del oro en los mercados internacionales, pasado a gramos » au lieu de « la onza troy, la unidad de los mercados, dividido entre sus 31,1 gramos ». En Metodología, ajouter une phrase simple au début : « En resumen: peso × pureza × precio del día. El resto es el detalle para expertos. » Aligner aussi l'heure affichée ou dire « la hora que ves en cada calculadora es la buena ».

## 7. À garder

- Le cadre de tête de l'accueil, avec le prix du jour, l'heure de Madrid et les 4 puretés en gras : réponse immédiate à la recherche Google.
- « No compramos ni vendemos oro » et « Nada de lo que escribes sale de tu móvil u ordenador. No pedimos nombre, correo ni código postal. » : décisifs pour une personne méfiante.
- La fourchette « Entre el 60 % y el 90 %… un comprador pagaría de 509,58 € a 764,37 € » : c'est le chiffre qu'elle emportera au compro oro.
- Le contrôleur d'offre en pourcentage et le comparateur Comercio A / B / C (« Diferencia entre la mejor y la peor 130,00 € »).
- Les conseils concrets : balance de cuisine, retirer les pierres, séparer les puretés, « Elige 375 para no sobrevalorarla », « Pide precio… en otro comercio el mismo día ».
- La FAQ « ¿Cómo sé la ley de un anillo o una cadena? » et la question « ¿Me pueden pedir el DNI para vender oro? ».
- « Sí, se permite. Por debajo de 1000 €, el comercio puede pagarte en billetes. »
- Le bloc « ¿Tu caso es otro? Empieza por aquí », le menu en 4 rubriques et le fil d'Ariane.
- La signature « Radif Partners… no compra, no vende y no es un compro oro ».

## 8. Notes

Clarté : 8/10
Facilité : 8/10
Utilité : 9/10
