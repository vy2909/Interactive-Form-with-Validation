document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    // Real-time Validation
    nameInput.addEventListener("input", () => {
        validateName();
    });

    emailInput.addEventListener("input", () => {
        validateEmail();
    });

    phoneInput.addEventListener("input", () => {
        validatePhone();
    });

    messageInput.addEventListener("input", () => {
        validateMessage();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("Please correct the errors in the form.");
        }
    });

    // Validation Functions
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            nameInput.classList.add("invalid");
            return false;
        } else {
            nameError.style.display = "none";
            nameInput.classList.remove("invalid");
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block";
            emailInput.classList.add("invalid");
            return false;
        } else {
            emailError.style.display = "none";
            emailInput.classList.remove("invalid");
            return true;
        }
    }

    function validatePhone() {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            phoneError.style.display = "block";
            phoneInput.classList.add("invalid");
            return false;
        } else {
            phoneError.style.display = "none";
            phoneInput.classList.remove("invalid");
            return true;
        }
    }

    function validateMessage() {
        if (messageInput.value.trim() === "") {
            messageError.style.display = "block";
            messageInput.classList.add("invalid");
            return false;
        } else {
            messageError.style.display = "none";
            messageInput.classList.remove("invalid");
            return true;
        }
    }

    function validateForm() {
        return validateName() & validateEmail() & validatePhone() & validateMessage();
    }
});
