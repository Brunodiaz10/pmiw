function ColorRandom() {
  for (let x = 0; x < cantC; x++) {
    let ellipseTam = 240 - x * 40;

    if (MouseSobreEllipse(600, 200, ellipseTam / 2)) {
      strokeWeight(10);
      stroke(random(255), random(255), random(255)); // Contorno con color aleatorio
    } else {
      noStroke();
    }
    noFill(); // Sin relleno
    ellipse(600, 200, ellipseTam, ellipseTam);
  }
}

function MouseSobreEllipse(centroX, centroY, radio) {
  return dist(mouseX, mouseY, centroX, centroY) < radio;
}

function mousePressed() {
  lucesActivadas = !lucesActivadas; // Cambiar el estado de las luces
}
