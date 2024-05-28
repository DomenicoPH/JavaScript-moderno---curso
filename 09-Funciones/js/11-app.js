const aprendiendo = function(lenguaje='un lenguaje de programación', lenguaje2){
    return `Aprendiendo ${lenguaje} y ${lenguaje2}.`;
};

const aprendiendo2 = (lenguaje='un lenguaje de programación', lenguaje2) => `Aprendiendo ${lenguaje} y ${lenguaje2}.`;

console.log(aprendiendo('JavaScript','NodeJS'));
console.log(aprendiendo2('HTML','CSS'));