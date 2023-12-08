import {
    settings
} from "./main.js";

// =================================================================================
function cambiar_pestana_navbarProyectos(ev, opcion) {

    console.log(ev.target.id);
    const target = ev.target.id;
    const opciones = settings.valores_iniciales.navbar_proyectos;
    const change_contenedor = settings.doms.contenedor_proyectos;
    
    Array.from(settings.doms.navbar_proyectos).forEach(borra => {
        borra.style.backgroundColor = 'transparent';
    });
    
    opcion.style.backgroundColor = 'var(--color12)';

    const contador = actualiza_contador();

    const valores = [
        [[-100, 0], [0, -100], [0, 0]],
        [[-200, 0], [-100, 0], [0, -100]],
        [[0, 0], [0, 100], [0, 200]]
    ];

    let i = -1;
    
    for (let idProyecto of opciones) {

        i ++;
        
        if (idProyecto[0] === target) {
            idProyecto[1] = true;

            const offSetY = i * -50;

            change_contenedor[i].style.transform = `translate(-99%,0%)`;
            // change_contenedor[i].style.transform = `scale(i + 1, 1)`;
            // change_contenedor[i].style.display = 'grid';
        
        } else {
            idProyecto[1] = false;
            change_contenedor[i].style.transform = `translate(-95%, 0%)`;
            // change_contenedor[i].style.display = 'none';
        }

        console.log(idProyecto[0], idProyecto[1]);
    }
}

// =================================================================================
function actualiza_contador() {

    settings.misc.contador ++;
    if (settings.misc.contador >= 3) settings.misc.contador = 0;

    return settings.misc.contador;
}

// =================================================================================
function ver_mas(ev) {
    console.log(ev.target.id, 'ver mas');
}

// =================================================================================
function acciones_caretsAbajo(ev, booleanosContainer) {

    console.log(ev.target.id, 'caret abajo');
    const idCaret = ev.target.id;
    const entriesContainer = Object.entries(ocultos_carets);
    console.log(entriesContainer);

    let contador = -1;

    for (let i of entriesContainer) {

        contador ++;

        if (idCaret === i[0]) {

            const elementoContainer = i[1][0];
            const displayTipo = i[1][1];
            const booleano = i[1][2];

            console.log(booleano, booleanosContainer[contador][1][2]);

            if (!booleano) {
                // elementoContainer.style.display = displayTipo;
                elementoContainer.style.transform = 'translateY(0%) scale(1, 1)';
                booleanosContainer[contador][1][2] = true;
            
            } else {
                // elementoContainer.style.display = 'none';
                elementoContainer.style.transform = 'translateY(-45%) scale(1, 0)';
                // elementoContainer.style.transform = 'scale(1, 0.1)';
                booleanosContainer[contador][1][2] = false;
            }
        }
    }

    return booleanosContainer;
}

export {
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_caretsAbajo
};
