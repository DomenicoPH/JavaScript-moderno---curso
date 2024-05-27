
iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
};

function segundaFuncion(){
    console.log('Desde la segunda función');
    usuarioAutenticado('Dom_86');
};

function usuarioAutenticado(usuario){
    console.log(`Autenticando usuario ${usuario}... espere...`);
    console.log(`Usuario ${usuario} autenticado exitosamente`);
};