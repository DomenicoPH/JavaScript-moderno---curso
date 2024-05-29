// Buenas prácticas

// Ex.1

const autenticado = true;

if (autenticado === true){
    console.log('El usuario está autenticado')
};

// Simplificado: mejor práctica
if (autenticado){
    console.log('El usuario está autenticado')
};

// Más simplificado: mejor
if (autenticado) console.log('El usuario está autenticado');


// Ex.2

let puntaje = 500;

if (puntaje > 300){
    console.log('Buen puntaje... felicidades!');
} else if (puntaje > 400){
    console.log('Excelente!')
}
/* Aunque puntaje valga 500, nunca llegará 
   a mostrar 'Excelente' ya que el codigo se
   termina en (puntaje > 300), ya que 300
   también es mayor que 500.
   El orden en los IF es relevante ya que las
   funciones se ejecutan hacia abajo, deteniendo
   el codigo ante la primera coincidencia. */

puntaje = 350;
    if (puntaje > 400){
        console.log('Excelente!')
    } else if (puntaje > 300){
        console.log('Buen puntaje... felicidades!');
    }

puntaje = 450;
    if (puntaje > 400){
        console.log('Excelente!')
    } else if (puntaje > 300){
        console.log('Buen puntaje... felicidades!');
    }


// Ex.3

puntaje = 350;
puntaje = 500;
puntaje = 50;

function revisarPuntaje(puntaje){
    if(puntaje === 500){
        console.log('Insuperable! Máximo puntaje √');
        return;
    }
    if(puntaje >= 400){
        console.log('Excelente! Gran puntaje √')
        return;
    }
    if(puntaje >= 300){
        console.log('Bien! Buen puntaje √');
        return;
    }
    if(puntaje >= 200){
        console.log('Insuficiente. Debe mejorar');
        return;
    }
    if(puntaje >= 100){
        console.log('Insuficiente. puntaje muy bajo')
        return;
    }
    if(puntaje >= 0){
        console.log('Insuficiente. No vales pa naa');
        return;
    }
}

revisarPuntaje(puntaje)