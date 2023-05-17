const burgerButton = document.querySelector('.navtab__burger');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerClose = document.querySelector('.menu-right__close');
const menuBurgerItem = document.querySelector('.menu-burger__navigation');
const buttonTestClose = document.querySelector('.popup-test_cross');
const passTheTest = document.querySelector('.choice-condicioner__pass-test');
const popupTest = document.querySelector('.popup-test');


function openBurgerMenu(){
    menuBurger.classList.remove('menu-burger_none');
}

const closeBurgerMenu = () => {
    menuBurger.classList.add('menu-burger_none');
}

const openTest = () =>{
    popupTest.classList.remove('popup-test_none');
}

const closeTest = () => {
    popupTest.classList.add('popup-test_none');
}





    burgerButton.addEventListener('click',openBurgerMenu);
    menuBurgerClose.addEventListener('click',  closeBurgerMenu);
    menuBurgerItem.addEventListener('click', event =>{
        menuBurger.classList.add('menu-burger_none');
    });
    passTheTest.addEventListener('click',openTest);
    buttonTestClose.addEventListener('click',closeTest);
