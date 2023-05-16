let burgerButton = document.querySelector('.navtab__burger');
let menuBurger = document.querySelector('.menu-burger');
let menuBurgerClose = document.querySelector('.menu-right__close');
let menuBurgerItem = document.querySelector('.menu-burger__navigation');



function openBurgerMenu(){
    menuBurger.classList.remove('menu-burger_none');
}

let closeBurgerMenu = () => {
    menuBurger.classList.add('menu-burger_none');
}





    burgerButton.addEventListener('click',openBurgerMenu);
    menuBurgerClose.addEventListener('click',  closeBurgerMenu);
    menuBurgerItem.addEventListener('click', event =>{
        menuBurger.classList.add('menu-burger_none');
    });