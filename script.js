const burgerButton = document.querySelector('.navtab__burger');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerClose = document.querySelector('.menu-right__close');
const menuBurgerItem = document.querySelector('.menu-burger__navigation');

const buttonTest = document.querySelector('.button__test');
const nameInput = document.querySelector('.input__text');
const tellInput = document.querySelector('.input__tell');
const pageNameTest = document.querySelector('.popup-test__input_name');
const pageTellTest = document.querySelector('.popup-test__input_phone');


const passTestOpen = document.querySelector('.choice-condicioner__pass-test');
const passTestClose = document.querySelector('.popup-test_cross');
const popupTest = document.querySelector('.popup-test');




function openBurgerMenu() {
    menuBurger.classList.remove('menu-burger_none');
}

const closeBurgerMenu = () => {
    menuBurger.classList.add('menu-burger_none');
}

const openTest = () =>{
    popupTest.classList.remove('popup-test_none')
}

const closeTest = () =>{
    popupTest.classList.add('popup-test_none')
}

function valueInputTest(){
    openTest();
    pageNameTest.value = nameInput.value;
    pageTellTest.value = tellInput.value;


    /*
    nameInput.value = pageNameTest.textContent;
    tellInput.value = pageTellTest.textContent;*/
}


burgerButton.addEventListener('click', openBurgerMenu);
menuBurgerClose.addEventListener('click', closeBurgerMenu);
menuBurgerItem.addEventListener('click', event => {
    menuBurger.classList.add('menu-burger_none');
});
passTestOpen.addEventListener('click', openTest);
passTestClose.addEventListener('click', closeTest);
buttonTest.addEventListener('click',  valueInputTest);



