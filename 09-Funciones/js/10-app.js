const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
};

const aprendiendoArrow = () => console.log('Aprendiendo sobre las Arrow functions en JavaScript')

//Ejecución:
aprendiendo();
aprendiendoArrow();

//...

function sumar(a,b){
    return a + b;
};
console.log(sumar(5,7));

const sumarArrow = (a,b) => a + b;
console.log(sumarArrow(5,7));