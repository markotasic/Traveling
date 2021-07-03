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
const btn2 = document.getElementById('btn-2');
const langSelectionArrowUp = document.querySelector('.nav__select-left--up');
const langSelectionArrowDown = document.querySelector(
  '.nav__select-left--down'
);
const langButton = document.querySelector('.btn--blue-inv');
const logo = document.querySelector('.nav__logo');
const languages = document.querySelectorAll('.language');

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

btn2.addEventListener('click', function (e) {
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

// if screen is under 900px hide logo while search bar is open
function checkIfScreenIsUnder900px(screenSize) {
  if (screenSize.matches) {
    search.addEventListener('click', function () {
      logo.classList.add('hidden');
    });
  } else {
    logo.classList.remove('hidden');
    search.addEventListener('click', function () {
      logo.classList.remove('hidden');
    });
  }
}

var screenSize = window.matchMedia('(max-width: 900px)');
checkIfScreenIsUnder900px(screenSize); // Call listener function at run time
screenSize.addEventListener('change', checkIfScreenIsUnder900px);

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
    logo.classList.remove('hidden');
  }
});

// change selected language when page navigation is open
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

const numOfLanguages = languages.length;

const nextLang = () => {
  const currentLanguage = document.getElementById(currentlySelectedLanguageId);
  currentLanguage.classList.remove('selected');

  currentlySelectedLanguageId++;

  let nextId = 0;
  if (currentlySelectedLanguageId > numOfLanguages - 1) {
    nextId = 0;
    currentlySelectedLanguageId = 0;
  } else nextId = currentlySelectedLanguageId;

  const nextLanguage = document.getElementById(nextId);
  nextLanguage.classList.add('selected');
};

const prevLang = () => {
  const currentLanguage = document.getElementById(currentlySelectedLanguageId);
  currentLanguage.classList.remove('selected');

  currentlySelectedLanguageId--;

  let nextId = 0;
  if (currentlySelectedLanguageId < 0) {
    nextId = numOfLanguages - 1;
    currentlySelectedLanguageId = numOfLanguages - 1;
  } else nextId = currentlySelectedLanguageId;

  const nextLanguage = document.getElementById(nextId);
  nextLanguage.classList.add('selected');
};

const selectLang = (e) => {
  const currentLanguage = document.getElementById(currentlySelectedLanguageId);
  console.log(currentLanguage.innerHTML);

  menuLanguage.classList.remove('language-selector-open');
  header.classList.remove('menu-open');
};

langSelectionArrowUp.addEventListener('click', prevLang);
langSelectionArrowDown.addEventListener('click', nextLang);
langSelect.addEventListener('click', selectLang);
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

langButton.addEventListener('click', function () {
  headerMenu.classList.add('hidden');
});
