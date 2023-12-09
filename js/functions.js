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

    let i = -1;
    
    for (let idProyecto of opciones) {

        i ++;
        
        if (idProyecto[0] === target) {
            idProyecto[1] = true;

            let margenLeft = -(i * 100);
            margenLeft = margenLeft.toString();

            settings.doms.contenedores_scroll.style.marginLeft = margenLeft + '%';
        
        } else {
            idProyecto[1] = false;
        }

        console.log(idProyecto[0], idProyecto[1]);
    }
}

// =================================================================================
function ver_mas(ev) {
    console.log(ev.target.id, 'ver mas');
}

// =================================================================================
function acciones_caretsAbajo(ev, index, caret) {

    console.log(ev.target.id, 'caret abajo');
    const idCaret = ev.target.id;

    const elemento = settings.valores_iniciales.carets[index][0];
    let booleano = settings.valores_iniciales.carets[index][1];

    const translY = settings.valores_iniciales.carets[index][2];
    const scaleY = settings.valores_iniciales.carets[index][3];
    const height = settings.valores_iniciales.carets[index][4];

    const translY2 = settings.valores_iniciales.carets[index][5];
    const scaleY2 = settings.valores_iniciales.carets[index][6];
    const height2 = settings.valores_iniciales.carets[index][7];

    console.log(booleano);

    if (booleano) {
        settings.doms[elemento].style.transform = `translateY(${translY}) scale(1, ${scaleY})`;
        settings.doms[elemento].style.height = height;
        settings.valores_iniciales.carets[index][1] = false;
        
    } else {
        settings.doms[elemento].style.transform = `translateY(${translY2}) scale(1, ${scaleY2})`;
        settings.doms[elemento].style.height = height2;
        settings.valores_iniciales.carets[index][1] = true;
    }
}

export {
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_caretsAbajo
};
