import { valorCarta } from "./valor-carta";

// turno: 0 = primer jugador y último es computadora
/**
 * 
 * @param {String} carta 
 * @param {Number} puntos 
 * @returns 
 */
export const acumularPuntos = (carta, puntos, puntosHTML) => {

    puntos = puntos + valorCarta(carta);

    puntosHTML.innerText = puntos;

    return puntos;
}