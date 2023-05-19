const burgerButton = document.querySelector('.navtab__burger');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerClose = document.querySelector('.menu-right__close');
const menuBurgerItem = document.querySelector('.menu-burger__navigation');


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



