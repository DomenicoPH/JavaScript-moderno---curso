// Object.keys() Object.values() Object.entries()
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Object.keys()
console.log(Object.keys(producto));
const keys = Object.keys(producto);
    console.log(keys[0])
    console.log(keys[1])
    console.log(keys[2])

// Object.values()
console.log(Object.values(producto));
const values = Object.values(producto);
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])

// Object.entries()
console.log(Object.entries(producto));
const entries = Object.entries(producto)

    console.log(entries[0])
        console.log(entries[0][0])
        console.log(entries[0][1])

    console.log(entries[1])
        console.log(entries[1][0])
        console.log(entries[1][1])

    console.log(entries[2])
        console.log(entries[2][0])
        console.log(entries[2][1])