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

    // Đặt ABOUT là active mặc định khi trang tải
    const aboutLink = document.querySelector('a[href="about.html"]');
    if (aboutLink) {
        aboutLink.parentElement.classList.add('active');
    }
});
