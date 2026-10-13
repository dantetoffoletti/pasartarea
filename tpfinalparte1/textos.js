function texto() {
 
  if (pantallaActual == "decisionCamino1") {
    image(imgn_inicial[3], 0, 0, 800, 450);
    textoDecisionCamino1();
  }
}
function textoDecisionCamino1() {

  // Fondo del texto
  fill(0, 0, 0, 180);
  noStroke();
  rect(50, 300, 700, 110);

  // Texto principal
  fill(255);
  textSize(22);
  textAlign(CENTER);

  text("Un auto se aproxima a gran velocidad. ¿Qué decide hacer Paperboy?", 70, 325, 660, 60);

  // Opciones
  textSize(17);
  text("1. Frenar rápidamente", 220, 390);
  text("2. Intentar esquivarlo", 570, 390);
}
