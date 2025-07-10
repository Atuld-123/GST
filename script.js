const scriptURL = 'https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Form submitted successfully!'))
    .catch(error => alert('Error!', error.message));
});