const voltar = document.querySelector('.voltar');
const popup = document.querySelector('.background_popup');
const images = document.querySelectorAll('.categoria-videos img, .categoria-videos2 img');
const video = document.getElementById('trailer');

// Adiciona evento de clique
voltar.addEventListener('click', back);

images.forEach(image => {
  image.addEventListener('click', () => {
    popup.style.display = 'block';
    video.style.display = 'block';
  });
});

function back() {
    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
    popup.style.display = 'none';
}