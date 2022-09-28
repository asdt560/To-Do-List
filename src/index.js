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
/*
const complete = (boxIndex) => {
  const arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr.forEach((item) => {
    if (arr.indexOf(item) === boxIndex) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      console.log(item);
    }
  });
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
};
*/

window.addEventListener('load', () => {
  display();
  const listbutton = document.querySelectorAll('.listbutton');
  listbutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      changebutton(e.currentTarget);
      display();
    });
  });

  /*
  const boxes = document.querySelectorAll('.task');
  boxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      if (e.target.checked) {
        const boxIndex = e.currentTarget.id;
        e.target.parentNode.cssText = 'text-decoration = strikethrough';
        complete(boxIndex);
      }
    });
  });
  */
});