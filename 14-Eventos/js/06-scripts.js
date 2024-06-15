// Eventos (Event Bubbling)     e.stopPropagation()

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

/*
    'cardDiv' contiene a 'infoDiv' e 'infoDiv' contiene a 'titulo'
    * cardDiv( infoDiv( titulo ) )

    cardDiv.addEventListener('click', () => {
        console.log('click en card')
    })

        >>----> el efecto de 'titulo' se propaga hacia arriba, afectando a 'infoDiv' y a 'cardDiv'
    
    infoDiv.addEventListener('click', () => {
        console.log('click en info')
    })
        
        >>----> el efecto de 'infoDiv' se propaga hacia arriba, afectando a 'cardDiv'
    
    titulo.addEventListener('click', () => {
        console.log('click en titulo')
    })

        >>----> el efecto de 'cardDiv' no se propaga.

    ** Para evitar el Event Bubbling se utiliza e.stopPropagation()
*/

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en card')
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en info')
})

titulo.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en titulo')
})