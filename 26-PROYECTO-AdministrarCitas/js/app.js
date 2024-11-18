/* Selectores */
//inputs.........................................................
const pacienteInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
//formulario.....................................................
const formulario = document.querySelector('#formulario-cita');

// Objeto de Cita
const citaObj = {
    mascota: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

console.log(citaObj);

/* EVENTOS */
// Eventos de los INPUTS................................
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
// Eventos del FORMULARIO...............................
formulario.addEventListener('submit', submitCita);


/* FUNCIONES */
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

function submitCita(e){
    e.preventDefault();
    console.log('submitiendo pe...')
}