/* Prototypes */

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};

// Añadir funciones al prototipo de Cliente
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

Cliente.prototype.consultaSaldo = function(){
    return this.saldo;
}

// Instancias
const pedro = new Cliente('Pedro', 6000);
//console.log(pedro)
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
    
    console.log(pedro.consultaSaldo());
    pedro.retirarSaldo(700);
    console.log(pedro.consultaSaldo());

    console.log(pedro.tipoCliente());
// ------------------------------------------------


const juanito = new Cliente('Juanito', 25000);
//console.log(juanito);
console.log(juanito.tipoCliente());
console.log(juanito.nombreClienteSaldo());
    
    console.log(juanito.consultaSaldo());
    juanito.retirarSaldo(24800);
    console.log(juanito.consultaSaldo());

    console.log(juanito.tipoCliente());
// ------------------------------------------------


const petronio = new Cliente('Petronio', 300);
console.log(petronio);
console.log(petronio.tipoCliente());
console.log(petronio.nombreClienteSaldo());

    console.log(petronio.consultaSaldo());
    petronio.ingresarSaldo(99700)
    console.log(petronio.consultaSaldo());

    console.log(petronio.tipoCliente());
// ------------------------------------------------
