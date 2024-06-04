// Seleccionar elementos por su id

// .getElementById() con id existente
const formulario = document.getElementById('formulario')
console.log(formulario);

        // --> Retorna el elemeneto con el id solicitado

// .getElementById() con id existente
const noExiste = document.getElementById('no-existe');
console.log(noExiste);

        // --> Retorna null

/*
    No debería haber más de un elemento con el mismo id.
    De existir .getElementById() retornará únicamente la
    primera coincidencia.
    Para sleccionar varios elementos con un mismo identificador
    utilizar las clases y .getElementsByClassName()
*/