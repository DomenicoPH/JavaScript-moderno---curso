/* Clases en JS - POO */


// Class Declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // static = pertenece a la clase, NO a las instancias
    static bienvenida(){
        return `Bienvenido al Cajero`
    }
    
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }

    

}

console.log( Cliente.bienvenida() );

const juan = new Cliente('juan Uno', 400);
console.log(juan);
console.log(juan.mostrarInformacion());



// Class Expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }
};

const juan2 = new Cliente2('juan Dos', 600);
console.log(juan2);
console.log(juan2.mostrarInformacion());