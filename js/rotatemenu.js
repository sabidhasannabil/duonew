//Rorate Menu js

let mainContainer = document.querySelector('.main-container')
let menuBtn = document.querySelector('.menu-btn')
let header = document.querySelector('.header')

menuBtn.onclick = function() {
    mainContainer.classList.toggle('shrink')
    /* header.classList.toggle('rounded') */
}