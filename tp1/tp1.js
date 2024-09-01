 let foto;
let cantX = 10;
let cantY = 10;
let cantC = 6;
let lucesActivadas = true;

function preload() {
  // Carga la imagen en la función preload
  foto = loadImage('data/F_25.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(255);
}

function draw() {
  // Dibujo de la imagen en el sketch
  image(foto, 0, 0, 400, 400);
  noStroke();
  DibujarRectangulos(400, 0, 200, 20); // Rectángulos en la parte superior derecha
  DibujarRectangulos(600, 200, 200, 20); // Rectángulos en la parte inferior derecha
  DibujarEllipse(600, 200, 240);
  
  if (lucesActivadas) {
    ColorRandom();
  }
}
