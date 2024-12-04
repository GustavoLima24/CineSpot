const botaoVoltar = document.querySelector('.voltar');
const popup = document.querySelector('.background_popup');
const imagens = document.querySelectorAll('.categoria-popular img, .categoria-series img, .categoria-filmes img, .categoria-top10 img, .categoria-acao img, .categoria-suspense img, .categoria-ficcao img, .categoria-animacao img, .categoria-terror img, .populares-filmes img, .recentes-filmes img, .acao-filmes img, .suspense-filmes img, .ficcao-filmes img, .animacao-filmes img, .terror-filmes img, .populares-series img, .recentes-series img, .acao-series img, .suspense-series img, .ficcao-series img, .animacao-series img, .terror-series img');

const iframe = document.getElementById('videoSrc');
const botaoAssistir = document.querySelector('button');  // Seleciona o botão "Assistir"

let temporizadorSegurando;
let segurando = false;
let movendo = false;

botaoVoltar.addEventListener('click', voltar);

imagens.forEach(imagem => {
  imagem.addEventListener('mousedown', () => {
    segurando = false;
    movendo = false;
    temporizadorSegurando = setTimeout(() => {
      segurando = true;
    }, 300);
  });

  imagem.addEventListener('mousemove', () => {
    if (temporizadorSegurando) {
      movendo = true;
    }
  });

  imagem.addEventListener('mouseup', () => {
    clearTimeout(temporizadorSegurando);
    if (!segurando && !movendo) {
      document.body.classList.add('noscroll');
      popup.style.display = 'block';
    }
    segurando = false;
    movendo = false;
  });

  imagem.addEventListener('mouseleave', () => {
    clearTimeout(temporizadorSegurando);
    segurando = false;
    movendo = false;
  });
});

function voltar() {
  // Pausa o vídeo ao redefinir a src do iframe
  const iframeSrc = iframe.src;
  iframe.src = iframeSrc;
  
  popup.style.display = 'none';
  document.body.classList.remove('noscroll');
}

// Adiciona evento de clique no botão "Assistir" para abrir o vídeo em tela cheia
botaoAssistir.addEventListener('click', () => {
  iframe.requestFullscreen();
});
