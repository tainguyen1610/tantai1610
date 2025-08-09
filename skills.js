document.addEventListener('DOMContentLoaded', () => {
  // Xử lý gradient cho skill-circle
  const skillCircles = document.querySelectorAll('.skill-circle');
  skillCircles.forEach(circle => {
    const span = circle.querySelector('span');
    if (span) {
      const percentage = parseInt(span.textContent);
      if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
        const angle = (percentage / 100) * 360; // Chuyển phần trăm thành độ
        circle.style.setProperty('--progress', `${angle}deg`);
      } else {
        console.warn('Invalid percentage value in', span);
        circle.style.setProperty('--progress', '0deg'); // Giá trị mặc định nếu lỗi
      }
    }
  });

  // Xử lý navbar active state
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Loại bỏ class active từ tất cả các mục
      navLinks.forEach(l => l.parentElement.classList.remove('active'));
      // Thêm class active cho mục được nhấp
      e.target.parentElement.classList.add('active');
    });
  });

  // Đặt SKILLS là active mặc định khi trang tải
  const skillsLink = document.querySelector('a[href="skills.html"]');
  if (skillsLink) {
    skillsLink.parentElement.classList.add('active');
  }
});
