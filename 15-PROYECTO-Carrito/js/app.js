// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


/* 1. Evento de agregar producto al carrito utilizando la función agregarCurso(). */

cargarEventListeners();
function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso)
};

/* Funciones */

// Agrega curso al carrito.
function agregarCurso(e){
    e.preventDefault();

    /* 2. Aseguramos que el usuario haya hecho click en el elemento con 
         la clase 'agregar-carrito' y cargamos en una variable todo el
         contenido de la Card usando .parentElement.parentElement. */
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso.
function leerDatosCurso(curso){
    //console.log(curso)
    //console.log(`Has seleccionado el curso número ${curso.querySelector('a').getAttribute('data-id')} de la lista.`)

    /* 3. Creamos un objeto con el contenido del curso actual.*/
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    /* 4. Agregamos los artículos al carrito */
    articulosCarrito = [...articulosCarrito, infoCurso];
    
    console.log(articulosCarrito);

    /* 5. Imprimimos el HTML */
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    /* Limpia el HTML previo (borrar el html existente 
       antes de insertar información actualizada del 
       carrito) */

    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    }) 
}

// Elimina los cursos del tbody
function limpiarHTML(){

    /* Limpieza lenta 
    contenedorCarrito.innerHTML = '';
    */

    // Limpieza optimizada
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}