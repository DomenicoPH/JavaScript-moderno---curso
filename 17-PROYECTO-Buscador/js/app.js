// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 14;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar
    llenarSelect(); // Llena las opciones de años
});


// Event Listener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => datosBusqueda.year = e.target.value);
minimo.addEventListener('change', e => datosBusqueda.minimo = e.target.value);
maximo.addEventListener('change', e => datosBusqueda.maximo = e.target.value);
puertas.addEventListener('change', e => datosBusqueda.puertas = e.target.value);
transmision.addEventListener('change', e => datosBusqueda.transmision = e.target.value);
color.addEventListener('change', e => datosBusqueda.color = e.target.value);


// Funciones
function mostrarAutos(){
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: USD ${precio} - Color: ${color}
        `;

        // insertar en html
        resultado.appendChild(autoHTML)
    })
} // ---> Muestra los autos al cargar

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = 1;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega los años al select
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);
    console.log(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca
    }
    return auto;
}