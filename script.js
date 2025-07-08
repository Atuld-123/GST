
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! Your form is submitted."))
    .catch(error => alert("Error!", error.message));
});
