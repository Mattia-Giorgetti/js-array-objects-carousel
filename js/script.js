"use strict";

// FUNZIONI //

// Funzione che genera lo slide della card principale 

function slider(){
    let activeSlide = 0;
    
    const mySlide = document.querySelectorAll('.slide');
    mySlide[activeSlide].classList.toggle('d-none');
  
    let maxShift = images.length - 1;
    
    // Funzione che muove in avanti al click (card principale)

    nextButton.addEventListener('click', function forward(){
        
        if(activeSlide !== maxShift){
            mySlide[activeSlide].classList.toggle('d-none');
            activeSlide++;
            mySlide[activeSlide].classList.toggle('d-none');
        } else {
            mySlide[activeSlide].classList.toggle('d-none');
            activeSlide = 0;
            mySlide[activeSlide].classList.toggle('d-none');
         }
    });

    // Funzione che muove indietro al click (card principale)

    prevButton.addEventListener('click', function backward(){
        if(activeSlide !== 0){
            mySlide[activeSlide].classList.toggle('d-none');
            activeSlide--;
            mySlide[activeSlide].classList.toggle('d-none');
        } else {
            mySlide[activeSlide].classList.toggle('d-none');
            activeSlide = maxShift;
            mySlide[activeSlide].classList.toggle('d-none');
        }
    });
}    

// Funzione che genera lo slide delle miniature 

function trackSlider (){

    let activeImg = 0;
    const myPic = document.querySelectorAll('.square');
    myPic[activeImg].classList.toggle('unselected_pic');
    let maxShift = images.length - 1;

    // Funzione che muove in avanti al click (miniature)

    nextButton.addEventListener('click', function nextPic (){
        if(activeImg !== maxShift) {
            myPic[activeImg].classList.toggle('unselected_pic');
            activeImg++;
            myPic[activeImg].classList.toggle('unselected_pic');
        } else {
            myPic[activeImg].classList.toggle('unselected_pic');
            activeImg = 0;
            myPic[activeImg].classList.toggle('unselected_pic');
        }
    });

    // Funzione che muove indietro al click (miniature)

    prevButton.addEventListener('click', function previousPic (){
        if(activeImg !== 0){
            myPic[activeImg].classList.toggle('unselected_pic');
            activeImg--;
            myPic[activeImg].classList.toggle('unselected_pic');
        } else {
            myPic[activeImg].classList.toggle('unselected_pic');
            activeImg = maxShift;
            myPic[activeImg].classList.toggle('unselected_pic');
        }
    })
}

// Funzione che crea dinamicamente il div con la card principale 

function creaSlide(){
    images.forEach((obj) => {
        let cardSlide = document.createElement('div');
        cardSlide.classList.add('slide', 'd-none');
        let templateHTML = `
        <img class="img-fluid" src="${obj.url}" alt="${obj.title}" />
        <h2 class="position-absolute top-0 end-0 pe-4 text-white pt-4">${obj.title}</h2>
        <p class="my_par p-4 text-white ">${obj.description}</p>      
        `;
        cardSlide.innerHTML = templateHTML;
        myWrapper.append(cardSlide);

        slider();
    });
}

// Funzione che crea dinamicamente il div con le miniature

function creaTracker(){
    images.forEach((obj) => {
        let cardsquare = document.createElement('div');
        cardsquare.classList.add('square','col','unselected_pic');
        let templateHTML = `
        <img class="img-fluid" src="${obj.url}" alt="${obj.title}" />
        `;
        cardsquare.innerHTML = templateHTML;
        imgTracker.append(cardsquare);

        trackSlider();
    });
}



// Variabili globali
const prevButton = document.getElementById('prev_btn');
const nextButton = document.getElementById('next_btn');
const myWrapper = document.getElementById('wrapper');
const imgTracker = document.getElementById('img_tracker');
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// lancio le funzioni 

creaSlide();
creaTracker();

