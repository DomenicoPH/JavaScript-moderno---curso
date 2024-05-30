// Iteradores: Fizz Buzz

/*
    Si un número es = a 3 o múltiplo de 3 (3, 6, 9, 12)... Imprimimos: fizz
    Si un número es = a 5 o múltiplo de 5 (5, 10, 15, 20)... Imprimimos: buzz
    Si un número es múltiplo de 3 y 5 (15, 30, 45)... Imprimimos: fizzbuzz!
*/

for(let i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}, fizzbuzz`);
    } else if( i % 3 === 0){
        console.log(`${i}, fizz`)
    } else if( i % 5 === 0){
        console.log(`${i}, buzz`)
    }
}