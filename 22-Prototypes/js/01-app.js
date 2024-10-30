/* Prototypes */

// Ex. 1 - 'Object Literal - objeto literal'
const cliente = {
    nombre: 'Domenico',
    saldo: 500
};
console.log(cliente);

// Ex. 2 - 'Object Constructor - constructor de objetos'
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.saludo = () => `Hola, mi nombre es ${this.nombre}.`
};
const domenico = new Cliente('Domenico', 500);
console.log(domenico);
console.log(domenico.saludo());
