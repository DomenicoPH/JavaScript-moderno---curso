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

    // Métodos:
    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
            //console.log('GASTOS: ', this.gastos);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
            //console.log(this.restante)
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
            //console.log(this.gastos)
    }
};

// CLASS User Interface
class UI{

    // Métodos:
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

    mostrarGastos(gastos){

        this.limpiarHTML();
        
        // iterar sobre los gastos
        gastos.forEach( gasto => {
            const {cantidad, nombre, id} = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            //nuevoGasto.setAttribute('data-id', id); // *Esta línea hace lo mismo que la de abajo.*
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => { eliminarGasto(id) }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        /*
            ♦ Comprueba que el restante sea menos del 25% y del 50% para modificar las clases y cambiar la apariencia del div .restante.
            ♦ También verifica si el presupuesto se ha agotado y bloquea el botón de agregar.
        */
        const {presupuesto, restante} = presupuestoObj

        const restanteDiv = document.querySelector('.restante');

        // comprobacion del 25%
        if( (presupuesto / 4) > restante ){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
            //console.log('gastaste el 75% (!)')
        } else if ((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
            //console.log('gastaste el 50% (!)')
        }

        // si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
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
    const cantidad = Number(document.querySelector('#cantidad').value);

    // validación -- [
    if(nombre === '' || cantidad === ''){
        
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');   // ui.imprimirAlerta recibe dos parámetros: mensaje y tipo 
        return;

    } else if(cantidad <= 0 || isNaN(cantidad)){
        
        ui.imprimirAlerta('La cantidad ingresada no es válida', 'error');
        return;
    }
    // validación -- ]

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }
    presupuesto.nuevoGasto(gasto);

    // imprime alerta: gasto añadido correctamente
    ui.imprimirAlerta('Gasto añadido', 'success');

    // imprime el gasto:
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    // reinicia el formulario
    formulario.reset(presupuesto);
}

/* Eliminar Gasto */
function eliminarGasto(id){
    presupuesto.eliminarGasto(id);              // Usa el método eliminarGasto de presupuesto para borrar un gasto en función de su ID
    
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);                   // actualiza la lista de gastos en el HTML
    ui.actualizarRestante(restante);            // actualiza el restante
    ui.comprobarPresupuesto(presupuesto);       // comprueba el estado del presupuesto para hacer los cambios visuales necesarios en el HTML
}