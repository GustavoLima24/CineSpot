document.addEventListener('DOMContentLoaded', function() {
  const thumbnail = document.getElementById('thumbnail');
  const video = document.getElementById('myVideo');
  const closeButton = document.getElementById('close');
  const playButton = document.getElementById('playButton');
  const bannerPrincipal = document.querySelector('.BannerPrincipal');

  // Adiciona evento de clique ao thumbnail
  thumbnail.addEventListener('click', startVideo);

  // Adiciona evento de clique ao playButton
  playButton.addEventListener('click', startVideo);

  // Fecha o vídeo e mostra o thumbnail ao clicar no botão Close
  closeButton.addEventListener('click', closeVideo);

  // Função para iniciar o vídeo
  function startVideo() {
    // Esconde o thumbnail
    thumbnail.style.transition = 'opacity 2s ease-in-out';
    thumbnail.style.opacity = 0;

    video.currentTime = 0; // Reinicia o vídeo para o início

    // Esconde o banner principal
    bannerPrincipal.style.transition = 'opacity 2s ease-in-out';
    bannerPrincipal.style.opacity = 0;

    // Aguarda a transição de 2 segundos
    setTimeout(() => {
      thumbnail.style.display = 'none'; // Oculta o thumbnail
      bannerPrincipal.style.display = 'none'; // Oculta o banner principal
      video.style.display = 'block'; // Exibe o vídeo
      closeButton.style.display = 'block'; // Exibe o botão de fechar

      // Inicia o vídeo após a transição
      video.play();
    }, 2000);
  }

  // Função para fechar o vídeo
  function closeVideo() {
    video.pause(); // Pausa a reprodução do vídeo
    closeButton.style.display = 'none'; // Oculta o botão de fechar

    // Mostra o thumbnail
    thumbnail.style.display = 'block';
    thumbnail.style.opacity = 0;
    thumbnail.style.transition = 'opacity 2s ease-in-out';

    // Mostra o banner principal
    bannerPrincipal.style.display = 'block';
    bannerPrincipal.style.opacity = 0;
    bannerPrincipal.style.transition = 'opacity 2s ease-in-out';

    setTimeout(() => {
      thumbnail.style.opacity = 1;
      bannerPrincipal.style.opacity = 1;
      video.style.display = 'none'; // Oculta o vídeo
    }, 100);
  }
});