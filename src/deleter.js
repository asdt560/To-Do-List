import { list } from './record.js';

const deleter = (item) => {
  item.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    list.remove(item.parentNode.id);
  });
};

export default deleter;