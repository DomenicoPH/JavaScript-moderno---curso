document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    // Función validadora
    function validar(e){
        
        //console.log(e.target.parentElement)

        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return
        };

        limpiarAlerta(e.target.parentElement);
    }

    // Función alerta
    function mostrarAlerta(mensaje, referencia){
        
        // Comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar Alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'error')
        
        // Inyectar el error al formulario:
        referencia.appendChild(error)
    }

    // Función limpiarAlerta
    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.error');
        if(alerta){
            alerta.remove();
        }
    }
    
})