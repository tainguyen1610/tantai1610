
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! (This is a demo, no actual email sent)');
    this.reset();
});
