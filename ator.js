  //Posição x do ator
let posicaoXAtor = 100;
let posicaoYAtor = 340;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, posicaoXAtor, posicaoYAtor, 150,80);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    posicaoYAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    posicaoYAtor += 5;
  }
    posicaoYAtor = constrain(posicaoYAtor,-50, 340);
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, posicaoXAtor, posicaoYAtor + 50, 30)
  
    if(colisao){
      colidiu();
      if(maiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  posicaoYAtor = 340;
}

function incluiPontos(){
  stroke(255);
  textSize(16);
  text(meusPontos, width/5, 22);
  fill(255);
}

function marcaPontos(){
  if(posicaoYAtor < -10){
    meusPontos++;
    posicaoYAtor = 340;
  }
}

function maiorQueZero(){
  return meusPontos > 0;
}
