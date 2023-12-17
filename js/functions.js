import {
    settings
} from "./main.js";

// =================================================================================
function carga_misLenguajes_imagenes() {

    for (let i = 0; i < settings.mis_lenguajesImg.length; i ++) {

        const archivoImg = settings.mis_lenguajesImg[i];

        const lenguajeImg = document.createElement('img');
        lenguajeImg.setAttribute('class', 'iconos-lenguajes');
        lenguajeImg.src = archivoImg;

        settings.doms.iconos_lenguajesContainer.appendChild(lenguajeImg);
    }
}

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
    
    const target = ev.target.id;
    console.log(target, 'ver mas');

    if (target === '#') console.log('####');
}

// =================================================================================
function acciones_caretsAbajo(ev, index, caret) {

    
    console.log(ev.target.id, 'caret abajo');
    const idCaret = ev.target.id;

    console.log(caret.className);

    let tipoCaret ='carets';

    if (caret.className === 'fa fa-caret-down') {
        tipoCaret = 'carets_fa';
        caret.className = 'fa fa-caret-up';

    } else if (caret.className === 'fa fa-caret-up') {
        tipoCaret = 'carets_fa';
        caret.className = 'fa fa-caret-down';
    }

    if (caret.className === 'caret-abajo') tipoCaret = 'carets';

    const elemento = settings.valores_iniciales[tipoCaret][index][0];
    let booleano = settings.valores_iniciales[tipoCaret][index][1];

    const translY = settings.valores_iniciales[tipoCaret][index][2];
    const scaleY = settings.valores_iniciales[tipoCaret][index][3];
    const height = settings.valores_iniciales[tipoCaret][index][4];

    const translY2 = settings.valores_iniciales[tipoCaret][index][5];
    const scaleY2 = settings.valores_iniciales[tipoCaret][index][6];
    const height2 = settings.valores_iniciales[tipoCaret][index][7];

    console.log(booleano);

    if (booleano) {
        settings.doms[elemento].style.transform = `translateY(${translY}) scale(1, ${scaleY})`;
        settings.doms[elemento].style.height = height;
        settings.valores_iniciales[tipoCaret][index][1] = false;
        
        
    } else {
        settings.doms[elemento].style.transform = `translateY(${translY2}) scale(1, ${scaleY2})`;
        settings.doms[elemento].style.height = height2;
        settings.valores_iniciales[tipoCaret][index][1] = true;
    }
}

export {
    carga_misLenguajes_imagenes,
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_caretsAbajo
};
