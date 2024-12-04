// Seleciona os elementos das categorias e botões
const categoryBars = [
  document.querySelector('.categoria-popular'),
  document.querySelector('.categoria-series'),
  document.querySelector('.categoria-filmes'),
  document.querySelector('.categoria-top10'),
  document.querySelector('.categoria-acao'),
  document.querySelector('.categoria-suspense'),
  document.querySelector('.categoria-ficcao'),
  document.querySelector('.categoria-animacao'),
  document.querySelector('.categoria-terror'),
  document.querySelector('.populares-filmes'),
  document.querySelector('.recentes-filmes'),
  document.querySelector('.acao-filmes'),
  document.querySelector('.suspense-filmes'),
  document.querySelector('.ficcao-filmes'),
  document.querySelector('.animacao-filmes'),
  document.querySelector('.terror-filmes'),
  document.querySelector('.populares-series'),
  document.querySelector('.recentes-series'),
  document.querySelector('.acao-series'),
  document.querySelector('.suspense-series'),
  document.querySelector('.ficcao-series'),
  document.querySelector('.animacao-series'),
  document.querySelector('.terror-series')
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
