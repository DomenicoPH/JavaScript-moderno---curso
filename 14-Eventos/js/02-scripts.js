// Eventos (mouse)

const nav = document.querySelector('.navegacion');

// 'click'
nav.addEventListener('click', () => {
    console.log('click en nav');
    //alert('click en nav');
})

// 'mouseenter'
nav.addEventListener('mouseenter', () => {
    console.log('El ratón se metió en el nav');
        nav.style.backgroundColor = 'white';
});

const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('mouseenter', () => {
    console.log('El ratón se metió en el la barra de búsqueda');
});

// 'mouseout'
nav.addEventListener('mouseout', () => {
    console.log('El ratón se fue del nav');
        nav.style.backgroundColor = 'transparent';
})
busqueda.addEventListener('mouseout', () => {
    console.log('El ratón se fue de la barra de búsqueda');
});

/*
    --- Eventos ---
    mousedown -> evento que se genera cuando se hace click
    mouseup ---> evento que se genera cuando se el click se suelta
    click -----> evento que se genera cuando se hace click
    dblclick --> evento que se genera cuando se hace doble click
*/