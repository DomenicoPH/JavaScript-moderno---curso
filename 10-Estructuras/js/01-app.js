// if... else...

let puntaje  = 1000;
puntaje = 500;

if(puntaje == 1000){
    console.log('Si es igual');
} else {
    console.log('No es igual');
}

//... User access simulation

const userEnter = prompt('username: ');
const passEnter = prompt('password: ');
const usuario = {
    nombre: 'Paco Perez',
    username: 'pp_6891',
    password: '123456'
}

const enterTheSystem = () => {
    if(usuario.username === userEnter && usuario.password === passEnter){
        alert('Access OK. You can enter the system');
    } else {
        alert('Sorry, incorrect username or password');
    }
}
enterTheSystem();