import '../scss/main.scss';

import moment from 'moment';
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Witaj odwiedzający!');

const button = document.querySelector('.action--js');

button.addEventListener('click', () => {
  const heading = document.querySelector('.main__header--js');
  heading.innerHTML = 'Wypełniłem ten nagłówek za pomocą JS poprzez kliknięcie w przycisk';
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
nav.classList.toggle('navigation--open');

});


const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;