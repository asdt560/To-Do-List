import display from './display.js';
import { list } from './record.js';

const deleter = (item) => {
  console.log(item.parentNode);
  list.remove(item.parentNode.id);
  display();
};

export default deleter;