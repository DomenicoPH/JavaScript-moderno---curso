

const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

/* Métodos */

// typeof()
console.log(numero1)
console.log(typeof(numero1))

console.log(numero4)
console.log(typeof(numero4))

// Number.parseInt() && Number.parseFloat()
console.log(numero1)
console.log(numero2)

console.log(Number.parseInt(numero1))

console.log(Number.parseFloat(numero2))
    console.log(typeof(Number.parseFloat(numero2)))

console.log(Number.parseInt(numero2))
    console.log(typeof(Number.parseInt(numero2)))

console.log(Number.parseInt(numero3))


// Number.isInteger()

console.log(Number.isInteger(numero1))
    console.log(Number.isInteger(Number.parseInt(numero1)))
    
console.log(Number.isInteger(numero2))
    console.log(Number.isInteger(Number.parseFloat(numero2)))
    console.log(Number.isInteger(Number.parseInt(numero2)))
    
console.log(Number.isInteger(numero3))
console.log(Number.isInteger(numero4))