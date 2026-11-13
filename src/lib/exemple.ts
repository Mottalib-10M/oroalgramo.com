/** Offre d'exemple : 70 % de la valeur métal au relevé du build, arrondie à 5 €. Ce n'est pas un taux de
 *  marché : aucun organisme n'en publie. Partagée par les calculateurs et par le texte des pages : l'offre
 *  citée en exemple dans le texte est celle que montre le calculateur (même calcul, même arrondi). */
import { metalValue } from './engine/metal';
import { SNAPSHOT } from './engine/params';
export const exampleOffer = (g: number, ley: number) => Math.round(metalValue(g, ley, SNAPSHOT.eurPerOz.XAU) * 0.7 / 5) * 5;
