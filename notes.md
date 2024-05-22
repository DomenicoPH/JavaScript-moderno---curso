Métodos

Strings:

## .length  

    Retorna la longitud en índices del string analizado.

    Ex:
    const string = 'the real thing'
    string.length = 14

## .indexOf()  

    Retorna el índice de la cadena de texto en el que se encuentra la palabra por la que se pregunta.
    Si no encuentra coincidencia retorna -1.

    Ex:
    const producto = 'Monitor 20 pulgadas';
    producto.indexOf('Monitor');    // 0    --> Encontrado en índice 0
    producto.indexOf('pulgadas');   // 11   --> Encontrado en índice 11 
    producto.indexOf('casa');       // -1   --> No encontrado

## .includes()

    Retorna 'true' o 'false' en función de si encuentra o no el elemento por el que se pregunta. Si lo encuentra retorna 'true', sino 'false'.

    Ex:
    const producto = 'Monitor 20 pulgadas';
    console.log(producto.includes('tablet'));    //false
    console.log(producto.includes('Monitor'));   //true

## .concat()  

    Se utiliza para concatenar strings.

    Ex:
    const producto = 'Monitor 20 pulgadas ';
    const precio = '30 USD ';
    console.log(producto.concat(precio));
    console.log(producto.concat('en descuento!'))

## .trimStart()  

    Elimina los espacios en blanco al comienzo de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trimStart()  --->  'Monitor 20 pulgadas              ';

## .trimEnd()  

    Elimina los espacios en blanco al final de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trimEnd()  --->  '        Monitor 20 pulgadas';

## .trim()  

    Elimina los espacios en blanco al comienzo y al final de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trim()  --->  'Monitor 20 pulgadas';