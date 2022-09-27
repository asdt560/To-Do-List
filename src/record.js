import { TaskList } from './class.js';

export const list = new TaskList();

export const record = () => {
  const taskname = document.querySelector('#addTask').value;
  list.add(taskname);
};
