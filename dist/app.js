const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', (e) => {
  Array.from(e.target.closest('#menu-btn').children).forEach((icon) => {
    icon.classList.toggle('hidden');
  });
  menu.classList.toggle('show');
  overlay.classList.toggle('hidden');
});
