history.scrollRestoration = 'auto';

const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', (e) => {
  Array.from(e.target.closest('#menu-btn').children).forEach((icon) => {
    icon.classList.toggle('hidden');
  });
  menu.classList.toggle('show');
});

const toggleBtn = document.querySelector('.toggle-btn');
const priceFreqs = document.querySelectorAll('.price-freq');
const priceAmounts = document.querySelectorAll('.price h1 span');
const pricePer = document.querySelectorAll('.price p');

let monthly = true;

toggleBtn.addEventListener('click', (e) => {
  e.target.closest('.toggle-btn').classList.toggle('switch');
  priceFreqs.forEach((item) => item.classList.toggle('inactive'));

  priceAmounts.forEach((amount) => {
    if (monthly) {
      amount.innerHTML = (+amount.innerHTML * 10).toFixed(2);
    } else {
      amount.innerHTML = (+amount.innerHTML / 10).toFixed(2);
    }
  });

  pricePer.forEach((per) => {
    if (monthly) {
      per.innerHTML = 'per year';
    } else {
      per.innerHTML = 'per month';
    }
  });
  monthly = !monthly;
});
