import { list } from './record.js';

const deleter = (item) => {
  item.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    console.log(item.parentNode.id);
    list.remove(item.parentNode.id);
  });
};

export default deleter;