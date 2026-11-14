# Test naïf du 2026-11-14 (tour2), testeur 2 : oroalgramo.com
**Persona :** Espagnol(e) de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat Google « Precio del oro hoy por gramo: 18, 24, 14 y 9 kilates » parce qu'il/elle a cette question. Découvre oroalgramo.com sur son téléphone.

## 1. Concept

**Après 5 secondes :** « C'est une page qui me donne le prix du gramme d'or aujourd'hui, par carat, avec l'heure. » Le titre « Precio del oro hoy por gramo, según su ley » reprend mot pour mot ma recherche, et l'encadré jaune répond tout de suite : « Último precio, 14 de noviembre de 2026, a las 16:42 (hora de Madrid): un gramo de oro de 24 kilates (999) vale **113,13 €** y uno de 18 kilates (750), **84,93 €**. De 14 kilates (585): **66,25 €**; de 9 kilates (375): **42,47 €**. » J'ai ma réponse avant même de faire défiler. La phrase « No compramos ni vendemos oro » me rassure : ce n'est pas un compro oro déguisé.

**Après 2 minutes :** c'est une boîte à outils pour quelqu'un qui veut vendre (ou acheter) de l'or en Espagne : valeur du métal d'un bijou selon la ley gravée et le poids, contrôle d'une offre de compro oro (en % du métal), lot de bijoux de leyes différentes, impôts à la vente (IRPF), ITP, or d'investissement sans IVA, conversion d'onces. Le message de fond est clair : « Un comprador paga menos, porque tiene que fundirlo y refinarlo » et « Entre el 60 % y el 90 % de este valor, un comprador pagaría de 509,58 € a 764,37 € ».

**Clair ?** Oui, très. **Pour qui ?** Toute personne qui a des bijoux en or à vendre, ou une offre de compro oro à juger. **Bénéfice concret :** savoir combien vaut le métal, et savoir si l'offre reçue est correcte (« la oferta paga 70,1 % del valor del metal »), puis comparer deux magasins (« Comercio B paga más… Diferencia entre la mejor y la peor 130,00 € »).

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'essentiel (prix du gramme, valeur de mon bijou, contrôle d'une offre) ; ça décroche sur la fiscalité.**

Là où ça décroche :
- Deux prix du gramme « pur » qui ne coïncident pas : 113,13 € (24 kilates, 999) dans l'encadré du haut, puis 113,24 € « el gramo de oro 100 % puro » sous chaque calculateur. L'explication « (una pieza de 999 tiene un poco menos) » est en petit gris ; un pressé voit juste deux chiffres différents.
- Pages impôts : « escala del ahorro », « base del ahorro », « renta del ahorro », « Impuesto si llenas el tramo », et la règle des bijoux anciens qui empile 1995, 1997, 31 de diciembre de 1996, 20 de enero de 2006, 2015 et « 400.000 € » dans un seul paragraphe.
- Chapeau de l'or d'investissement : une seule longue phrase avec cinq conditions (995 milésimas, peso admitido, 900 milésimas, después de 1800, 80 %).

## 3. Parcours écran par écran

- **01-accueil-1.png** — Compris. Titre = ma question, prix par carat avec heure exacte, « No compramos ni vendemos oro ». Le calculateur commence avec un exemple (« Ejemplo: 10 g de oro de 750. Escribe el peso de tu pieza. »). Seule gêne : le libellé « Pesado en » + « gramos » est un peu bizarre (« pesé en grammes ? »), mais on devine.
- **01-accueil-suite1.png** — Compris. « ¿Sin contraste? Elige 375 para no sobrevalorarla. Una báscula de cocina en gramos sirve. » : astuces concrètes, j'adore. Gros résultat « 849,30 € » puis la fourchette 60–90 % : c'est exactement ce que je voulais savoir. « Nada de lo que escribes sale de tu móvil u ordenador » rassure.
- **01-accueil-suite2.png** — Compris, petit doute. « ¿Ya tienes una oferta? (opcional) » avec 0 € : je ne vois pas ce que ça va afficher si je tape un chiffre. Le point vert « Precio del oro en este momento… 113,24 € » : coince légèrement à cause des 113,13 € vus plus haut. Bloc « ¿Tu caso es otro? Empieza por aquí » avec 4 choix : très bien, c'est un vrai aiguillage.
- **01-accueil-suite3.png** — Compris. Texte court + « Seguir leyendo », puis accordéon. « Cuánto vale tu oro: el peso y la ley bastan » : la formule est simple.
- **01-accueil-suite4.png** — Compris. Conseils de pesée (« Quita antes lo que no es oro: piedras, perlas… ») et avertissement sur le compro oro qui « paga como si fuera de 375 ». Utile.
- **01-accueil-suite5.png / suite6.png** — Compris. Calculateur de lot à 3 groupes, résultat 1071,82 € avec détail par groupe et « Oro puro del lote 9,465 g ». Clair, mais la page d'accueil commence à être très longue.
- **01-accueil-suite7.png à suite10.png** — Compris mais lourd. Un calculateur IRPF complet sur l'accueil (2500 € / 900 € → 304,00 €, « Te queda 2196,00 € »). Le résultat est clair, mais je me demande pourquoi l'accueil d'un site « prix du gramme » me fait déjà calculer mes impôts. Le paragraphe des tranches (19 %, 21 %, 23 %, 27 %, 30 %) est dense.
- **01-accueil-suite11.png / suite12.png** — Compris. « Todas las calculadoras y guías » bien rangé par thème (Precio del oro por ley / Vender oro / Plata / Impuestos y normas). FAQ « ¿Cómo sé la ley de un anillo o una cadena? » : réponse parfaite (« Busca un número de tres cifras en el interior del aro o en el cierre »).
- **02-menu-1.png / suite1.png** — Compris. Menu propre en 4 rubriques. « Plata » est replié alors que les autres sont ouverts : incohérent mais pas bloquant. Pas de « Metodología » ni de bouton de fermeture visible (seulement le ☰).
- **03-es-comprobar-oferta-compro-oro-1.png / suite1.png** — Compris, c'est la page la plus utile. « Peso que anotó el comprador », « Lo que te ofrecen, en total » : vocabulaire de la vraie vie. Résultat « 70,1 % del valor del metal » + « Lo que se queda el comprador (antes de sus gastos e impuestos) 254,30 € » : j'ai un argument à opposer au vendeur.
- **03-…-suite2.png / suite3.png** — Compris. Honnête : « Ninguna ley ni organismo publica cuánto pagan los compradores: la única vara de medir es un segundo presupuesto. » Tableau 50 % à 90 % clair.
- **03-…-suite4.png à suite6.png** — Compris. « Por qué el comprador no paga el 100 % » explique en 4 lignes ; comparateur A/B/C avec gagnant affiché. Très bien.
- **04-es-contraste-oro-leyes-1.png / suite1.png** — Compris. Je tape le nombre gravé (750) → « 18 kilates », « 75 % de oro puro como mínimo ». Ici « Número grabado » est un champ libre alors qu'ailleurs c'est une liste : on s'adapte.
- **04-…-suite2.png / suite3.png** — Compris. Tableau des puretés légales (or, plata, platino) avec source « Ley 17/1985, artículo 9.1 ». « Platino y piezas bañadas » répond à la question « mon bijou plaqué vaut-il quelque chose ? » : « su valor como metal es casi nulo ». Utile.
- **04-…-suite4.png à suite6.png** — Compris mais déjà vu : le même calculateur de lot (8 g / 4 g / 3 g → 1071,82 €) que sur l'accueil. Impression de copier-coller.
- **05-es-cuanto-vale-un-gramo-de-oro-1.png / suite1.png** — Compris, petite confusion. Même formulaire que la page 04 (même exemple « un anillo con el número 750 », poids 5 g), mais le gros chiffre est « 84,93 € » pour 1 gramme ; mes 5 g (« Tu pieza de 5 g: 424,65 € ») sont en petit dans la phrase. J'ai tapé un poids et le grand chiffre l'ignore.
- **05-…-suite2.png / suite3.png** — Compris. Tableau par ley clair (« Un gramo vale ahora »). « Si tu pieza lleva otro número, por ejemplo 875 o 333, no tiene una ley legal en España » : utile.
- **05-…-suite4.png à suite6.png** — Compris mais redondant : le calculateur d'offre de la page 03, identique (595 € / 10 g → 70,1 %).
- **06-es-impuestos-vender-oro-irpf-1.png / suite1.png** — Compris. Chapeau simple : « se reducen a uno: el IRPF… y solo sobre la ganancia ». Même calculateur que sur l'accueil.
- **06-…-suite2.png / suite3.png** — Coince un peu. « la escala del ahorro », « Impuesto si llenas el tramo » : je ne sais pas ce que « remplir la tranche » veut dire. L'exemple final (1600 € → 304 €, ou 336 € si on a déjà 6000 € d'intérêts) sauve le paragraphe.
- **06-…-suite4.png** — Coince. « Joyas compradas antes de 1995 » : 1995, 2006, 1997, 2015, 400.000 €, puis 1996 et « 14,28 % por cada año de permanencia… a partir del tercero ». Je retiens seulement « pregunta en la Agencia Tributaria ».
- **06-…-suite5.png / suite6.png** — Compris mais surprenant : un mini-outil « ¿Te pueden pagar en efectivo? » → « Sí, se permite. Por debajo de 1000 €… » sur la page impôts. Clair, mais je ne l'attendais pas ici.
- **07-es-itp-compra-oro-particulares-1.png à suite2.png** — Compris. Le titre dit tout : « si vendes, lo paga el comprador ». Résultat « 23,80 € », « no te lo pueden descontar de tu precio ». « Lo que le queda al comprador después de pagar el ITP 230,50 € » : intéressant.
- **07-…-suite3.png à suite6.png** — Compris mais redondant : encore le calculateur IRPF (3e fois). Carte « Calcula también » : « La ganancia va a la base del ahorro: del 19 % al 30 % » → jargon.
- **08-es-metodologia-1.png à suite4.png** — Compris pour l'essentiel, rassurant. Source du prix nommée (gold-api.com), lois citées, tests automatiques, limites (« No conocemos tu pieza »), éditeur « Radif Partners… no compra, no vende y no es un compro oro ». Surprise : « último precio guardado: 14 de noviembre de 2026, a las 13:58 » alors que partout ailleurs je lis 16:42 ; c'est expliqué, mais il faut lire attentivement. « No publicamos el tipo de cada comunidad porque no lo hemos leído en cada boletín » : honnête, mais ça me laisse sans le taux de ma communauté.
- **09-es-oro-de-inversion-iva-1.png** — Coince un peu : le chapeau est une seule longue phrase avec 5 conditions.
- **09-…-suite1.png à suite6.png** — Compris. Verdict net « Sí, sin IVA », « prima 4,2 % » bien expliquée (« Lo que pagas de más sobre el valor del oro »). Tableau des conditions lisible. Convertisseur once → 31,103 g, « Precio de 1 onza troy de oro fino 3522,17 € » : pratique.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Prix du gramme par carat avec heure (encadré du haut) | Oui, immédiatement | Oui | Oui, c'est ma question | 5 |
| Valeur de ma pièce (ley + poids) | Oui | Oui | Oui | 5 |
| Fourchette d'achat 60–90 % | Oui | Oui | Très | 5 |
| « ¿Ya tienes una oferta? » sur l'accueil | Oui | À moitié (on ne voit pas ce que ça donne) | Oui | 3 |
| Comprobar la oferta (page 03) | Oui (aiguillage + menu) | Oui | Très | 5 |
| Comparer 2–3 presupuestos | Oui | Oui | Très | 5 |
| Lot de leyes différentes | Oui | Oui | Oui | 4 |
| Lire le contraste (nombre gravé → carats) | Oui | Oui | Oui | 4 |
| Gramme par ley (page 05) | Oui | Oui, mais gros chiffre = 1 g alors que j'ai tapé 5 g | Moyen (doublon) | 3 |
| IRPF à la vente | Oui | Résultat oui, explications jargonneuses | Oui | 4 |
| ITP | Oui | Oui | Moyen (concerne surtout l'acheteur) | 4 |
| Paiement en espèces | Oui (page IRPF) | Oui | Oui | 3 (mal placé) |
| Or d'investissement sans IVA + prime | Oui | Oui | Oui pour un acheteur | 4 |
| Convertisseur grammes / onces / kilos | Oui | Oui | Oui | 4 |
| « De dónde sale este precio » | Vu, pas ouvert | Le nom est clair | Rassurant | 4 |
| Méthodologie | Via le plan (pas dans le menu) | Oui | Confiance | 3 |
| Prix de la plata 925 (promis par Google) | Seulement en lien/accordéon replié sur l'accueil | — | — | 2 |

## 5. Enchaînement et navigation

- L'accueil fait le travail : réponse au-dessus de la ligne de flottaison, puis un aiguillage « ¿Tu caso es otro? Empieza por aquí » à 4 choix, puis un plan complet « Todas las calculadoras y guías ». Excellent pour un pressé.
- Fil d'Ariane « Inicio / … » sur chaque page, bandeau EN + ☰ cohérent.
- Chaque page suit le même schéma (chapeau court + « Seguir leyendo », calculateur, tableau sourcé, accordéons « toca un título para abrirlo », FAQ, « Calcula también ») : on prend vite le pli.
- Revers : les mêmes calculateurs reviennent sur plusieurs pages (lot : accueil + 04 ; offre : 03 + 05 ; IRPF : accueil + 06 + 07). En enchaînant les pages, on a l'impression de relire la même chose.
- L'accueil est très long (13 écrans) : le calculateur IRPF au milieu dilue le sujet « prix du gramme ».
- Menu : « Plata » replié alors que les autres rubriques sont ouvertes ; « Metodología » absente du menu.

## 6. Difficultés classées

1. **01-accueil-1 / suite2 (et tous les calculateurs) — deux prix du gramme « pur ».** Vécu : je lis 113,13 € pour le 24 carats en haut, puis 113,24 € « el gramo de oro 100 % puro » sous le calculateur ; je me demande lequel est le « vrai » prix du jour. Recommandation : afficher le 100 % pur dans l'encadré du haut aussi, ou formuler la ligne du bas en partant du 999. Texte de remplacement : « Oro 100 % puro: 113,24 € el gramo. Una pieza de 24 kilates (999) lleva un 99,9 % de oro: 113,13 € el gramo. »
2. **06-…-suite2 / suite3 / 07-…-suite6 — jargon fiscal.** Vécu : « escala del ahorro », « base del ahorro », « Impuesto si llenas el tramo » ne me parlent pas. Recommandation : remplacer par des mots de tous les jours. Textes : « Impuestos al vender oro: los porcentajes según lo que ganas en el año » ; « Impuesto máximo de este tramo » ; carte : « La ganancia paga entre el 19 % y el 30 % ».
3. **06-…-suite4 — règle des bijoux anciens illisible.** Vécu : 1995, 1997, 1996, 2006, 2015 dans un même paragraphe, je décroche. Recommandation : une phrase-réponse puis le détail replié. Texte : « ¿La compraste antes de 1995? Pagarás menos, a veces nada. La calculadora no lo descuenta: su cifra es un máximo. Pide el cálculo exacto a Hacienda con la fecha de compra. » (le reste dans un accordéon « Para quien quiera el detalle »).
4. **05-…-suite1 — le gros chiffre ignore mon poids.** Vécu : j'ai 5 g, le grand chiffre dit 84,93 € et mes 424,65 € sont noyés dans une phrase grise. Recommandation : mettre la valeur de la pièce en gros et le prix du gramme dessous. Texte : « Tu pieza de 5 g de 750 vale **424,65 €** (84,93 € el gramo) ».
5. **Pages 04/05, 03/05, accueil/06/07 — calculateurs en double.** Vécu : impression de copier-coller en passant d'une page à l'autre, j'ai envie de fermer. Recommandation : sur chaque page, un seul calculateur propre au sujet ; pour les autres, un lien-carte « Calcula también » au lieu du formulaire complet.
6. **01-accueil-suite7 à suite10 — accueil trop long, IRPF trop tôt.** Vécu : je venais pour le prix, je tombe sur un calcul d'impôts complet. Recommandation : remplacer le calculateur IRPF de l'accueil par un résumé d'une ligne + lien. Texte : « ¿Vendes por más de lo que te costó? Pagas IRPF solo por la ganancia, desde el 19 %. Calcúlalo aquí → ».
7. **Promesse Google « plata 925 » peu visible.** Vécu : le résultat Google promettait la plata 925, sur l'accueil je n'ai qu'un lien « 4. Plata de ley 925 » et un accordéon replié ; dans le menu, « Plata » est la seule rubrique fermée. Recommandation : ajouter une ligne à l'encadré du haut et ouvrir « Plata » dans le menu. Texte : « Plata de ley 925: X,XX € el gramo. »
8. **01-accueil-suite2 — champ « ¿Ya tienes una oferta? (opcional) » sans promesse de résultat.** Vécu : je ne sais pas ce que ça va me donner si je le remplis. Texte de remplacement : « ¿Ya tienes una oferta? Escríbela y verás qué porcentaje del metal te pagan (opcional) ».

## 7. À garder

- Le titre et l'encadré du haut qui répondent à la recherche en 3 secondes, avec date et heure de Madrid.
- « No compramos ni vendemos oro » dès le chapeau, et la signature « no compra, no vende y no es un compro oro ».
- La fourchette « Entre el 60 % y el 90 % de este valor » et l'explication « porque tiene que fundirlo y refinarlo ».
- Le calculateur d'offre en % (« 70,1 % del valor del metal », « Lo que se queda el comprador ») et le comparateur A/B/C avec « Diferencia entre la mejor y la peor ».
- Les astuces terrain : « ¿Sin contraste? Elige 375 », « Una báscula de cocina en gramos sirve », « Quita antes lo que no es oro ».
- L'honnêteté : « Ninguna ley ni organismo publica cuánto pagan los compradores », « Son dos puntos de referencia, no un precio de mercado ».
- « Nada de lo que escribes sale de tu móvil u ordenador. No pedimos nombre, correo ni código postal. »
- L'aiguillage « ¿Tu caso es otro? Empieza por aquí » et le titre ITP « si vendes, lo paga el comprador ».
- Les verdicts en gros (« 18 kilates », « Sí, sin IVA », « Sí, se permite »).
- Les étiquettes « Ejemplo: … » qui montrent clairement que les chiffres affichés sont un exemple.

## 8. Notes

Clarté : 8/10
Facilité : 8/10
Utilité : 9/10
