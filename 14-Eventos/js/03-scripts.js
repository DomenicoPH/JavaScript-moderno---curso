// Eventos (inputs)

const busqueda = document.querySelector('.busqueda');
/*
// keydown
busqueda.addEventListener('keydown', () => {
    console.log('key down')
})

// keyup
busqueda.addEventListener('keyup', () => {
    console.log('key up')
})

// blur
busqueda.addEventListener('blur', () => {
    console.log('blur...')
})

// copy
busqueda.addEventListener('copy', () => {
    console.log('Estás copiando... (copy)')
})

// cut
busqueda.addEventListener('cut', () => {
    console.log('Estás cortando... (cut)')
})

// paste
busqueda.addEventListener('paste', () => {
    console.log('Estás pegando... (paste)')
})

// input
busqueda.addEventListener('input', () => {
    console.log('any INPUT')
})
*/
/*
    keydown
    keyup
    blur
    copy
    cut
    paste
    input
*/

// (event) => {}

busqueda.addEventListener('input', (event) => {
    console.log(event.target.value)
})