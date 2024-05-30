// Iteradores: do while loop

let i = 0; // Inicio

do {
    // Lógica a ejecutar
    console.log(`Número ${i}`)

    i++ // Incremento

} while (i < 10); // Condición


//... do while SIEMPRE ejecuta su lógica la primera vez...

i = 0; // Inicio

do {
    // Lógica a ejecutar
    console.log(`Número ${i}`)

    i++ // Incremento

} while (i > 10); // Condición


// fizzbuzz con do...while...

i = 1;
do {

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}, fizzbuzz`);
    } else if( i % 3 === 0){
        console.log(`${i}, fizz`)
    } else if( i % 5 === 0){
        console.log(`${i}, buzz`)
    }

    i++

} while (i < 100);