const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
