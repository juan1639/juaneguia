// =================================================================================
export class Settings {

    constructor() {
        
        this.doms = {
            principal: document.getElementById('principal'),
            navbar_proyectos: document.getElementsByClassName('li__navbar__proyectos'),
            contenedores_scroll: document.getElementById('contenedores__scroll'),
            contenedor_proyectos: document.getElementsByClassName('contenedor__proyectos'),
            iconos_lenguajes: document.getElementById('iconos__lenguajes'),
            carets: document.getElementsByClassName('caret-abajo')
        }

        this.valores_iniciales = {
            navbar_proyectos: [
                ['Proyectos', true],
                ['Youtube', false],
                ['Recursos', false]
            ],
            carets: {
                iconos_lenguajes: null,
                contenedor_proyectos: null
            }
        }

        this.misc = {
            contador: -1
        }
    }
}
