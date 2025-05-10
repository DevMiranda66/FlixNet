const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const container = document.getElementById('tendencias-container');

let scrollAmount = 0;
const scrollSpeed = 250; // La velocidad de desplazamiento

prevBtn.addEventListener('click', () => {
  scrollAmount -= scrollSpeed;
  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  scrollAmount += scrollSpeed;
  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});