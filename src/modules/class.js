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
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }

  complete(id) {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    if (this.container[id].completed === false) {
      this.container[id].completed = true;
    } else if (this.container[id].completed === true) {
      this.container[id].completed = false;
    }
    window.localStorage.setItem('tasklist', JSON.stringify(this.container));
  }

  clearer() {
    this.container = JSON.parse(window.localStorage.getItem('tasklist'));
    this.index = JSON.parse(window.localStorage.getItem('tasknumber'));
    const newarr = this.container.filter((item) => item.completed === false);
    newarr.forEach((object) => {
      object.index = newarr.indexOf(object);
    });
    const difference = this.container.length - newarr.length;
    this.index -= difference;
    window.localStorage.setItem('tasknumber', JSON.stringify(this.index));
    window.localStorage.setItem('tasklist', JSON.stringify(newarr));
  }
}

export const list = new TaskList();