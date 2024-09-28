// Select the hamburger menu and navigation links elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the 'open' class on the navigation links when the hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
