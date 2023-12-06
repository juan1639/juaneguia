// =================================================================================
const valores_iniciales = {
    pestana_proyectos: [
        ['Proyectos', true],
        ['Youtube', false],
        ['Recursos', false]
    ]
};

const contenedor_proyectos = document.querySelector('.contenedor__proyectos');
const iconos_lenguajes = document.getElementById('iconos__lenguajes');
const navbar_proyectos = document.getElementsByClassName('li__navbar__proyectos');
const carets_abajo = document.getElementsByClassName('caret-abajo');

const ocultos_carets = {
    caret__abajo: [contenedor_proyectos, 'grid'],
    caret__misLenguajes: [iconos_lenguajes, 'flex']
};

export {
    valores_iniciales,
    contenedor_proyectos,
    iconos_lenguajes,
    navbar_proyectos,
    carets_abajo,
    ocultos_carets
};
