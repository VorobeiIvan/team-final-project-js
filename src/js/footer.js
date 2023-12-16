import { postSubscription } from './api';
import refs from './refs';
import iziToast from 'izitoast';

const validateEmail = email => {
  const template = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return template.test(email);
};

const handleSubmit = event => {
  event.preventDefault();
  const { email } = event.currentTarget.elements;
  if (!validateEmail(email.value.trim())) {
    const errorMessage = {
      title: 'Error',
      message: 'The email must be in format test@gmail.com',
      position: 'topRight',
      color: 'red',
    };
    return iziToast.show(errorMessage);
  }
  const userEmail = email.value.trim();
  postSubscription(userEmail)
    .then(response => {
      if (response.message) {
        const successMessage = {
          title: 'Success',
          message: response.message,
          position: 'topRight',
          color: 'green',
        };
        return iziToast.show(successMessage);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 409) {
        const errorMessage = {
          title: 'Error',
          message: error.response.data.message,
          position: 'topRight',
          color: 'red',
        };
        return iziToast.show(errorMessage);
      }
      const errorMessage = {
        title: 'Error',
        message: 'Oops, something went wrong, try again later',
        position: 'topRight',
        color: 'red',
      };
      return iziToast.show(errorMessage);
    })
    .finally(() => refs.footerForm.forEach(form => form.reset()));
};

refs.footerForm.forEach(form => form.addEventListener('submit', handleSubmit));
