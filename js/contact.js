(function () {
    emailjs.init("_t8k_EMLBEpNYyfsg");
})();

import { updateText } from './i18n.js';

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

//  getting input
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// getting span texts
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
const generalError = document.getElementById('general-error');

function cleanUI() {
    const inputs = [nameInput, emailInput, subjectInput, messageInput];

    inputs.forEach(input => input.classList.remove("border-red-500"));

    [nameError, emailError, subjectError, messageError, generalError].forEach(error => {
        error.textContent = '';
        error.removeAttribute('data-i18n');
    });
    submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
}

function formValidation() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    const inputs = [nameInput, emailInput, subjectInput, messageInput];

    cleanUI();

    if (!name || !email || !subject || !message) {
        
        submitBtn.dataset.i18n = 'contact.form.failed';
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600");
        submitBtn.disabled = true;
        generalError.dataset.i18n = 'contact.error.general';

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("border-red-500");
            }
        });

        updateText();

        setTimeout(() => {
            cleanUI();
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.disabled = false;
        }, 2000);

        return false;
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.classList.add("border-red-500");
        emailError.dataset.i18n = 'contact.error.emailInvalid';

        submitBtn.dataset.i18n = 'contact.form.failed';
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600");
        submitBtn.disabled = true;
        updateText();
        setTimeout(() => {
            emailInput.classList.remove("border-red-500");
            emailError.removeAttribute('data-i18n');
            emailError.textContent = '';
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
        }, 2000);

        return false;
    };

    if(name.length < 3) {
        nameInput.classList.add("border-red-500");
        nameError.dataset.i18n = 'contact.error.nameShort';
        submitBtn.dataset.i18n = 'contact.form.failed';
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600");
        submitBtn.disabled = true;
        updateText();
        setTimeout(() => {
            nameInput.classList.remove("border-red-500");
            nameError.removeAttribute('data-i18n');
            nameError.textContent = '';
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
        }, 2000);

        return false;
    };

    if (message.length < 5) {
        messageInput.classList.add("border-red-500");
        messageError.dataset.i18n = 'contact.error.messageShort';
        submitBtn.dataset.i18n = 'contact.form.failed';
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600"); 
        submitBtn.disabled = true;
        updateText();
        setTimeout(() => {
            messageInput.classList.remove("border-red-500");
            messageError.removeAttribute('data-i18n');
            messageError.textContent = '';
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
        }, 2000);
        return false;
    }
    return true;
}

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formValidation()) return; // 🔥 FIXED

    submitBtn.disabled = true;
    submitBtn.dataset.i18n = 'contact.form.sending';
    updateText();

    emailjs.sendForm(
        "service_bt5syud", 
        "template_2l44hwu",
        this
    )
    .then(()=> {
        submitBtn.dataset.i18n = 'contact.form.sent';
        submitBtn.classList.add("bg-green-500", "hover:bg-green-600");
        updateText();

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.classList.remove("bg-green-500", "hover:bg-green-600");
            contactForm.reset();
        }, 2000);
    })
    .catch((error) => {
        console.error("FAILED...", error);

        submitBtn.dataset.i18n = 'contact.form.failed';
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600");
        updateText();

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.dataset.i18n = 'contact.form.send';
            updateText();
            submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
        }, 3000);
    });
});