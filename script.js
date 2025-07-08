function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById("visitorForm");
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message")
  };

  alert("Thank you for contacting us, " + data.name + "! We will get back to you shortly.");
  form.reset();
}
