// Seleciona os elementos das categorias e botões
const categoryBars = [
  document.querySelector('.categoria-videos'),
  document.querySelector('.categoria-videos2')
];

const arrowRightButtons = [
  document.querySelector('.arrowright-button'),
  document.querySelector('.arrowright-button2')
];

const arrowLeftButtons = [
  document.querySelector('.arrowleft-button'),
  document.querySelector('.arrowleft-button2')
];

// Configura o comportamento de rolagem para as duas barras
setupScrolling(categoryBars, arrowRightButtons, arrowLeftButtons);

const scrollAmount = 180; // Define a quantidade de rolagem

// Função genérica para configurar os botões de rolagem
function setupScrolling(categoryBars, arrowRightButtons, arrowLeftButtons) {
  arrowRightButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      categoryBars[index].scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });

  arrowLeftButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      categoryBars[index].scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  });
}