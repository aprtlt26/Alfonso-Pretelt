// Obtener el botón y el menú
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.menu');

// Añadir el evento click al botón
navToggle.addEventListener('click', () => {
  // Cambiar la clase del botón y del menú
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Oc
