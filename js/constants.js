// =================================================================================
const valores_iniciales = {
    pestana_proyectos: [
        ['Proyectos', true],
        ['Youtube', false],
        ['Recursos', false]
    ]
};

const contenedor_proyectos = document.querySelector('.contenedor__proyectos');
const navbar_proyectos = document.getElementsByClassName('li__navbar__proyectos');

export {
    valores_iniciales,
    contenedor_proyectos,
    navbar_proyectos
}
