// Parámetros por default

function saludar(nombre='anónimo', apellido=''){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar();
saludar('Domenico');
saludar('Domenico','Pagano');