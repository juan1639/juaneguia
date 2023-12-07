import {
    valores_iniciales,
    contenedor_proyectos,
    iconos_lenguajes,
    navbar_proyectos,
    carets_abajo,
    ocultos_carets
} from "./constants.js";

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
        
        if (i[0] === target) {i[1] = true;} else {i[1] = false;}
        
        console.log(i[0], i[1]);
    }
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
    cambiar_pestana,
    ver_mas,
    acciones_caretsAbajo
};
