/* Clases en JS - POO */

// Class Expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }
};

console.log(Cliente2.bienvenida());

const juan2 = new Cliente2('juan Dos', 600);
console.log(juan2);
console.log(juan2.mostrarInformacion());