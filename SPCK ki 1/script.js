const contactForm = document.getElementById("contact-form");
const usernameContact = document.getElementById("name");
const emailContact = document.getElementById("email");
const commentsContact = document.getElementById("comment");
function handleSubmitForm(event) {
  event.preventDefault();
  if (usernameContact === "" || emailContact === "" || commentsContact === "") {
    alert("Please fill the information");
  } else {
    alert(`Username: ${usernameContact.value}
    email: ${emailContact.value}
    comments: ${commentsContact.value}`);
    usernameContact.value = "";
    emailContact.value = "";
    commentsContact.value = "";
  }
}
contactForm.addEventListener("submit", handleSubmitForm);
