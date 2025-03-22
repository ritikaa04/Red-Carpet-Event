document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the success message
    var formMessage = document.getElementById('form-message');
    formMessage.style.display = 'block';

    // Optionally, clear the form fields
    this.reset();

    // Hide the message after a few seconds
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 3000); // Hide after 3 seconds
});