document.addEventListener('DOMContentLoaded', () => {
  const skillCircles = document.querySelectorAll('.skill-circle');
  skillCircles.forEach(circle => {
    const percentage = parseInt(circle.querySelector('span').textContent);
    const angle = (percentage / 100) * 360;
    circle.style.setProperty('--progress', `${angle}deg`);
  });
});
