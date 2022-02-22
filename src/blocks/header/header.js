const burgerIcon = document.querySelector('.header__burger-icon');
const burgerMenu = document.querySelector('.menu__body');

const burgerState = { isOpen: false };

burgerIcon.addEventListener('click', (event) => {
    if (burgerState.isOpen) {
        burgerMenu.classList.remove("menu__body--active");
        burgerState.isOpen = false;
    } else {
        burgerMenu.classList.add("menu__body--active");
        burgerState.isOpen = true;
    }
});
