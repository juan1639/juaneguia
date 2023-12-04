// =================================================================================
//  Portfolio Juan Eguia
// 
// ---------------------------------------------------------------------------------
const contenedor_proyectos = document.querySelector('.contenedor__proyectos');

const recibeInfo_proyectos = async () => {

    const endpoint = './json/proyectos.json';

    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        console.log(response);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            //funcion para mostrar la informacion
            muestraResultados(jsonResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

// =================================================================================
const muestraResultados = (response) => {

    console.log(response);

    for (let i of response.proyectos) {

        const img = i.imagen;
        const nombre = i.nombre;

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta__proyecto');
        tarjeta.innerHTML = `
            <figure class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover"></figure>
            <div class="contenedor__titulo-tarjeta"><h3>${nombre}</h3></div>
            <button type="button" class="boton__ver-tarjeta">Ver más</button>
        `;
        
        contenedor_proyectos.appendChild(tarjeta);    
    }
}

// =================================================================================
window.onload = () => {

    recibeInfo_proyectos();
}
