// Seleciona todos os elementos com as classes 'categoria-videos' e 'categoria-videos2'
const deslizadores = document.querySelectorAll('.categoria-popular, .categoria-series, .categoria-filmes, .categoria-top10, .categoria-acao, .categoria-suspense, .categoria-ficcao, .categoria-animacao, .categoria-terror, .populares-filmes, .recentes-filmes, .acao-filmes, .suspense-filmes, .ficcao-filmes, .animacao-filmes, .terror-filmes, .populares-series, .recentes-series, .acao-series, .suspense-series, .ficcao-series, .animacao-series, .terror-series');

// Declara variáveis para controle do deslizamento
let estaPressionado = false;
let inicioX;
let rolarEsquerda;

// Adiciona os eventos a cada deslizador
deslizadores.forEach((deslizador) => {
  // Adiciona um evento ao pressionar o botão do mouse
  deslizador.addEventListener('mousedown', (e) => {
    estaPressionado = true; // Define que o botão do mouse está pressionado
    deslizador.classList.add('active'); // Adiciona a classe 'active' ao deslizador
    inicioX = e.pageX - deslizador.offsetLeft; // Calcula a posição inicial do cursor
    rolarEsquerda = deslizador.scrollLeft; // Armazena a posição inicial de rolagem do deslizador
  });

  // Adiciona um evento ao sair do elemento com o mouse
  deslizador.addEventListener('mouseleave', () => {
    estaPressionado = false; // Define que o botão do mouse não está mais pressionado
    deslizador.classList.remove('active'); // Remove a classe 'active' do deslizador
  });

  // Adiciona um evento ao soltar o botão do mouse
  deslizador.addEventListener('mouseup', () => {
    estaPressionado = false; // Define que o botão do mouse não está mais pressionado
    deslizador.classList.remove('active'); // Remove a classe 'active' do deslizador
  });

  // Adiciona um evento ao mover o mouse
  deslizador.addEventListener('mousemove', (e) => {
    if (!estaPressionado) return; // Se o botão do mouse não estiver pressionado, interrompe a função
    e.preventDefault(); // Previne o comportamento padrão do evento
    const x = e.pageX - deslizador.offsetLeft; // Calcula a nova posição do cursor
    const andar = (x - inicioX) * 2; // Calcula a distância a ser rolada, multiplicando por 2 para velocidade
    deslizador.scrollLeft = rolarEsquerda - andar; // Ajusta a posição de rolagem do deslizador
  });
});