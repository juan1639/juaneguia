// =================================================================================
//  Portfolio Juan Eguia
// 
// =================================================================================
import { Settings } from './constants.js';
import { crearElementos_fetchingJson } from './fetching-iter.js';

import {
    carga_misLenguajes_imagenes,
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_caretsAbajo,
} from "./functions.js";

let settings;

// =================================================================================
//  Fetching info tarjetas proyectos
//  
// ---------------------------------------------------------------------------------
const recibeInfo_proyectos = async () => {

    const endpoint = './json/proyectos.json';

    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        console.log(response);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            //funcion para mostrar la informacion
            muestraResultados(jsonResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

// ----------------------------------------------------------------------------------
const muestraResultados = (response) => {

    console.log(response);

    let contador = 999;
    let opcionIndex = -1;
    const navbar_opciones = Object.keys(response);

    for (let opcionElegida of navbar_opciones) {

        opcionIndex ++;

        for (let i of response[opcionElegida]) {

            contador --;

            const tarjeta = crearElementos_fetchingJson(i, contador, opcionIndex);
            settings.doms.contenedor_proyectos[opcionIndex].appendChild(tarjeta);
            
            tarjeta.addEventListener('click', (ev) => {
                ver_mas(ev);
            });
        }
    }
    
    opcion_proyectosPorDefecto();
}

// =================================================================================
function opcion_proyectosPorDefecto() {

    const elementos = Array.from(settings.doms.navbar_proyectos);
    const opciones = settings.valores_iniciales.navbar_proyectos;

    for (let i = 0; i < elementos.length; i ++) {
        if (opciones[i][1]) elementos[i].style.backgroundColor = 'var(--color12)';
    }

    settings.doms.iconos_lenguajes.style.transform = 'translateY(-49%) scale(1, 0.0)';
    settings.doms.iconos_lenguajes.style.height = '2em';
}

// =================================================================================
window.onload = () => {

    settings = new Settings();
    recibeInfo_proyectos();
    carga_misLenguajes_imagenes();

    Array.from(settings.doms.navbar_proyectos).forEach(opcion => {

        opcion.addEventListener('click', (ev) => {
            cambiar_pestana_navbarProyectos(ev, opcion);
        });
    });

    Array.from(settings.doms.carets).forEach((caret, index) => {

        caret.addEventListener('click', (ev) => {
            acciones_caretsAbajo(ev, index, caret);
        });
    });

    Array.from(settings.doms.carets_fa).forEach((caret, index) => {
        
        caret.addEventListener('click', (ev) => {
            acciones_caretsAbajo(ev, index, caret);
        });
    });
}

export {settings};
