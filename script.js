'use strict';

const navLinks = document.querySelector('.nav__links');
const btnPrimary = document.querySelector('.btn--primary-light');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelector('.btn--sec');
const card = document.querySelectorAll('.card');
const search = document.querySelector('.nav__search');
const search2 = document.querySelector('.nav__search-2');
const searchBar = document.querySelector('.nav__search-bar');
const leftNav = document.querySelector('.nav__left');
const headerMenu = document.querySelector('.header-menu');
const hamburger = document.querySelector('.nav__menu');
const langMenu = document.querySelector('.menu__language');
const langSelect = document.querySelector('.nav__sel');
const nav = document.querySelector('.nav');
const input = document.querySelector('.nav__input');
const navClose = document.querySelector('.nav__x');
const modalClose = document.querySelector('.modal__x');

// Page navigation
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    if (id !== '#')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

btnPrimary.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if (id !== '#')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

//Search bar
search.addEventListener('click', function () {
  searchBar.classList.toggle('hidden');
  search.classList.add('hidden');
  leftNav.classList.toggle('hidden');
});

navClose.addEventListener('click', function () {
  input.value = '';
});

// MODAL
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

modalClose.addEventListener('click', function () {
  closeModal();
});

// Cards show button on hover
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseover', function () {
    card[i].classList.add('book-show');
  });
}

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseout', function () {
    card[i].classList.remove('book-show');
  });
}

//Hamburger menu
hamburger.addEventListener('click', function () {
  headerMenu.classList.toggle('hidden');
  langSelect.classList.add('hidden');
});
langMenu.addEventListener('click', function () {
  langSelect.classList.toggle('hidden');
});

document.addEventListener('click', function (e) {
  if (e.target !== search && e.target !== input && e.target !== navClose) {
    searchBar.classList.add('hidden');
    search.classList.remove('hidden');
    leftNav.classList.remove('hidden');
  }
});

const languages = document.querySelectorAll('.language');

let currentlySelectedLanguageId = 0;

languages.forEach((lang) =>
  lang.addEventListener('click', (e) => {
    if (e.target.classList.contains('language')) {
      const currentLanguage = document.getElementById(
        currentlySelectedLanguageId
      );
      currentLanguage.classList.remove('selected');

      e.target.classList.add('selected');
      currentlySelectedLanguageId = e.target.id;
    }
  })
);
