const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

/* control visibility of menu */
navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.firstElementChild.classList = 'fa fa-thin fa-xmark';
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.firstElementChild.classList = 'fa fa-solid fa-bars';
  }
});

/* close menu when someone clicks on an element inside the overlay */
function closeNav() {
  primaryNav.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  navToggle.firstElementChild.classList = 'fa fa-solid fa-bars';
}

primaryNav.childNodes.forEach((element) => {
  element.addEventListener('click', closeNav);
});


/* Preserve data in the browser */
 const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const textInput = contactForm.querySelector('#message');
function storage() {

  const data = {
     name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(saveData));
}
    
