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