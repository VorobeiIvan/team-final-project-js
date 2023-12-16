import iziToast from 'izitoast';

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

export const generateError = (message) => iziToast.show({
  title: 'Error',
  message: message,
  position: 'topRight',
  color: 'red',
});
export const generateSuccess = (message) => iziToast.show({
  title: 'Success',
  message: message,
  position: 'topRight',
  color: 'green',
});

export const validator = {
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  review: /^.+$/,
};
