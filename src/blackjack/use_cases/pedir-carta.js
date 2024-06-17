

// Esta función me permite tomar una carta
/**
 * Devuelve una carta, además de devolver el deck actualizado
 * @param {Array<String>} 
 * @returns {Array<String>, String}
 */
export const pedirCarta = (deck) => {
    let carta;
    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }

    carta = deck.pop();

    return { deck, carta };
}