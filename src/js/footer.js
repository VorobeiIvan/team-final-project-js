import { postSubscription } from './api';
import refs from './refs';
import { generateError, generateSuccess, validator } from './utils.js';
import { INVALID_INPUT_CLASS } from './const.js';


const validateEmail = (email) => {
  const template = validator.email;
  return template.test(email);
};

const handleSubmit = event => {
  event.preventDefault();
  const { email } = event.currentTarget.elements;
  if (!validateEmail(email.value.trim())) {
    email.classList.add(INVALID_INPUT_CLASS);
    return generateError('The email must be in format test@gmail.com');
  }
  const userEmail = email.value.trim();
  postSubscription(userEmail)
    .then(response => {
      if (response.message) {
        return generateSuccess(response.message);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 409) {
        email.classList.remove(INVALID_INPUT_CLASS);
        return generateError(error.response.data.message);
      }
      return generateError('Oops, something went wrong, try again later');
    })
    .finally(() => refs.footerForm.forEach(form => form.reset()));
};

refs.footerForm.forEach(form => form.addEventListener('submit', handleSubmit));
refs.footerForm.forEach(form => {
  const { email } = form.elements;
  email.addEventListener('input', () => email.classList.remove(INVALID_INPUT_CLASS));
});
