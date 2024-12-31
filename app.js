const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    nav.classList.toggle('open-nav')
    burger.classList.toggle('toggle')
    body.classList.toggle('no-scroll')
})

