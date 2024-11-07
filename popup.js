const voltar = document.querySelector('.voltar');
const popup = document.querySelector('.background_popup');
const images = document.querySelectorAll('.categoria-videos img, .categoria-videos2 img');
const iframe = document.getElementById('videoSrc');

// Adiciona evento de clique no botão de voltar
voltar.addEventListener('click', back);

// Adiciona evento de clique nas imagens para abrir o popup
images.forEach(image => {
  image.addEventListener('click', () => {
    document.body.classList.add('noscroll');
    popup.style.display = 'block';
  });
});

function back() {
  // Pausa o vídeo ao redefinir a src do iframe
  const iframeSrc = iframe.src;
  iframe.src = iframeSrc;
  
  popup.style.display = 'none';
  document.body.classList.remove('noscroll');
}