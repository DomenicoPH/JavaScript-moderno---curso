
// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

function UI(){

};

// --------------------------------------------------------------

// User Interface

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear() - 4;
    const min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    
    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    };

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado')); //.insertBefore( nuevo nodo, nodo de referencia )

    // eliminar mensaje después de 3 segundos
    setTimeout(() => { div.remove() }, 3000);
    
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

eventListeners();
// Función generadora de 'Event Listeners'
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

// FUNCIONES //

// Función Botón formulario 'Cotizar Seguro'
function cotizarSeguro(e){
    e.preventDefault();

    // LEER la marca seleccionada:
    const marca = document.querySelector('#marca').value;
    // LEER el año seleccionado:
    const year = document.querySelector('#year').value
    // LEER el tipo de cobertura:
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    // Verificar si alguno de los campos está vacio y mostrar mensaje de error
    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    // Si no, mostrar mensaje correcto 'Cotiando...'
    ui.mostrarMensaje('Cotizando...', 'exito');

    // Instanciar el seguro

    // Utilizar el prototype que se va a cotizar
}