// Simple form submit alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will contact you soon.');
    form.reset();
});
