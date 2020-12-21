'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');

const openmodal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnopenmodal.length; i++)
  btnopenmodal[i].addEventListener('click', openmodal);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
