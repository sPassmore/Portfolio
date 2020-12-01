// Body elements
const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburgerMenu');
const heroElement = document.querySelector('.hero');
const greetingText = document.querySelector('.greeting');

// Contact Form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

// Toggling sidebar with hamburger icon
menuToggle.addEventListener('click', function () {
  bodyElement.classList.toggle('opened');
  heroElement.classList.add('opened');
});

// Closing the nav if the user clicks outside of the navbar
window.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.matches('.opened')) {
    bodyElement.classList.remove('opened');
    heroElement.classList.remove('opened');
  }
});
// Closing the nav if the user clicks on a link
window.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.matches('.navLink')) {
    bodyElement.classList.remove('opened');
    heroElement.classList.remove('opened');
  }
});

// Changing text on hero page
const text = ['Hola', 'Hola', 'Bonjour', 'Salve', 'Konnichiwa', 'Guten Tag'];
let counter = 0;
setInterval(change, 5000);
function change() {
  greetingText.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// Form Controll

// Checking for valid email address
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Changing the class of the form control to invalid on an empty input and display error message
function setInvalidFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'formControl invalid';
}

// Changing the class of the form control to valid on a correct input
function setValidFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'formControl valid';
}

function checkInputs() {
  // get the values from the inputs
  const nameValue = name.value;
  const emailValue = email.value;
  const subjectValue = subject.value;

  // Checking name Value
  if (nameValue === '') {
    setInvalidFor(name, 'Username cannot be blank');
  } else {
    setValidFor(name);
  }

  // Checking email Value
  if (emailValue === '') {
    setInvalidFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setInvalidFor(email, 'Email is invalid');
  } else {
    setValidFor(email);
  }

  // Checking subject value
  if (subjectValue === '') {
    setInvalidFor(subject, 'Subject cannot be blank');
  } else {
    setValidFor(subject);
  }
}

// form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});
