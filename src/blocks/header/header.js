const burgerIcon = document.querySelector('.header__burger-icon')
const burgerMenu = document.querySelector('.menu__burger-list')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const header = document.querySelector('.header')

const burgerState = { isOpen: false }

burgerIcon.addEventListener('click', (event) => {
  if (burgerState.isOpen) {
    burgerMenu.classList.remove('menu__burger-list--active')
    footer.classList.remove('footer--blured')
    main.classList.remove('main--blured')
    burgerState.isOpen = false
  } else {
    burgerMenu.classList.add('menu__burger-list--active')
    footer.classList.add('footer--blured')
    main.classList.add('main--blured')
    burgerState.isOpen = true
  }
})

const headerBlur = header.cloneNode()
headerBlur.classList.add('header--blured')
headerBlur.classList.add('header--fixed')

const headerState = { isFixed: false }

window.addEventListener('scroll', (event) => {
  if (!headerState.isFixed && window.pageYOffset !== 0) {
    header.classList.add('header--fixed')
    headerState.isFixed = true
    header.before(headerBlur)
  }
  if (headerState.isFixed && window.pageYOffset === 0) {
    header.classList.remove('header--fixed')
    headerState.isFixed = false
    headerBlur.remove()
  }
})
