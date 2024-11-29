addScrollEvent(document.querySelector('.arrowleft-button'), document.querySelector('.arrowright-button'), document.querySelector('.categoria-videos'));
addScrollEvent(document.querySelector('.arrowleft-button2'), document.querySelector('.arrowright-button2'), document.querySelector('.categoria-videos2'));
addScrollEvent(document.querySelector('.arrowleft-button3'), document.querySelector('.arrowright-button3'), document.querySelector('.categoria-videos3'));
addScrollEvent(document.querySelector('.arrowleft-button4'), document.querySelector('.arrowright-button4'), document.querySelector('.categoria-videos4'));
addScrollEvent(document.querySelector('.arrowleft-button5'), document.querySelector('.arrowright-button5'), document.querySelector('.categoria-videos5'));
addScrollEvent(document.querySelector('.arrowleft-button6'), document.querySelector('.arrowright-button6'), document.querySelector('.categoria-videos6'));
addScrollEvent(document.querySelector('.arrowleft-button7'), document.querySelector('.arrowright-button7'), document.querySelector('.categoria-videos7'));


const scrollAmount = 180; // Define a quantidade de rolagem

// Função para adicionar os eventos de rolagem
function addScrollEvent(arrowLeft, arrowRight, categoryBar) {
  arrowRight.addEventListener('click', () => {
    categoryBar.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  arrowLeft.addEventListener('click', () => {
    categoryBar.scrollBy({
      left: -scrollAmount, // Valor negativo para rolar para a esquerda
      behavior: 'smooth'
    });
  });
}