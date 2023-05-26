//Preload
const preloader = document.querySelector('#preload'); 
const container = document.querySelector('.container'); 


function getPreload () {

    container.style.display = 'none';

    setTimeout(function () {

        preloader.style.display = 'none'; 
        container.style.display = 'block';

    }, 3500)

}

getPreload(); 



//Slider principal (manual)


const btn1 = document.querySelector('.btn1'); 
const btn2 = document.querySelector('.btn2'); 
const btn3 = document.querySelector('.btn3');

const carrossel = document.querySelector('.slide1'); 


document.addEventListener('click', (e) => {

    const elemento = e.target; 

    if(elemento.classList.contains('btn1')) {
        carrossel.classList = 'slide1'
    } else if (elemento.classList.contains('btn2')) {
        carrossel.classList = 'slide2'
    } else if (elemento.classList.contains('btn3')) {
        carrossel.classList = 'slide3'
    }

})








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

    card1.src = './IMG/xicara-de-cafe.png'; 
    card2.src = './IMG/cappuccino.png'; 
    card3.src = './IMG/maquina-de-cafe.png'; 

})

gelado.addEventListener('click', () => {
    texto1.innerHTML = 'Frappuccino'; 
    texto2.innerHTML = 'Ice cream'; 
    texto3.innerHTML = 'Gelado cremoso'; 

    card1.src = './IMG/café gelado.png'; 
    card2.src = './IMG/ice cream.png'; 
    card3.src = './IMG/milkshake.png'; 

})



