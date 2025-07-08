const form = document.querySelector("form");
const message = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  message.textContent = "Sending...";
  setTimeout(() => {
    message.textContent = "Thank you! We will contact you soon.";
    form.reset();
  }, 1000);
});
