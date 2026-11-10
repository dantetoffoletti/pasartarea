let juego;


function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}


function draw() {
  juego.dibujar();
}
