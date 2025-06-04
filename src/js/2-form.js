const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input[name="email"]');
const formEl = document.querySelector('.feedback-form');

if (value) {
  formData.email = value.email;
  formData.message = value.message;
  inputEl.value = value.email;
  textarea.value = value.message;
}

formEl.addEventListener('input', handalInput);
function handalInput(event) {
  const { name, value } = event.target;
  console.log(name, value);
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputEmail = event.currentTarget.elements.email.value.trim();
  const inputMessage = event.currentTarget.elements.message.value.trim();
  if (!inputEmail || !inputMessage) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
});
