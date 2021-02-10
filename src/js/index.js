import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const button = document.querySelector('.action--js');

button.addEventListener('click', () => {
  const heading = document.querySelector('.main__header--js');
  heading.innerHTML = 'Wypełniłem ten nagłówek za pomocą JS poprzez kliknięcie w przycisk';
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
nav.classList.toggle('navigation--open');

})