/* Prototypes */

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};

// Funciones del prototipo:
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold'
    } else if(this.saldo > 5000){
        tipo = 'Platinum'
    } else {
        tipo = 'Standard'
    }
    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.ingresarSaldo = function(monto){
    this.saldo += monto;
}

Cliente.prototype.retirarSaldo = function(monto){
    this.saldo -= monto;
}



//... no hereda
function Persona_A(nombre, saldo, telefono){
    this.nombre = nombre;
    this.saldo = saldo;
    this.telefono = telefono;
}

const domenico = new Persona_A('Domenico Pagano', 5000, '999444333');
console.log(domenico);



//... hereda de Cliente
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);  // 'Cliente' llama a las propiedades 'nombre' y 'saldo' de su prototipo. 'Persona' las hereda.
    this.telefono = telefono;
}
//... heredando las funciones y el constructor desde 'Cliente'
Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;



const juan = new Persona('Juan Pérez', 8000, '777222173');
console.log(juan);

console.log(juan.nombreClienteSaldo());

const dom = new Persona('Domenico Pagano', 11000, '999444333');
console.log(dom.nombreClienteSaldo());



//...
Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de ${this.nombre} es: ${this.telefono}`;
};

console.log(juan.mostrarTelefono());
console.log(dom.mostrarTelefono());