document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.querySelector('.portfolio-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Cập nhật nội dung modal dựa trên item được nhấp
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            modalContent.innerHTML = `
                <button class="close-modal">×</button>
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="modal-tags">
                    <span>Tag 1</span>
                    <span>Tag 2</span>
                </div>
            `;
            modal.classList.add('active');
        });
    });

    // Đóng modal khi nhấp vào nút close
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            modal.classList.remove('active');
        }
    });
});
// Lấy các phần tử
const proSidebarCard = document.getElementById("proSidebar");
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close-modal");

// Mở popup khi click Pro Sidebar
proSidebarCard.addEventListener("click", () => {
    modal.classList.add("active");
});

// Đóng popup khi click nút X
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Đóng khi click ra ngoài nội dung
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
