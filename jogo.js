var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var nivelJogo = window.location.search
var tempoNivel = 1500
nivelJogo.replace('?','')

if (nivelJogo == 'normal') {
  tempoNivel = 1500
}else if(nivelJogo == 'dificil'){
  tempoNivel = 1000
}else if(nivelJogo == 'hard'){
  tempoNivel = 750
}



function ajustaTela() {
  //pega a altura da janela
  altura = window.innerHeight;
  //pega largura da janela
  largura = window.innerWidth;

  console.log(altura, largura);
}

var cronometro = setInterval(function () {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosca);
    window.location.href = "win.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

ajustaTela();
var criaMosca = setInterval(function () {
  posicaoRandomica();
}, tempoNivel);
function posicaoRandomica() {
  //remover mosquito anterio caso exista
  if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove();
    if (vidas > 3) {
      window.location.href = "gameover.html";
    }
    document.getElementById("v" + vidas).src = "/imagens/coracao_vazio.png";
    vidas++;
  }
  // cria posica dos eixos aleatoria
  var posicaoY = Math.floor(Math.random() * altura) - 90;
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  //isso nao perpite que crie posicoes negativas
  posicaoX = posicaoX < 0 ? (posicaoX = 0) : posicaoX;
  posicaoY = posicaoY < 0 ? (posicaoY = 0) : posicaoY;

  console.log(posicaoY, posicaoX);
  //cria o elemento html
  var mosca = document.createElement("img");
  mosca.classList.add(tamanhoAleatorioMosca(), ladoAleatorioMosca());
  mosca.src = "/imagens/mosca.png";
  mosca.style.left = posicaoX + "px";
  mosca.style.top = posicaoY + "px";
  mosca.style.position = "absolute";
  mosca.id = "mosca";
  mosca.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosca);
}

function tamanhoAleatorioMosca() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosca1";

    case 1:
      return "mosca2";

    case 2:
      return "mosca3";
  }
}
function ladoAleatorioMosca() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}
