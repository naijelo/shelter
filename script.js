//Close all opened menues when resize
window.addEventListener('resize', closeAll);

const shelterPets = [
  {
      "name": "Jennifer",
      "img": "assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
  },
  {
      "name": "Sophia",
      "img": "assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
  },
  {
      "name": "Woody",
      "img": "assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
  },
  {
      "name": "Scarlett",
      "img": "assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
  },
  {
      "name": "Katrine",
      "img": "assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
  },
  {
      "name": "Timmy",
      "img": "assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
  },
  {
      "name": "Freddie",
      "img": "assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
  },
  {
      "name": "Charly",
      "img": "assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
  }
]
randomArray = generateRandomPetsArray(shelterPets);

//hamburger menu start
let hamburger = document.querySelector(".hamburger");
let navMenuMobile = document.querySelector(".nav-menu-mobile");
let logo = document.querySelector(".logo");
let header = document.querySelector(".header");

hamburger.addEventListener('click', hamburgerHandler);
navMenuMobile.addEventListener('click', closeAll);
logo.addEventListener('click', closeAll);

function hamburgerHandler() {
  hamburger.classList.toggle('active');
  navMenuMobile.classList.toggle('active');
  blurToggle()
}

//blur on-off start

let blur = document.querySelector(".blur");
let body = document.getElementsByTagName('body')[0];

function blurToggle() {
  blur.classList.toggle("active");
  body.style.overflow = "hidden";
  logo.classList.toggle('toggle');
  header.classList.toggle('toggle');
}

blur.addEventListener('click', closeAll);

function closeAll() {
    hamburger.classList.remove('active')
    navMenuMobile.classList.remove('active');
    blur.classList.remove("active");
    body.style.overflow = ""
    logo.classList.remove('toggle');
    header.classList.remove('toggle');
    modal.classList.remove("active");
}

// modal start

let slider = document.querySelector('.slider') || document.querySelector('.card-container');
let modal = document.querySelector('.modal');
let modalCard = document.querySelector('.modal__window');
let modalButton = document.querySelector('.modal__button')

slider.addEventListener('click', sliderHandler);
modal.addEventListener('click', modalHandler);
modal.addEventListener('mouseover', paintModalButton);

function sliderHandler(event) {
  if (event.target.closest('.card')) {
    let name = event.target.closest('.card').querySelector('.card__text').textContent;
    let petObject = shelterPets.find(obj => obj.name === name);
    fillModal(modal, petObject);
    body.style.overflow = "hidden";
    modal.classList.add("active");
  }
}

function modalHandler(event) {
  if (!event.target.closest('.modal__window')) closeAll();
  if (event.target.closest('.modal__button')) closeAll();
} 

// paint modal button
function paintModalButton(event) {
  if (!event.target.closest('.modal__window')) document.querySelector('.modal__button').style.backgroundColor = "#FDDCC4";
  if (event.target.closest('.modal__window')) document.querySelector('.modal__button').style.backgroundColor = "";
}

// create HTML for modal
function fillModal(div, obj) {
  div.innerHTML = `<div class="modal__window"><button class="modal__button button_secondary button_arrow">&#10006;</button>`+
    `<div class="modal__content">`+
    `<h3>${obj.name}</h3>`+
    `<h4>${obj.type} - ${obj.breed}</h4>`+
    `<h5>${obj.description}</h5>`+
    `<ul class="modal__list"><li  class="modal__list__item"><span>Age:</span> ${obj.age}</li>`+
    `<li class="modal__list__item"><span>Inoculations: </span>${obj.inoculations.join(', ')}</li>`+
    `<li class="modal__list__item"><span>Diseases:</span> ${obj.diseases.join(', ')}</li>` +
    `<li class="modal__list__item" ><span>Parasites:</span> ${obj.parasites.join(', ')}</li></ul></div>`+    
    `<img src="${obj.img}" alt="${obj.name} image" class="modal__img"></div>`
}

// Carousel handler start 

let carouselBtnLeft = document.getElementById("slider-left");
let carouselBtnRight = document.getElementById("slider-right");
let carouselBtnLeftMobile = document.getElementById("slider-left-mobile");
let cards = document.querySelectorAll(".card");

if (carouselBtnLeft) {
  carouselBtnLeft.addEventListener('click', carouselBtnHandler);
  carouselBtnLeftMobile.addEventListener('click', carouselBtnHandler);
  carouselBtnRight.addEventListener('click', carouselBtnHandler);
}

function carouselBtnHandler(event) {
  let btn = event.target.id;
  let oldNames = []
  let rnd = 0;

  for (let i = 0; i<cards.length; i++) {
    oldNames.push(cards[i].querySelector('p').textContent)
  }
  for (let i = 0; i<cards.length;) {
    rnd = Math.floor(Math.random()*8);
    if (oldNames.indexOf(shelterPets[rnd].name) === -1) {
      oldNames.push(shelterPets[rnd].name);
      cards[i].querySelector('p').textContent = shelterPets[rnd].name;
      cards[i].querySelector('img').src = shelterPets[rnd].img;
      i++;
    }
  }
}

// Pagination start

let pagination = document.querySelector(".pagination");
let pagintaionBtns;
if (pagination) pagintaionBtns = pagination.querySelectorAll('button');
let pageStartItem = 0;
let arraySize = 47;


function generateRandomPetsArray(arrOfPets) {
  let falseRandomPetsArray = arrOfPets;
  let rnd = 0;
  let lastSix = ["Katrine", "Jennifer", "Woody", "Sophia", "Timmy", "Charly"];
  for (let i = 0; i<41;) {
    rnd = Math.floor(Math.random()*8);
    if (lastSix.indexOf(arrOfPets[rnd].name) === -1) {
      lastSix.push(arrOfPets[rnd].name);
      lastSix.shift();
      falseRandomPetsArray.push(arrOfPets[rnd])
      i++;
    }
  }

  return falseRandomPetsArray
}

if (pagination) {
  pagination.addEventListener('click', paginationHandler);
}

function paginationHandler(event) {
  if (event.target.closest('button')) {
    let button = event.target.closest('button');
    let buttonId = button.id;
    let isActive= !button.classList.contains('inactive');
    const screenWidth = window.innerWidth;
    let step = 8;

    if (screenWidth<1200) step = 6;
    if (screenWidth<768) step = 3;

    if(buttonId === "paginationBtnFirst") {pageStartItem =  0;}
    if(buttonId === "paginationBtnPrevious") {pageStartItem - step < 0 ? pageStartItem =  0 : pageStartItem =  pageStartItem - step;}
    if(buttonId === "paginationBtnNext") {pageStartItem + step < arraySize - step ? pageStartItem = pageStartItem + step : pageStartItem = arraySize - step;}
    if(buttonId === "paginationBtnLast") {pageStartItem =  arraySize - step;}

    if (pageStartItem > 0) {pagintaionBtns[0].classList.remove('inactive'); pagintaionBtns[1].classList.remove('inactive');}
    if (pageStartItem === 0) {pagintaionBtns[0].classList.add('inactive'); pagintaionBtns[1].classList.add('inactive');}
    if (pageStartItem === arraySize - step) {pagintaionBtns[3].classList.add('inactive'); pagintaionBtns[4].classList.add('inactive');}
    if (pageStartItem < arraySize - step) {pagintaionBtns[3].classList.remove('inactive'); pagintaionBtns[4].classList.remove('inactive');}

    pagintaionBtns[2].innerText = 1 + (Math.floor( (1 + pageStartItem)/step));
    
    for (let i=0; i<8;i++) {
      cards[i].querySelector('p').textContent = randomArray[pageStartItem + i].name;
      cards[i].querySelector('img').src = randomArray[pageStartItem + i].img;
    }

    if (pageStartItem > 0) {
      pagintaionBtns[0].classList.remove('inactive');
      pagintaionBtns[1].classList.remove('inactive');
    }
  }
}
