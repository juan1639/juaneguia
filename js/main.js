// =================================================================================
//  Portfolio Juan Eguia
// 
// ---------------------------------------------------------------------------------
const valores_iniciales = {
    pestana_proyectos: [
        ['Proyectos', true],
        ['Youtube', false],
        ['Recursos', false]
    ]
};

const navbar_proyectos = document.getElementsByClassName('li__navbar__proyectos');

Array.from(navbar_proyectos).forEach(opcion => {

    opcion.addEventListener('click', (ev) => {
        cambiar_pestana(ev, opcion);
    });
});

const contenedor_proyectos = document.querySelector('.contenedor__proyectos');

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

        const img = i.imagen;
        const nombre = i.nombre;

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta__proyecto');
        tarjeta.innerHTML = `
            <figure class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover"></figure>
            <div class="contenedor__titulo-tarjeta"><h3>${nombre}</h3></div>
            <button type="button" class="boton__ver-tarjeta">Ver más</button>
        `;
        
        contenedor_proyectos.appendChild(tarjeta);    
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
function cambiar_pestana(ev, opcion) {

    console.log(ev.target.id);
    const target = ev.target.id;
    const opciones = valores_iniciales.pestana_proyectos;

    Array.from(navbar_proyectos).forEach(borra => {
        borra.style.backgroundColor = 'transparent';
    });

    opcion.style.backgroundColor = 'var(--color12)';

    for (let i of opciones) {
        
        if (i[0] === target) {
            i[1] = true;
            
        } else {
            i[1] = false;
        }

        console.log(i[0], i[1]);
    }
}

// =================================================================================
window.onload = () => {

    recibeInfo_proyectos();
}
