import changebutton from './changebutton.js';

const targeter = () => {
  const listbutton = document.querySelectorAll('.listbutton');
  listbutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      changebutton(e.currentTarget);
    });
  });
};

export default targeter;