// Operadores - Comparación de dos valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

console.log(`La variables numero1 (${numero1}) es de tipo ${typeof(numero1)}`)
console.log(`La variables numero2 (${numero2}) es de tipo ${typeof(numero2)}`)

// Operador de igualdad (==) y de igualdad estricta (===)
/* == */
console.log(numero1 == numero3);
console.log(numero1 == numero2);
    // 20 es ==(igual) a "20"

/* === */
console.log(numero1 === numero3);
console.log(numero1 === numero2);
    // 20 no es ===(estrictamente igual) a "20"

// Operador de desigualdad (!=) y de desigualdad estricta (!==)
const password1 = "admin";
const password2 = "Admin";
const passwordRef = 'admin';

console.log(password1)
console.log(password2)
console.log(password1 != password2)

console.log(numero1 != numero2);
console.log(numero1 !== numero2);