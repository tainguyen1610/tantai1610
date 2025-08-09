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

// Function để mở modal
function openModal(projectKey) {
    console.log('Opening modal for:', projectKey);
    
    const modal = document.getElementById("projectModal");
    const project = projectData[projectKey];
    
    if (!project) {
        console.error('Project not found:', projectKey);
        return;
    }
    
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    // Cập nhật nội dung modal
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalSubtitle = document.getElementById("modalSubtitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTags = document.getElementById("modalTags");
    const modalLink = document.getElementById("modalLink");
    
    if (modalImage) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
    if (modalDescription) modalDescription.textContent = project.description;
    if (modalLink) modalLink.href = project.link;
    
    // Cập nhật tags
    if (modalTags) {
        modalTags.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            modalTags.appendChild(tagElement);
        });
    }
    
    // Hiển thị modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function để đóng modal
function closeModal() {
    console.log('Closing modal');
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Khởi tạo khi DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio JavaScript initialized');
    
    // Lấy tất cả portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    console.log('Found cards:', portfolioCards.length);
    
    // Thêm click event cho từng card
    portfolioCards.forEach(function(card) {
        const projectKey = card.getAttribute('data-project');
        console.log('Setting up card:', projectKey);
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Card clicked:', projectKey);
            openModal(projectKey);
        });
    });

    // Setup close button
    const closeBtn = document.querySelector(".close-modal");
    if (closeBtn) {
        closeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            closeModal();
        });
    }

    // Setup modal background click
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Setup escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById("projectModal");
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // Prevent modal content click from closing
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Scroll animation setup
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
        
        // Simple intersection observer
        setTimeout(function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
