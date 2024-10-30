/* Prototypes */

// CLIENTE
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};
const domenico = new Cliente('Domenico', 500);


// Función para mostrar clientes:
function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de $${saldo}`
}
console.log(formatearCliente(domenico));

//-----------------------------------------------------------------------------------------------

// EMPRESA
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const DPA = new Empresa('Domenico Pagano Art', 10000, 'Arte y diseño');
console.log(formatearCliente(DPA));

// Función para mostrar empresas:
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente "${nombre}" en la categoría "${categoria}" cuenta con un saldo de $${saldo}`
}
console.log(formatearEmpresa(DPA));