// Traversing the DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blanco son considerados como elementos.
console.log(navegacion.children); // no considera los espacios en blanco ni los saltos de linea. Solo elementos html.

    console.log(navegacion.children[0]);
    console.log(navegacion.children[1]);
    console.log(navegacion.children[2]);
    console.log(navegacion.children[3]);

    console.log(navegacion.children[0].nodeName);
    console.log(navegacion.children[0].nodeType);

    console.log(navegacion.children[1].nodeName);
    console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');
console.log(card);
console.log(card.children);
console.log(card.children[0]);  // img
console.log(card.children[1]);  // div.info
    console.log(card.children[1].children); // p, p, p
        console.log(card.children[1].children[0]);  // p.categoria.concierto
            console.log(card.children[1].children[0].textContent)
        console.log(card.children[1].children[1]);  // p.titulo
            console.log(card.children[1].children[1].textContent)
        console.log(card.children[1].children[2]);  // p.precio
            console.log(card.children[1].children[2].textContent)

    // Cambiar la imagen
    //card.children[0].src = 'img/hacer4.jpg';
    console.log(card.children[0])

    // Cambiar todas las imagenes
    const images = document.querySelectorAll('img');
    console.log(images);
    /*
    images[1].src = 'img/hacer4.jpg';
    images[2].src = 'img/hacer4.jpg';
    images[3].src = 'img/hacer4.jpg';
    images[5].src = 'img/hacer4.jpg';
    images[6].src = 'img/hacer4.jpg';
    images[7].src = 'img/hacer4.jpg';
    images[8].src = 'img/hacer4.jpg';
    images[9].src = 'img/hacer4.jpg';
    images[10].src = 'img/hacer4.jpg';
    images[11].src = 'img/hacer4.jpg';
    images[12].src = 'img/hacer4.jpg';
    images[13].src = 'img/hacer4.jpg';
    images[14].src = 'img/hacer4.jpg';
    images[15].src = 'img/hacer4.jpg';
    */


// Traversing -> De Padre a Hijo
console.log('Traversing de Padre a Hijo')
console.log(card);
console.log(card.children);
    //hijos...
    console.log(card.children[0]);
    console.log(card.children[1]);
        //hijo de hijo...
        console.log(card.children[1].children[0]);
        console.log(card.children[1].children[1]);
        console.log(card.children[1].children[2]);

// Traversing -> De Hijo a Padre
console.log('Traversing de Hijo a Padre')
console.log(card);
console.log(card.parentNode);   // Igual que ChildNodes, trae espacios en blanco
console.log(card.parentElement);    // Igual que Children, trae solo elementos html

    console.log(card.parentElement);    // ↑
    console.log(card.parentElement.parentElement);  // ↑
    console.log(card.parentElement.parentElement.parentElement);    // ↑
    console.log(card.parentElement.parentElement.parentElement.parentElement);  // ↑
    console.log(card.parentElement.parentElement.parentElement.parentElement.parentElement);    // ↑
    console.log(card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement); // null

    