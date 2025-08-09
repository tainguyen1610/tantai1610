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

    // Đặt trang hiện tại là active mặc định khi tải
    const currentPage = window.location.pathname.split('/').pop();
    const activeLink = document.querySelector(`a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
});
