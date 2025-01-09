document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    // Hover effect for team member bios
    const teamMembers = document.querySelectorAll('.member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.backgroundColor = '#e6f7ff';
        });
        member.addEventListener('mouseleave', () => {
            member.style.backgroundColor = 'white';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const activeLink = Array.from(document.querySelectorAll('nav ul li a')).find(link => link.pathname === currentPath);
  
    if (activeLink) {
      activeLink.classList.add('active');
    }
  });

  

  //translation

  


// Seleccionar los elementos
const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-list');

// Agregar evento para mostrar/ocultar el menú
toggleMenuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});




let currentIndex = 0;
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');
const totalCards = carouselCards.length;

// Función para mover el carrusel
function moveCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para manejar las flechas
function moveToNext() {
  currentIndex = (currentIndex + 1) % totalCards;
  moveCarousel();
}

function moveToPrev() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  moveCarousel();
}

// Mover el carrusel automáticamente
let autoMove = setInterval(moveToNext, 7000);

// Función para reiniciar la animación después de cambiar el tamaño
function resetCarouselOnResize() {
  // Cancelamos el movimiento automático si el tamaño cambia
  clearInterval(autoMove);
  // Luego reiniciamos el carrusel
  currentIndex = 0;
  moveCarousel();
  // Reiniciamos el auto-movimiento
  autoMove = setInterval(moveToNext, 7000);
}

// Detectamos cuando la ventana cambia de tamaño
window.addEventListener('resize', resetCarouselOnResize);

// Manejadores de las flechas
document.querySelector('.left-arrow').addEventListener('click', moveToPrev);
document.querySelector('.right-arrow').addEventListener('click', moveToNext);
