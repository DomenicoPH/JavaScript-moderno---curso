# Métodos JS

## Strings:

### .length  

    Retorna la longitud en índices del string analizado.

    Ex:
    const string = 'the real thing'
    string.length = 14

### .indexOf()  

    Retorna el índice de la cadena de texto en el que se encuentra la palabra por la que se pregunta.
    Si no encuentra coincidencia retorna -1.

    Ex:
    const producto = 'Monitor 20 pulgadas';
    producto.indexOf('Monitor');    // 0    --> Encontrado en índice 0
    producto.indexOf('pulgadas');   // 11   --> Encontrado en índice 11 
    producto.indexOf('casa');       // -1   --> No encontrado

### .includes()

    Retorna 'true' o 'false' en función de si encuentra o no el elemento por el que se pregunta. Si lo encuentra retorna 'true', sino 'false'.

    Ex:
    const producto = 'Monitor 20 pulgadas';
    console.log(producto.includes('tablet'));    //false
    console.log(producto.includes('Monitor'));   //true

### .concat()  

    Se utiliza para concatenar strings.

    Ex:
    const producto = 'Monitor 20 pulgadas ';
    const precio = '30 USD ';
    console.log(producto.concat(precio));
    console.log(producto.concat('en descuento!'))

### .trimStart()  

    Elimina los espacios en blanco al comienzo de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trimStart()  --->  'Monitor 20 pulgadas              ';

### .trimEnd()  

    Elimina los espacios en blanco al final de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trimEnd()  --->  '        Monitor 20 pulgadas';

### .trim()  

    Elimina los espacios en blanco al comienzo y al final de una cadena.

    Ex:
    const producto = '        Monitor 20 pulgadas              ';
    producto.trim()  --->  'Monitor 20 pulgadas';

### .replace()

    Se aplica al string que se busca modificar. Recibe dos parámetros: El primero es la parte del string que se quiere cambiar. La segunda es el nuevo string que se busca insertar.

    Ex:
    const producto = 'Monitor 20 pulgadas';
    producto.replace(' pulgadas', '"');  --->  'Monitor 20"'

### .slice()

    Toma una tajada del string. Recibe dos parámetros: El primero es el índice a partir del cual se corta la tajada. El segundo es el índice hasta el cual se corta la tajada (pero no se incluye).
    Si se ingresa solo un parámetro, este indicará el valor del índice inicial de corte y tomará una tajada hasta el final del string.

    Ex:
    const producto = 'Monitor 20 pulgadas'

    producto.slice(0,10);  --->  'Monitor 20'
    producto.slice(8);  --->  '20 pulgadas'
    producto.slice(2,0)  --->  '' (No va hacia atrás,para eso se usa .substring)

### .substring()

    Toma una subcadena de la cadena de texto a la que se le aplique. Funciona igual que .slice solo que este si va en reversa.

    Ex:
    const producto = 'Monitor 20 pulgadas'

    producto.slice(0,10);  --->  'Monitor 20'
    producto.slice(8);  --->  '20 pulgadas'
    producto.slice(2,0);  --->  'Mo'

### .charAt()

    Toma el caracter en el índice especificado por parámetro.

    Ex:
    const usuario = 'Domenico'
    usuario.charAt(0)  --->  'D'
    usuario.charAt(2)  --->  'm'

### .repeat()

### .split()

### .toUpperCase()

    Transforma en mayúsculas todos los caracteres del string al que se le aplique.

    Ex:
    const nombre = 'Mi nombre es Juan'
    nombre.toUpperCase()  --->  'MI NOMBRE ES JUAN'

### .toLowerCase()

    Transforma en minúsculas todos los caracteres del string al que se le aplique.

    Ex:
    const nombre = 'Mi nombre es Juan'
    nombre.toLowerCase()  --->  'mi nombre es juan'

### .toString()

    Transforma un dato de tipo number a string.

    const precio = 300
    precio.toString()  --->  '300'


## Numbers: