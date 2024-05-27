// Añadir elemento un un array...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
console.table(meses);
    console.log(meses);

meses[0] = 'Primer mes';
meses[meses.length-1] = 'Último mes';
meses[11] = 'Diciembre';
console.table(meses);
    console.log(meses);