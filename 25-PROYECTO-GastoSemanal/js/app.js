// ----------------------------------------------------------------------Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');    // Formulario para ingresar un gasto
const gastoListado = document.querySelector('#gastos ul');      // Lista donde se guardarán los gastos



// ----------------------------------------------------------------------Eventos
eventListeners();   //ejecución de eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto) // Cuando el DOM esté cargado ejecuta preguntarPresupuesto()

    formulario.addEventListener('submit', agregarGasto);    // SUBMIT del formulario: ejecuta función agregar Gasto
};



// ----------------------------------------------------------------------Clases

// CLASS Presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
};

// CLASS User Interface
class UI{
    insertarPresupuesto(cantidad){
        // recibe cantidad = objeto 'presupuesto' completo. desestructurar esn sus props. presupuesto y restante.
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');   // crea un div
        divMensaje.classList.add('text-center', 'alert');   // asigna clases asociadas a estilos

        // validación del tipo de mensaje:
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // mensaje:
        divMensaje.textContent = mensaje;

        // Insertar HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario);

        // Quitar el mensaje X seg. después
        setTimeout( () => {
            divMensaje.remove();
        }, 3000)
    }
}

// ----------------------------------------------------------------------Instanciado
const ui = new UI;
let presupuesto;

// ----------------------------------------------------------------------Funciones

/* Preguntar presupuesto */
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');  // Pregunta presupuesto y asigna el valor a 'presupuestoUsuario'
    
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){  // Si el presupuesto es igual a: un string vacio, null, NaN, o si es <= 0...
        window.location.reload();   // ...recarga la página.
    }

    // Presupuesto válido:
    presupuesto = new Presupuesto(presupuestoUsuario);
    /*BORRAR*/console.log('X --- OBJETO "presupuesto": --- X\n', presupuesto, '\nX --- TEMPORAL: BORRAR --- X');

    ui.insertarPresupuesto(presupuesto)
};

/* Agregar gastos */
function agregarGasto(e){
    e.preventDefault();

    // leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // validar
    if(nombre === '' || cantidad === ''){
        
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');   // ui.imprimirAlerta recibe dos parámetros: mensaje y tipo 
        return;

    } else if(cantidad <= 0 || isNaN(cantidad)){
        
        ui.imprimirAlerta('La cantidad ingresada no es válida', 'error');
        return;
    }

    console.log('gasto agregado')
}