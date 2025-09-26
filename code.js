function get_random_image() {
  var image_array = [
    '/img/lagna.jpeg',
    '/img/lagna1.jpeg',
    '/img/sangiulio.jpeg',
    '/img/mottarone.jpg'
  ];
  const random_index = Math.floor(Math.random() * image_array.length);
  const selected_image = image_array[random_index];
  return selected_image;
}

function toggleNavigation(navLinks, toggleButton) {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('open', !isExpanded);
}

function closeNavigation(navLinks, toggleButton) {
  toggleButton.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function () {
  const heroPhoto = document.getElementById('hero-photo');
  if (heroPhoto) {
    heroPhoto.src = get_random_image();
  }

  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', function () {
      toggleNavigation(navLinks, toggleButton);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeNavigation(navLinks, toggleButton);
      });
    });
  }
});
