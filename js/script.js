"use strict";

// Funzioni 

function slider(){
    let activeSlide = 0;
    
    const mySlide = document.querySelectorAll('.slide');
    mySlide[activeSlide].classList.toggle('d-none');
  
    // let maxShift = mySlide.length - 1;

    nextButton.addEventListener('click', function forward(){
        mySlide[activeSlide].classList.toggle('d-none');
        activeSlide++;
        mySlide[activeSlide].classList.toggle('d-none');
    });

    prevButton.addEventListener('click', function backward(){
        mySlide[activeSlide].classList.toggle('d-none');
        activeSlide--;
        mySlide[activeSlide].classList.toggle('d-none');
    });
}    

function trackSlider (){

    let activeImg = 0;
    const myPic = document.querySelectorAll('.square');
    myPic[activeImg].classList.toggle('selected_pic');

    nextButton.addEventListener('click', function nextPic (){
        myPic[activeImg].classList.toggle('selected_pic');
        activeImg++;
        myPic[activeImg].classList.toggle('selected_pic');
    })

    prevButton.addEventListener('click', function previousPic (){
        myPic[activeImg].classList.toggle('selected_pic');
        activeImg--;
        myPic[activeImg].classList.toggle('selected_pic');
    })
}

function creaSlide(){
    images.forEach((obj) => {
        let cardSlide = document.createElement('div');
        cardSlide.classList.add('slide', 'position-relative', 'd-none');
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
function creaTracker(){
    images.forEach((obj) => {
        let cardsquare = document.createElement('div');
        cardsquare.classList.add('square','col','selected_pic');
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
creaSlide();
creaTracker();


