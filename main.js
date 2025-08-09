document.addEventListener("DOMContentLoaded", () => {
  // Navbar active state handling
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = link.getAttribute("href");
      window.location.href = targetUrl;

      // Remove active class from all items
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
      // Add active class to clicked item
      link.closest(".nav-item").classList.add("active");
    });
  });

  // Set initial active state based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'home.html'; // Default to home.html if no match
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.closest(".nav-item").classList.add("active");
    }
  });
