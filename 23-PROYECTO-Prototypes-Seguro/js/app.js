
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

// Función Botón formulario 'Cotizar Seguro'
function cotizarSeguro(e){
    e.preventDefault();

    // LEER la marca seleccionada:
    const marca = document.querySelector('#marca').value;
    // LEER el año seleccionado:
    const year = document.querySelector('#year').value
    // LEER el tipo de cobertura:
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){
        console.log('No pasó la validación');
    } else {
        console.log('Si pasó la validación');
        selecciona();
        
    }
}

const selecciona = () => {
            
    let elegido;
    if(marca === '1'){
        elegido = 'Americando'
        console.log(`${elegido} - ${year} - ${tipo}`)
    } else if (marca === '2'){
        elegido = 'Asiatico'
        console.log(`${elegido} - ${year} - ${tipo}`)
    } else if (marca === '3'){
        elegido = 'Europeo'
        console.log(`${elegido} - ${year} - ${tipo}`)
    }

}