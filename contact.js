document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! (This is a demo, no actual email sent)');
    this.reset();
});

// Xử lý navbar active state
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Loại bỏ class active từ tất cả các mục
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            // Thêm class active cho mục được nhấp
            e.target.parentElement.classList.add('active');
        });
    });

    // Đặt CONTACT là active mặc định khi trang tải
    const contactLink = document.querySelector('a[href="contact.html"]');
    if (contactLink) {
        contactLink.parentElement.classList.add('active');
    }
});
