const categoryBar = document.querySelector('.categoria-videos');
const arrowrightButton = document.querySelector('.arrowright-button');
const arrowleftButton = document.querySelector('.arrowleft-button'); 
const categoryBar2 = document.querySelector('.categoria-videos2');
const arrowrightButton2 = document.querySelector('.arrowright-button2');
const arrowleftButton2 = document.querySelector('.arrowleft-button2'); 

const scrollAmount = 180; // Define a quantidade de rolagem

arrowrightButton.addEventListener('click', () => {
  categoryBar.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

arrowleftButton.addEventListener('click', () => {
  categoryBar.scrollBy({
    left: -scrollAmount, // Valor negativo para rolar para a esquerda
    behavior: 'smooth'
  });
});

arrowrightButton2.addEventListener('click', () => {
  categoryBar2.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

arrowleftButton2.addEventListener('click', () => {
  categoryBar2.scrollBy({
    left: -scrollAmount, // Valor negativo para rolar para a esquerda
    behavior: 'smooth'
  });
});