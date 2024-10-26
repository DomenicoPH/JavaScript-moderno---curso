// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// EventListeners
eventListeners();

function eventListeners(){
    // ...cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // ...cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })
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

    const tweetObj = {
        id: Date.now(),
        //tweet: tweet,
        tweet,
    }

    // Añadir al arreglo de Tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    // Crear HTML para mostrar los tweets...
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();

}; //---------------------------------------------------------AGREGAR TWEET

// Mostrar mensaje de error -->
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar Mensaje de error en el contenido:
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Timming... elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}; //---------------------------------------------------------MENSAJE ERROR

// Muestra un listado de los tweets
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( (tweet) => {

            // Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            
            // Crear HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;
            // Asignar el botón
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        } )
    }

    sincronizarStorage();
}; //---------------------------------------------------------CREAR HTML

// Agrega los Tweets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
} //---------------------------------------------------------GUARDA EN LOCAL-STORAGE

// Eliminar un tweet
function borrarTweet(id){
    //console.log('borrando...', id)
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
} //---------------------------------------------------------BORRAR TWEET

// Limpiar HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}; //---------------------------------------------------------LIMPIAR HTML