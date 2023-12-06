import {
    navbar_proyectos,
    valores_iniciales,
    carets_abajo,
    contenedor_proyectos,
    iconos_lenguajes,
    ocultos_carets
} from "./constants.js";

// =================================================================================
Array.from(navbar_proyectos).forEach(opcion => {

    opcion.addEventListener('click', (ev) => {
        cambiar_pestana(ev, opcion);
    });
});

Array.from(carets_abajo).forEach(caret => {

    caret.addEventListener('click', (ev) => {
        acciones_caretsAbajo(ev);
    });
});

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
function acciones_caretsAbajo(ev) {

    console.log(ev.target.id, 'caret abajo');
    const idCaret = ev.target.id;
    const entriesContainer = Object.entries(ocultos_carets);
    console.log(entriesContainer);

    for (let i of entriesContainer) {
        if (idCaret === i[0]) {

            const elementoContainer = i[1][0];
            const displayTipo = i[1][1];

            if (elementoContainer.style.display === 'none') {
                elementoContainer.style.display = displayTipo;

            } else {
                elementoContainer.style.display = 'none';
            }
        }
    }
}

export {
    cambiar_pestana,
    ver_mas,
    acciones_caretsAbajo
};
