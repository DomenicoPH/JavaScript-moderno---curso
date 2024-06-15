// Eventos (submit)

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log('buscando...')
    console.log(e.target.method);
    console.log(e.target.action);
}