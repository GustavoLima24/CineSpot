const contentData = {
    ATeoriaDeTudo: {
      videoSrc: 'Videos/Trailers/Filmes/ATeoriaDeTudo.mp4',
      texto: 'A Teoria De Tudo'
    },
    ForAllMankind: {
      videoSrc: 'Videos/video2.webm',
      texto: 'Texto2'
    },
    PerdidoEmMarte: {
      videoSrc: 'Videos/video3.webm',
      texto: 'Texto3'
    }
  };

function changeContent(key) {
    const data = contentData[key];
    document.getElementById('videoSource').src = data.videoSrc;
    document.getElementById('trailer').load();
    document.getElementById('filmName').innerText = data.texto;
}  