(function () {
    emailjs.init("_t8k_EMLBEpNYyfsg");
})();

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

// input validation
contactForm.addEventListener("input", function () {
    // get input values and trim whitespace
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();

    // get span values for error messages
    const nameError = this.name.nextElementSibling;
    const emailError = this.email.nextElementSibling;
    const subjectError = this.subject.nextElementSibling;
    const messageError = this.message.nextElementSibling;
    
    submitBtn.disabled = !(name && email && subject && message);
    // general error displaying
    // span creationg for general error message
    const generalError = document.getElementById("general-error");
    if (!name || !email || !subject || !message) {
        generalError.textContent = "Please fill in all fields";
    } else {
        generalError.textContent = "";
    }

    // validate name
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        this.name.classList.add("border-red-500");
    } else {
        nameError.textContent = "";
        this.name.classList.remove("border-red-500");
        this.name.classList.add("border-green-500");
    }

    // validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email";
        this.email.classList.add("border-red-500");
    } else {
        emailError.textContent = "";
        this.email.classList.remove("border-red-500");
        this.email.classList.add("border-green-500");
    }

    // validate subject
    if (subject.length < 5) {
        subjectError.textContent = "Subject must be at least 5 characters";
        this.subject.classList.add("border-red-500");
    } else {
        subjectError.textContent = "";
        this.subject.classList.remove("border-red-500");
        this.subject.classList.add("border-green-500");
    }

    // validate message
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        this.message.classList.add("border-red-500");
    } else {
        messageError.textContent = "";
        this.message.classList.remove("border-red-500");
        this.message.classList.add("border-green-500");
    }
});

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "SENDING...";

    emailjs.sendForm(
        "service_bt5syud", 
        "template_2l44hwu",
        this
    )
    .then(()=> {
        submitBtn.textContent = "MESSAGE SENT!";
        submitBtn.classList.add("bg-green-500", "hover:bg-green-600");
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "SEND MESSAGE";
            submitBtn.classList.remove("bg-green-500", "hover:bg-green-600");
            contactForm.reset();
        }, 2000);
    })
    .catch((error) => {
        console.error("FAILED...", error);
        submitBtn.textContent = "FAILED TO SEND";
        submitBtn.classList.add("bg-red-500", "hover:bg-red-600");
        this.classList.remove("border-green-500");
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "SEND MESSAGE";
            submitBtn.classList.remove("bg-red-500", "hover:bg-red-600");
        }, 3000);
    })
}); 
