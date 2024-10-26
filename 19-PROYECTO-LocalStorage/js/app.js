// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// EventListeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}

// Funciones:

// Agregar tweet -->
function agregarTweet(e){
    e.preventDefault();
    
    // Textarea : Area en la que el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    // Validación:
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; // Detiene el código
    }
    console.log(tweet);
};

// Mostrar mensaje de error -->
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar Mensaje de error en el contenido:
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Timming...
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}