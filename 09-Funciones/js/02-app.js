/* Funciones */

// 1. Declaración de función (function declaration)
// Pueden ejecutarse antes de la declaración (hoisting)
sumar()
function sumar(){
    console.log( 2 + 2 )
}

// 2. Expresión de función (Function Expression)
// No pueden ejecutarse antes de la declaración (hoisting)
sumar2()
const sumar2 = function(){
    console.log( 3 + 3 )
}
