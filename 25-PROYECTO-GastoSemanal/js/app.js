// ----------------------------------------------------------------------Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');    // Formulario para ingresar un gasto
const gastoListado = document.querySelector('#gastos ul');      // Lista donde se guardarán los gastos



// ----------------------------------------------------------------------Eventos
eventListeners();   //ejecución de eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto) // Cuando el DOM esté cargado ejecuta preguntarPresupuesto()
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
}

// ----------------------------------------------------------------------Instanciado
const ui = new UI;
let presupuesto;

// ----------------------------------------------------------------------Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');  // Pregunta presupuesto y asigna el valor a 'presupuestoUsuario'
    
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){  // Si el presupuesto es igual a: un string vacio, null, NaN, o si es <= 0...
        window.location.reload();   // ...recarga la página.
    }

    // Presupuesto válido:
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto)
};