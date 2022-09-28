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
    this.index = JSON.parse(window.localStorage.getItem('tasknumber'));
    if (this.container === null) {
      this.container = [];
    }
    if (this.index === null) {
      this.index = 0;
    }
    const newTask = new Task(title, this.index);
    this.container.push(newTask);
    this.index += 1;
    console.log(this.index);
    console.log(this.container);
    window.localStorage.setItem('tasknumber', JSON.stringify(this.index));
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }

  remove(id) {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    this.index = JSON.parse(window.localStorage.getItem('tasknumber'));
    this.container.splice(id, 1);
    this.container.forEach((item) => {
      if (item.index > id) {
        item.index -= 1;
      }
    });
    this.index -= 1;
    window.localStorage.setItem('tasknumber', JSON.stringify(this.index));
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }

  edit(target) {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    this.container[target.parentNode.parentNode.parentNode.id].description = target.textContent;
    console.log(this.container);
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }
}

export const list = new TaskList();