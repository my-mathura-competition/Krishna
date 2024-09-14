document.addEventListener("DOMContentLoaded", function() {
    // Form Validation and Submission Handling

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const form = event.target;
        const inputs = form.querySelectorAll("input[required]");
        let isValid = true;

        // Check for empty required fields
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "";
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset(); // Reset the form fields after submission
        } else {
            alert("Please fill out all required fields.");
        }
    }

    // Add event listeners to forms
    const organizeForm = document.querySelector("form[action='submit_organize.php']");
    const participateForm = document.querySelector("form[action='submit_participate.php']");

    if (organizeForm) {
        organizeForm.addEventListener("submit", handleFormSubmit);
    }

    if (participateForm) {
        participateForm.addEventListener("submit", handleFormSubmit);
    }
});