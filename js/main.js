// =================================================================================
//  Portfolio Juan Eguia
// 
// =================================================================================
import {
    valores_iniciales,
    contenedor_proyectos,
    navbar_proyectos
} from "./constants.js";

import {
    cambiar_pestana,
    ver_mas
} from "./functions.js";

// =================================================================================
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

// =================================================================================
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
        
        contenedor_proyectos.appendChild(tarjeta);
        
        tarjeta.addEventListener('click', (ev) => {
            ver_mas(ev);
        });
    }

    opcion_proyectosPorDefecto();
}

// =================================================================================
function opcion_proyectosPorDefecto() {

    const elementos = Array.from(navbar_proyectos);
    const opciones = valores_iniciales.pestana_proyectos;

    for (let i = 0; i < elementos.length; i ++) {
        if (opciones[i][1]) elementos[i].style.backgroundColor = 'var(--color12)';
    }
}

// =================================================================================
window.onload = () => {

    recibeInfo_proyectos();
}
