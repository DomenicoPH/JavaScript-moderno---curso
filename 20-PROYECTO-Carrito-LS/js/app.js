// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


/* Evento de agregar producto al carrito utilizando la función agregarCurso(). */
cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    } )
};

/* Funciones */

// Agrega curso al carrito.
function agregarCurso(e){
    e.preventDefault();
    /*   Aseguramos que el usuario haya hecho click en el elemento con 
         la clase 'agregar-carrito' y cargamos en una variable todo el
         contenido de la Card usando .parentElement.parentElement. */
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e){
    //console.log(e.target)
    if(e.target.classList.contains('borrar-curso')){
        //console.log(e.target.getAttribute('data-id'))
        const cursoId = e.target.getAttribute('data-id');

        //Elimina el arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        
        carritoHTML(); // iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso.
function leerDatosCurso(curso){
    //console.log(curso)
    //console.log(`Has seleccionado el curso número ${curso.querySelector('a').getAttribute('data-id')} de la lista.`)

    /* Creamos un objeto con el contenido del curso actual.*/
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Revisa si un elemento ya existe en el carrito
    const existe =  articulosCarrito.some( curso => curso.id === infoCurso.id );
    //console.log(existe);

    if(existe){
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        /* Agregamos los artículos al carrito */
        articulosCarrito = [...articulosCarrito, infoCurso];
        //console.log(articulosCarrito);
    }

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
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" alt="imagen curso" width="150">
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
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