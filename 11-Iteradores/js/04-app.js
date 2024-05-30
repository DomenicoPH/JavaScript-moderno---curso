// Iteradores: while loop

let i = 0; // Inicializar while

while(i < 10){  // Condición
    
    console.log(`Número ${i}`) // Lógica a ejecutar...

    i++ // incremento
};


// fizzbuzz con while

i = 1; // Inicializar while

while(i <= 100){  // Condición
    
    // Lógica a ejecutar...
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}, fizzbuzz`);
    } else if( i % 3 === 0){
        console.log(`${i}, fizz`)
    } else if( i % 5 === 0){
        console.log(`${i}, buzz`)
    }

    i++ // incremento
};


// Pares e Impares con while
console.log(`---------------\nPares-e-Impares\n---------------`)
i = 0;
while(i <= 100){
    if(i % 2 === 0){
        console.log(`${i}-(Par)`)
    } else if(i % 2 !== 0){
        console.log(`${i}-(Impar)`)
    }
    i++
}