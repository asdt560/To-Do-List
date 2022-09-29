import './style.css';

import display from './modules/display.js';

import changebutton from './modules/changebutton.js';

import { list } from './modules/class.js';

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskname = document.querySelector('#addTask').value;
  list.add(taskname);
  display();
  e.target.reset();
});

document.querySelector('#clear').addEventListener('click', () => {
  list.clearer();
  display();
});

window.addEventListener('load', () => {
  display();
  const listbutton = document.querySelectorAll('.listbutton');
  listbutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      changebutton(e.currentTarget);
      display();
    });
  });
});