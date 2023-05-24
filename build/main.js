/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (() => {

eval("\n\n\nconst burgerButton = document.querySelector('.navtab__burger');\nconst menuBurger = document.querySelector('.menu-burger');\nconst menuBurgerClose = document.querySelector('.menu-right__close');\nconst menuBurgerItem = document.querySelector('.menu-burger__navigation');\n\nconst buttonTest = document.querySelector('.button__test');\nconst nameInput = document.querySelector('.input__text');\nconst tellInput = document.querySelector('.input__tell');\nconst pageNameTest = document.querySelector('.popup-test__input_name');\nconst pageTellTest = document.querySelector('.popup-test__input_phone');\n\n\nconst passTestOpen = document.querySelector('.choice-condicioner__pass-test');\nconst passTestClose = document.querySelector('.popup-test_cross');\nconst popupTest = document.querySelector('.popup-test');\n\n\nconsole.log('Hello, World!')\n\nfunction openBurgerMenu() {\n    menuBurger.classList.remove('menu-burger_none');\n}\n\nconst closeBurgerMenu = () => {\n    menuBurger.classList.add('menu-burger_none');\n}\n\nconst openTest = () =>{\n    popupTest.classList.remove('popup-test_none')\n}\n\nconst closeTest = () =>{\n    popupTest.classList.add('popup-test_none')\n}\n\nfunction valueInputTest(){\n    openTest();\n    pageNameTest.value = nameInput.value;\n    pageTellTest.value = tellInput.value;\n\n}\n\n\nburgerButton.addEventListener('click', openBurgerMenu);\nmenuBurgerClose.addEventListener('click', closeBurgerMenu);\nmenuBurgerItem.addEventListener('click', event => {\n    menuBurger.classList.add('menu-burger_none');\n});\npassTestOpen.addEventListener('click', openTest);\npassTestClose.addEventListener('click', closeTest);\nbuttonTest.addEventListener('click',  valueInputTest);\n\n\n\n\n\n//# sourceURL=webpack://oleg_air/./src/pages/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/index.js"]();
/******/ 	
/******/ })()
;