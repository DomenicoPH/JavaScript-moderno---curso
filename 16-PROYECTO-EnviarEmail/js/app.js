document.addEventListener('DOMContentLoaded', () => {
    
    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    };

    // inputs
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje'); 
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    // Eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    // Funciones
    function validar(e){

        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email ingresado no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar valores a objeto 'email'
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        // Comprobar el objeto 'email'
        comprobarEmail();
    };


    function mostrarAlerta(mensaje, ref){

        // Comprueba si ya existe una alerta en la referencia y la limpia.
        limpiarAlerta(ref);

        // Genera alerat en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta');

        // Inyecta error en formulario
        ref.appendChild(error);
    };


    function limpiarAlerta(ref){
        const alerta = ref.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
    };


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    };


    function comprobarEmail(){
        console.log(email);
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

});

/*
    Notas:

    ♦ DOMContentLoaded
        Evento. Espera a que todo el DOM se haya cargado antes de correr el código JS.

    ♦ .trim() 
        String method. Limpia espacios en blanco al principio y al fnal de un string.

    ♦ regex
        Expresiones regulares.

    ♦ .test()
        El método .test() es una función en JavaScript utilizada con expresiones regulares (RegExp) para probar si una cadena de texto cumple con un determinado patrón. Este método devuelve un valor booleano: true si la cadena cumple con el patrón y false en caso contrario.
*/