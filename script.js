document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

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

  

  


const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-list');

toggleMenuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});




let currentIndex = 0;
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');
const totalCards = carouselCards.length;

function moveCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNext() {
  currentIndex = (currentIndex + 1) % totalCards;
  moveCarousel();
}

function moveToPrev() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  moveCarousel();
}

let autoMove = setInterval(moveToNext, 10000);

function resetCarouselOnResize() {
  clearInterval(autoMove);
  currentIndex = 0;
  moveCarousel();
  autoMove = setInterval(moveToNext, 10000);
}

window.addEventListener('resize', resetCarouselOnResize);

document.querySelector('.left-arrow').addEventListener('click', moveToPrev);
document.querySelector('.right-arrow').addEventListener('click', moveToNext);
