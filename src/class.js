import display from './display.js';

export function Task(description, index) {
  this.description = description;
  this.completed = false;
  this.index = index;
}

export class TaskList {
  constructor() {
    this.container = [];
    this.index = 0;
  }

  add(title) {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    if (this.container === null) {
      this.container = [];
    }
    const newTask = new Task(title, this.index);
    this.container.push(newTask);
    this.index += 1;
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
    display();
  }

  remove(id) {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    this.container.splice(id, 1);
    this.container.forEach((item) => {
      if (item.index > id) {
        item.index -= 1;
      }
    });
    this.index -= 1;
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }
}
