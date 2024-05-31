// Iteradores: for in (PARA OBJETOS)

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for(let pendiente in pendientes){
    console.log(pendiente);
}

for(let producto in carrito){
    console.log(producto)
}
// for in aplicado a arreglos retorna el índice de sus elementos...


// for in se utiliza en objetos...
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let prop in automovil){
    console.log(prop)
};

for(let prop in automovil){
    console.log(automovil[prop])
    console.log(`${automovil[prop]}`)
};

for(let prop in automovil){
    console.log(`${prop}: ${automovil[prop]}`)
}


//... Object.entries
for(let[key,value] of Object.entries(automovil) ){
    console.log(key);
    console.log(value);
};

for(let[key,value] of Object.entries(automovil) ){
    console.log(`${key}: ${value}`)
};