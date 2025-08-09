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
// Project data với thông tin đầy đủ cho tất cả projects
const projectData = {
    prosidebar: {
        title: "PROSIDEBAR",
        subtitle: "Responsive Sidebar Template",
        description: "Responsive sidebar template with dropdown menu based on Bootstrap framework. Tác giả: Nguyễn Tấn Tài",
        image: "images/pro-sidebar.jpg",
        tags: ["Bootstrap", "jQuery", "HTML5", "CSS3", "SASS", "Gulp"],
        link: "https://github.com/tainguyen161005/project1"
    },
    numgaz: {
        title: "NUMGAZ",
        subtitle: "Digitalization of Gas Networks",
        description: "Development of a web application that offers a set of tools to digitize the GAZ network on a 1/1000 scale geographical background; it also allows to view and perform spatial analysis on the network thus digitized. Tác giả: Nguyễn Tấn Tài",
        image: "images/numgaz.png",
        tags: ["Java/JSP", "JavaScript", "PostgreSQL", "PL/PgSql", "ArcGIS API", "Dojo", "HTML5", "CSS3"],
        link: "https://github.com/tainguyen161005/project2"
    },
    travaux: {
        title: "TRAVAUX",
        subtitle: "Project Management System",
        description: "Comprehensive project tracking and management web application designed to streamline workflow processes, task assignment, and project monitoring with real-time collaboration features. Tác giả: Nguyễn Tấn Tài",
        image: "images/travaux.webp",
        tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Bootstrap"],
        link: "https://github.com/tainguyen161005/project3"
    },
    weblab: {
        title: "WEBLAB",
        subtitle: "Laboratory Information System",
        description: "Advanced laboratory information management system (LIMS) that handles sample tracking, test results, quality control, and regulatory compliance for modern laboratories. Tác giả: Nguyễn Tấn Tài",
        image: "images/weblab.png",
        tags: ["ASP.NET Core", "C#", "SQL Server", "Angular", "TypeScript", "Chart.js"],
        link: "#"
    },
    dashboard: {
        title: "LIGHTNING DASHBOARD",
        subtitle: "Admin Template",
        description: "Modern and responsive admin dashboard template built with Angular and Bootstrap, featuring comprehensive UI components, charts, and data visualization tools for web applications. Tác giả: Nguyễn Tấn Tài",
        image: "images/dashboard.png",
        tags: ["Angular", "TypeScript", "Bootstrap", "Chart.js", "SCSS", "RxJS"],
        link: "#"
    }
};

// Lấy các elements từ DOM
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close-modal");

// Function để mở modal với thông tin project
function openModal(projectKey) {
    const project = projectData[projectKey];
    
    if (project) {
        // Cập nhật nội dung modal
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalSubtitle.textContent = project.subtitle;
        modalDescription.textContent = project.description;
        modalLink.href = project.link;
        
        // Cập nhật tags
        modalTags.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            modalTags.appendChild(tagElement);
        });
        
        // Hiển thị modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Function để đóng modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners khi DOM đã load
document.addEventListener('DOMContentLoaded', () => {
    // Thêm event listeners cho tất cả portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = card.getAttribute('data-project');
            openModal(projectKey);
        });
        
        // Thêm hover effect cho cursor
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
    });

    // Đóng modal khi click vào nút close
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Đóng modal khi click ra ngoài content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Đóng modal bằng phím Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent modal content click from closing modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Animation cho cards khi scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards khi DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});
