// Variables
const slider = document.getElementById('slider');
const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardWidth = document.querySelector('.card').offsetWidth;

// Slide to the next card
nextBtn.addEventListener('click', () => {
  cardsContainer.style.transform = `translateX(-${cardWidth + 30}px)`;
  cardsContainer.style.transition = 'transform 0.5s ease-in-out';

  setTimeout(() => {
    cardsContainer.appendChild(cardsContainer.firstElementChild);
    cardsContainer.style.transform = 'translateX(0)';
    cardsContainer.style.transition = 'none';
  }, 500);
});

// Slide to the previous card
prevBtn.addEventListener('click', () => {
  cardsContainer.insertBefore(cardsContainer.lastElementChild, cardsContainer.firstChild);
  cardsContainer.style.transform = `translateX(-${cardWidth + 30}px)`;
  cardsContainer.style.transition = 'none';

  setTimeout(() => {
    cardsContainer.style.transform = 'translateX(0)';
    cardsContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 50);
});
