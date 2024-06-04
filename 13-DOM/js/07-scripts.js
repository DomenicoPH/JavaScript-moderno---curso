// Modificar estilos CSS con JS

const encabezado = document.querySelector('h1');
console.log(encabezado);
console.log(encabezado.style);

// Modificando CSS al encabezado
/*
encabezado.style.backgroundColor = 'red';
encabezado.style.color = 'yellow';
encabezado.style.fontFamily = 'Arial';
encabezado.style.letterSpacing = '1rem';
encabezado.style.textTransform = 'Uppercase';
*/

const card = document.querySelector('.card');
console.log(card);
    console.log(card.classList);
    console.log(card.classList[0]);
    console.log(card.className);

// .classlist.add() (méetodo .add() de .classlist)
console.log(card.classList);

card.classList.add('segunda-clase');
console.log(card.classList);

card.classList.add('tercera-clase');
console.log(card.classList);