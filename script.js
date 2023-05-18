const burgerButton = document.querySelector('.navtab__burger');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerClose = document.querySelector('.menu-right__close');
const menuBurgerItem = document.querySelector('.menu-burger__navigation');
const buttonTestClose = document.querySelector('.popup-test_cross');
const passTheTest = document.querySelector('.choice-condicioner__pass-test');
const popupTest = document.querySelector('.popup-test');

const slider = document.querySelector('.popup-test__questions');
const sliderChildren = Array.from(slider.children);
const questionItem = document.querySelector('.popup-test__question-item');

const buttonEnd = document.querySelector('.popup-test__button_end');
const buttonUp = document.querySelector('.popup-test__button_up');

let counter = 1;

function openBurgerMenu() {
    menuBurger.classList.remove('menu-burger_none');
}

const closeBurgerMenu = () => {
    menuBurger.classList.add('menu-burger_none');
}

const openTest = () => {
    popupTest.classList.remove('popup-test_none');
}

const closeTest = () => {
    popupTest.classList.add('popup-test_none');
}

//Test

sliderChildren.forEach(function (slide, index) {
    slide.classList.add('popup-test__question-item_none');



    if (index === 0) {
        slide.classList.remove('popup-test__question-item_none');
    }

    slide.dataset.index = index;
})


buttonUp.addEventListener('click', function (event) {
    event.preventDefault();
   const one =  slider.querySelector('.popup-test__question-item_none')
   const curindex = one.dataset.index;
   console.log(curindex)
   let step = sliderChildren[counter++]
  
   if (step === curindex) {
       step.classList.remove('popup-test__question-item_none');
   }
 
   
    
})

burgerButton.addEventListener('click', openBurgerMenu);
menuBurgerClose.addEventListener('click', closeBurgerMenu);
menuBurgerItem.addEventListener('click', event => {
    menuBurger.classList.add('menu-burger_none');
});
passTheTest.addEventListener('click', openTest);
buttonTestClose.addEventListener('click', closeTest);


