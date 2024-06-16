// Event Bubbling (Delegation)
const cardDiv = document.querySelector('.card');

/*
cardDiv.addEventListener('click', () => {
    console.log('click en .card');
})
*/

cardDiv.addEventListener('click', (e) => {
    console.log(`click en ${e.target.classList.value}`);
})

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')){
        console.log('click en titulo')
    }
    if(e.target.classList.contains('precio')){
        console.log('click en precio')
    }
    if(e.target.classList.contains('card')){
        console.log('click en card')
    }
})