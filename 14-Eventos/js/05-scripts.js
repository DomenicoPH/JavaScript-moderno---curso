// Eventos (scrolls)

// Muestra en consola el scroll vertical en px.
/*
window.addEventListener('scroll', () => {
    //console.log('scrolling')
    const scrollPX = window.scrollY;
    console.log(scrollPX);
});
*/

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium'); // Toma el elemento con clase 'premium'
    const ubicacion = premium.getBoundingClientRect();  // Retorna la ubicación del elemento con la clase 'premium'
    //console.log(ubicacion);
    if(ubicacion.top < 1196 && ubicacion.top > -443){
        console.log('Elemento premium es visible :)')
    } else {
        console.log('Elemento premium fuera de foco :(')
    }
})
