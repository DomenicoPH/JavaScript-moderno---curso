// Eliminar elementos del DOM

const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
console.log(primerEnlace.innerText);

const segundoEnlace = primerEnlace.nextElementSibling;
console.log(segundoEnlace);
console.log(segundoEnlace.innerText);

const tercerEnlace = primerEnlace.nextElementSibling.nextElementSibling;
console.log(tercerEnlace);
console.log(tercerEnlace.innerText);

const cuartoEnlace = primerEnlace.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(cuartoEnlace);
console.log(cuartoEnlace.innerText);


// remove()


//primerEnlace.remove();
//segundoEnlace.remove();
//tercerEnlace.remove();
//cuartoEnlace.remove();


// Eliminar desde el padre..
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.children);
    console.log(navegacion.children[0].innerText)
    console.log(navegacion.children[1].innerText)
    console.log(navegacion.children[2].innerText)
    console.log(navegacion.children[3].innerText)

    //Eliminando desde el padre:
    //navegacion.removeChild(navegacion.children[0])
    //navegacion.removeChild(navegacion.children[0])
    //navegacion.removeChild(navegacion.children[0])
    //navegacion.removeChild(navegacion.children[0])