import _ from 'underscore';
// import { crearDeck as CrearNuevoDeck } from "./use_cases/crear-deck.js";
// import CualquierNombre_ElDefaultSeraTomadoAqui from "./use_cases/crear-deck.js";

import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './use_cases';


const miModulo = (() => {//Function anónima autoinvocada 

    'use strict' //Para que Javascript sea estricto con el código

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = (numJugadores = 2) => {


        puntosJugadores = [];

        puntosHTML.forEach(elem => elem.innerText = 0);

        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        deck = crearDeck(tipos, especiales);

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }



    };

    // Eventos
    btnPedir.addEventListener('click', () => {

        let auxiliarDeck;

        auxiliarDeck = pedirCarta(deck);

        deck = auxiliarDeck.deck;

        const puntosJugador = acumularPuntos(auxiliarDeck.carta, puntosJugadores[0], puntosHTML[0]);

        puntosJugadores[0] = puntosJugador;

        crearCarta(auxiliarDeck.carta, 0, divCartasJugadores);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores);

        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores);
        }

    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(deck, puntosHTML, puntosJugadores, divCartasJugadores);
    });

    btnNuevo.addEventListener('click', () => {

        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    }


})();



