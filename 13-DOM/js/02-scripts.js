// Seleccionar elementos por su clase

// .getElementsByClassName() con clases únicas
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

        // --> Retornan un array con un índice único que corresponde al elemento con la clase solicitada.

// .getElementsByClassName() con clases repetidas
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

        // --> Retornan un array con todos los elementos que posean la clase solicitada.

// .getElementsByClassName() con clases inexistentes
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

        // --> Retorna un array vacio.