//Preload
const preloader = document.querySelector('#preload'); 
const container = document.querySelector('.container'); 


function getPreload () {

    container.style.display = 'none';

    setTimeout(function () {

        preloader.style.display = 'none'; 
        container.style.display = 'block';

    }, 0)

}

getPreload(); 




//Seletores para cafés frios e gelados:

const quente = document.querySelector('.quente'); 
const gelado = document.querySelector('.gelado'); 

const texto1 = document.querySelector('#cafe-texto1');
const texto2 = document.querySelector('#cafe-texto2');
const texto3 = document.querySelector('#cafe-texto3');

const card1 = document.querySelector('#card1'); 
const card2 = document.querySelector('#card2'); 
const card3 = document.querySelector('#card3'); 


quente.addEventListener('click', () => {
    texto1.innerHTML = 'Tradicional'; 
    texto2.innerHTML = 'Capuccino'; 
    texto3.innerHTML = 'Expresso'; 

    card1.src = './IMG/café-tradicional.png'; 
    card2.src = './IMG/capuccino.png'; 
    card3.src = './IMG/café-expresso.png'; 

})

gelado.addEventListener('click', () => {
    texto1.innerHTML = 'seila'; 
    texto2.innerHTML = 'seila2'; 
    texto3.innerHTML = 'seila3'; 

    card1.src = './IMG/capuccino.png'; 
    card2.src = './IMG/capuccino.png'; 
    card3.src = './IMG/capuccino.png'; 

})



