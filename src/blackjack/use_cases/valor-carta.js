/**
 * Obtiene el valor numero del nombre de la carta
 * @param {string} carta Ejemplo: S5
 * @returns {Number} 5
 */
export const valorCarta = (carta) => {

    if (!carta || carta === '') throw new Error('El valor de la carta está vacía');


    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}