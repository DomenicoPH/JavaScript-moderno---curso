// .concat()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// .concat(x) con un elemento...
let todosLosMeses = meses.concat(meses2);
console.log(todosLosMeses);


//...
const m1 = ['Enero', 'Febrero', 'Marzo'];
const m2 = ['Abril', 'Mayo', 'Junio'];
const m3 = ['Julio', 'Agosto', 'Septiembre'];
const m4 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat(x,y,z) con varios elementos...
let mAll = m1.concat(m2,m3,m4)
console.log(mAll)

// .concat(x.concat(y.concat(z))) con varios elementos anidados...
mAll = m1.concat(m2.concat(m3.concat(m4)))
console.log(mAll)


// Concatenar con spread operator...
const mesesSpreadOp_A = [...meses, ...meses2];
console.log(mesesSpreadOp_A);

const mesesSpreadOp_B = [...m1, ...m2, ...m3, ...m4];
console.log(mesesSpreadOp_B);

//...
const monthBlock1 = ['jan', 'feb', 'mar'];
const monthBlock2 = ['apr', 'may', 'jun'];
const monthBlock3 = ['jul', 'aug', 'sep'];

const monthBlockFull = [...monthBlock1, ...monthBlock2, ...monthBlock3, 'oct', 'nov', 'dec'];
console.log(monthBlockFull)

// El orden importa en el spread operator...
const primerMes = 'Enero';
const SegundoMes = 'Febrero';
const TercerMes = 'Marzo';

const alDerecho = [primerMes, SegundoMes, TercerMes];
const alReves = [TercerMes, SegundoMes, primerMes];
console.log(alDerecho);
console.log(alReves);

// spread operator
let unString = 'Esto es un string';
console.log([...unString])
let unArray = ['esto', 'es', 'un', 'array'];
console.log([...unArray])

