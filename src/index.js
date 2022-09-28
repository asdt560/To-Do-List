import './style.css';

import display from './display.js';

import changebutton from './changebutton.js';

import { list } from './class.js';

document.querySelector('#taskenter').addEventListener('click', () => {
  const taskname = document.querySelector('#addTask').value;
  list.add(taskname);
  display();
});

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskname = document.querySelector('#addTask').value;
  list.add(taskname);
  display();
});

const clearer = () => {
  let arr = JSON.parse(window.localStorage.getItem('tasklist'));
  let index = JSON.parse(window.localStorage.getItem('tasknumber'));
  arr = [];
  index = 0;
  window.localStorage.setItem('tasknumber', JSON.stringify(index));
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
  display();
};

document.querySelector('#clear').addEventListener('click', () => {
  clearer();
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