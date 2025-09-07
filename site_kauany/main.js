// Portfólio: Filtros de categorias
const filterButtons = document.querySelectorAll('.portfolio-filters button');
const categories = document.querySelectorAll('.portfolio-category');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    categories.forEach(cat => {
      if (cat.id === btn.dataset.category) {
        cat.classList.add('active');
      } else {
        cat.classList.remove('active');
      }
    });
  });
});

// Botões "ver mais" e "ver menos"
document.querySelectorAll('.portfolio-category').forEach(category => {
  const verMais = category.querySelector('.ver-mais-btn');
  const verMenos = category.querySelector('.ver-menos-btn');
  const fullSection = category.querySelector('.portfolio-full');

  if (verMais && verMenos && fullSection) {
    verMais.addEventListener('click', () => {
      fullSection.style.display = 'grid';
      verMais.style.display = 'none';
      verMenos.style.display = 'inline-block';
    });

    verMenos.addEventListener('click', () => {
      fullSection.style.display = 'none';
      verMais.style.display = 'inline-block';
      verMenos.style.display = 'none';
    });
  }
});


// Botão ligar/desligar música de fundo
const music = document.getElementById('bg-music');
const btnMusic = document.getElementById('toggle-music');
const musicIcon = document.getElementById('music-icon');

btnMusic.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicIcon.src = "img/play.png"; // muda para pause
  } else {
    music.pause();
    musicIcon.src = "img/pause.png"; // muda para play
  }
});


// Depoimentos animação
const bubbles = document.querySelectorAll('.chat-bubble');
bubbles.forEach((bubble, i) => {
  bubble.style.animationDelay = `${i * 0.6}s`;
});


// Hero carrossel
const heroSwiper = new Swiper('.hero-carousel', {
  loop: true,
  speed: 800,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 2000,           // tempo em ms entre slides
    disableOnInteraction: false, // continua autoplay mesmo após interação
  },
});





