
const header = document.querySelector('header'); 
const preloader = document.querySelector('#preload'); 
const container = document.querySelector('.container'); 


function getPreload () {

    header.style.display = 'none'; 
    container.style.display = 'none';

    setTimeout(function () {

        preloader.style.display = 'none'; 

        header.style.display = 'block'; 
        container.style.display = 'block';

    }, 0)

}

getPreload(); 


