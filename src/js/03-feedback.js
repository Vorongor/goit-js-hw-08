import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageInput.value = message;
}

const saveStateToLocalStorage = throttle(() => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}, 500);

form.addEventListener('input', saveStateToLocalStorage);
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  console.log({ email, message });
});
