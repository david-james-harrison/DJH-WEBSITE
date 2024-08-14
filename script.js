// Example JavaScript for interactivity

// Learn More button click event on the Home page
document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('Thank you for your interest! Check out my portfolio to see my work.');
});

// Form submission on the Contact page
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    // Here you could add further form processing logic, e.g., sending data to a server
});
