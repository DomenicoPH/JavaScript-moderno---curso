// this
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: "${this.nombre}" tiene un precio de: USD ${this.precio}`)
    }
}
const producto2 = {
    nombre: "Tablet 11 pulgadas",
    precio: 200,
    disponible: false,
    mostrarInfo: function(){
        console.log(`El producto: "${this.nombre}" tiene un precio de: USD ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();