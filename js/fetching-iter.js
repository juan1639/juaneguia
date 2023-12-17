
// =============================================================================
function crearElementos_fetchingJson(i, contador, opcionIndex) {

    const url = i.url;
    const ghURL = i.githubURL;
    const img = i.imagen;
    const nombre = i.nombre;
    const descripcion = i.descripcion;
    const blank = '_blank';

    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta__proyecto');
    tarjeta.style.zIndex = contador.toString();

    if (opcionIndex === 0) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Jugar</a>
        `;
    
    } else if (opcionIndex === 1) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__youtube-tarjeta" id=${url} href=${url} target=${blank}>
            <span id="youtube__triangulo"></span>
            </a>
        `;
    
    } else if (opcionIndex === 2) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Ver más</a>
        `;
    }

    return tarjeta;
}

export { crearElementos_fetchingJson };
