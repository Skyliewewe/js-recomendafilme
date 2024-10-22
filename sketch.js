let campoIdade;
let campoTerror;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5")
  campoTerror = createCheckbox("Gosta de terror?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Fantasmas também se divertem";
    } else {
      if (idade >= 12) {
        if(gostaDeTerror || gostaDeAventura) {
          return "O lar das crianças peculiares"
        } else{
         return "Frankenweenie"
        }
      } else {
        if (gostaDeTerror) {
          return "A Noiva Cadáver";
        } else {
          return "Edward mãos de tesoura";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "A Fera do Mar"
    } else {
      return "Detona Ralph"
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    }
  }
}
