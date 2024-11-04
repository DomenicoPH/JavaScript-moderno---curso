/* Clases en JS - POO */

class Cliente {

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // static = pertenece a la clase, NO a las instancias
    static bienvenida(){
        return `Bienvenido al Cajero`
    }
    
    mostrarInformacion(){
        return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`
    }    

};

const domenico = new Cliente('Domenico', 500);
console.log(domenico);
//console.log(domenico.#nombre);  // Error: nombre es una propiedad privada
console.log(domenico.mostrarInformacion());


// *** //


class Cliente2 {
    #nombre;
    setNombre(nombre){
        this.#nombre = nombre;
    };
    getNombre(){
        return this.#nombre;
    };
};

const juan = new Cliente2();
juan.setNombre('Juanito');

console.log(juan);
//console.log(juan.#nombre);    // Error: no se puede acceder a #nombre porque es una propiedad privada.
console.log(juan.getNombre());
