import { acumularPuntos } from "./acumular-puntos";
import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";

/**
 * 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML 
 * @param {Array<Number>} puntosJugadores
 */
export const turnoComputadora = (deck, puntosHTML, puntosJugadores, divCartasJugadores) => {

    let puntosComputadora = 0;
    let auxiliarDeck;
    let turno = puntosJugadores.length - 1;
    let puntosMinimos = puntosJugadores[0];

    do {
        auxiliarDeck = pedirCarta(deck);

        deck = auxiliarDeck.deck;

        puntosComputadora = acumularPuntos(auxiliarDeck.carta, puntosComputadora, puntosHTML);

        puntosHTML[turno].innerText = puntosComputadora;

        crearCarta(auxiliarDeck.carta, turno, divCartasJugadores);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);

}

const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}