// Eventos

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', toggleFooter)

function toggleFooter(){
    //console.log('just clicked!')
    footer.classList.add('activo')
}