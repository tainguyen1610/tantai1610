document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('animated', 'fadeInDown');
        // Tùy chọn: Thêm delay nếu muốn
        hero.classList.add('delay-1s');
    }
});
