/* Clases en JS - POO */

// Herencia
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

const dom = new Cliente('Domenico Pagano', 500);
console.log(Cliente.bienvenida());
console.log(dom.mostrarInformacion());
console.log('\n ---');


// Herencia: La Class Empresa se crea a partir de la Class Cliente, por lo que hereda su estructura y propiedades.
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribiendo método 'bienvenida'
    static bienvenida(){
        return `Bienvenido al Cajero de Empresas`
    }
    // Reescribiendo método 'mostrarInformación'
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - teléfono: ${this.telefono} - Saldo: ${this.saldo} - Categoría: ${this.categoria}`
    }
}

console.log(Empresa.bienvenida());

const juan = new Cliente('juan Uno', 400);
console.log(juan.mostrarInformacion());

const juanEmpresa = new Empresa('La empresa de Juan', 2000, '444-9595', 'Programación');
console.log(juanEmpresa.mostrarInformacion());
