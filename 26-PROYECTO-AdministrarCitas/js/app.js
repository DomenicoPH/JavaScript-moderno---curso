// Selectores
const pacienteInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

// Objeto de Cita
const citaObj = {
    mascota: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

console.log(citaObj);

// EVENTOS
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}