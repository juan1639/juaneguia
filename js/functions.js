import {
    navbar_proyectos,
    valores_iniciales
} from "./constants.js";

// =================================================================================
Array.from(navbar_proyectos).forEach(opcion => {

    opcion.addEventListener('click', (ev) => {
        cambiar_pestana(ev, opcion);
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

export {
    cambiar_pestana,
    ver_mas
}
