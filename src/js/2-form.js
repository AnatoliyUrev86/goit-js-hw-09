formData = { email: '', message: '' };
localStorage.setItem(formData, JSON.stringify(email, message));
const value = localStorage.getItem(email, message);
const STORAGE_KEY = 'feedback-form';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', handalInput);
function handalInput(event) {
  const message = event.target.value;
  populateTextAres();
  localStorage.setItem(STORAGE_KEY, message);
  console.log(message);
}

function populateTextAres() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  console.log(savedMessage);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputEmail = event.currentTarget.elements.email.value.trim();
  const inputMessage = event.currentTarget.elements.password.value.trim();
  if (!inputEmail || !inputMessage) {
    alert('Fill please all fields');
    return;
  }
  const data = {
    inputEmail,
    inputMessage,
  };
  console.log(data);
  formEl.reset();
});

form.addEventListener('submit', handalSubmit);
function handalSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
