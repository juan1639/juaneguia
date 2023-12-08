// =================================================================================
//  Portfolio Juan Eguia
// 
// =================================================================================
import { Settings } from './constants.js';

import {
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_caretsAbajo
} from "./functions.js";

let settings;


// =================================================================================
//  Eventos (Click...)
// ---------------------------------------------------------------------------------


/* Array.from(carets_abajo).forEach(caret => {

    caret.addEventListener('click', (ev) => {
        booleanosContainer = acciones_caretsAbajo(ev, booleanosContainer);
    });
}); */

// =================================================================================
//  Fetching info tarjetas proyectos
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

    for (let i of response.proyectos) {

        const url = i.url;
        const ghURL = i.githubURL;
        const img = i.imagen;
        const nombre = i.nombre;

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta__proyecto');
        tarjeta.innerHTML = `
            <figure class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover"></figure>
            <div class="contenedor__titulo-tarjeta"><h3>${nombre}</h3></div>
            <button type="button" class="boton__ver-tarjeta" id=${url}>Ver más</button>
        `;
        
        settings.doms.contenedor_proyectos[0].appendChild(tarjeta);
        
        tarjeta.addEventListener('click', (ev) => {
            ver_mas(ev);
        });
    }

    for (let i of response.proyectos) {

        const url2 = i.url;
        const ghURL = i.githubURL;
        const img2 = i.imagen;
        const nombre2 = i.nombre;

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta__proyecto');
        tarjeta.innerHTML = `
            <figure class="contenedor__imagen-tarjeta" style="background:url(${img2}); background-size:cover"></figure>
            <div class="contenedor__titulo-tarjeta"><h3>${nombre2}</h3></div>
            <button type="button" class="boton__ver-tarjeta" id=${url2}>Ver más</button>
        `;
        
        settings.doms.contenedor_proyectos[1].appendChild(tarjeta);

        tarjeta.addEventListener('click', (ev) => {
            ver_mas(ev);
        });
    }

    for (let i of response.proyectos) {

        const url3 = i.url;
        const ghURL = i.githubURL;
        const img3 = i.imagen;
        const nombre3 = i.nombre;

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta__proyecto');
        tarjeta.innerHTML = `
            <figure class="contenedor__imagen-tarjeta" style="background:url(${img3}); background-size:cover"></figure>
            <div class="contenedor__titulo-tarjeta"><h3>${nombre3}</h3></div>
            <button type="button" class="boton__ver-tarjeta" id=${url3}>Ver más</button>
        `;
        
        settings.doms.contenedor_proyectos[2].appendChild(tarjeta);

        tarjeta.addEventListener('click', (ev) => {
            ver_mas(ev);
        });
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
}

// =================================================================================
window.onload = () => {

    settings = new Settings();
    recibeInfo_proyectos();

    Array.from(settings.doms.navbar_proyectos).forEach(opcion => {

        opcion.addEventListener('click', (ev) => {
            cambiar_pestana_navbarProyectos(ev, opcion);
        });
    });
}

export {settings};
