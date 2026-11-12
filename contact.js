
document.addEventListener("DOMContentLoaded", function () {

    // GET THE CONTACT FORM
    const form = document.querySelector("#contactForm");

    // CREATE SUCCESS MESSAGE
    const successMessage = document.createElement("p");

    successMessage.className = "success-message";
    successMessage.style.color = "green";
    successMessage.style.textAlign = "center";

    form.appendChild(successMessage);

    // FORM SUBMISSION
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // GET CUSTOMER INFORMATION
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#number").value.trim();
        const message = document.querySelector("#message").value.trim();
        const address = document.querySelector("#address").value.trim();

        // CHECK EMPTY FIELDS
        if (!name || !email || !phone || !message || !address) {
            successMessage.style.color = "red";
            successMessage.textContent =
                "Please fill in all the required fields.";
            return;
        }

        // CHECK EMAIL FORMAT
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            successMessage.style.color = "red";
            successMessage.textContent =
                "Please enter a valid email address.";
            return;
        }

        // CHECK PHONE NUMBER
        const phonePattern = /^\+?[0-9\s-]{7,15}$/;

        if (!phonePattern.test(phone)) {
            successMessage.style.color = "red";
            successMessage.textContent =
                "Please enter a valid phone number.";
            return;
        }

        // DISPLAY SUCCESS MESSAGE
        successMessage.style.color = "green";

        successMessage.textContent =
            "Thank you, " + name +
            "! Your message has been submitted successfully.";

        // CLEAR FORM
        form.reset();

    });

});
