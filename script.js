const burgerButton = document.querySelector('.navtab__burger');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerClose = document.querySelector('.menu-right__close');
const menuBurgerItem = document.querySelector('.menu-burger__navigation');

const buttonTest = document.querySelector('.button__test');
const nameInput = document.querySelector('.input__text');
const pageNameTest = document.querySelector('.page-test__input_name');

function test(){
    nameInput.value = pageNameTest.textContent;
    console.log('проверка')
}


function openBurgerMenu() {
    menuBurger.classList.remove('menu-burger_none');
}

const closeBurgerMenu = () => {
    menuBurger.classList.add('menu-burger_none');
}



burgerButton.addEventListener('click', openBurgerMenu);
menuBurgerClose.addEventListener('click', closeBurgerMenu);
menuBurgerItem.addEventListener('click', event => {
    menuBurger.classList.add('menu-burger_none');
});
buttonTest.addEventListener('click', test);



