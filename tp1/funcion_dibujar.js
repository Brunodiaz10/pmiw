


function DibujarRectangulos(X, Y, rectAncho, rectAlto) {
  // Dibujo de rectángulos horizontales
  for (let i = 0; i < 2; i++) {
    for (let y = 0; y < cantX; y++) {
      if (y % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(X + (i * 200), Y + y * rectAlto, rectAncho, rectAlto);
    }
  }
  
  // Dibujo de rectángulos verticales
  for (let i = 0; i < 2; i++) {
    for (let x = 0; x < cantX; x++) {
      if (x % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(X + (i * 200) + x * rectAlto, Y + 200 - (i * 200), rectAlto, rectAncho);
    }
  }
}

function DibujarEllipse(centroX, centroY, maxTam) {
  for (let x = 0; x < cantC; x++) {
    if (x % 2 === 0) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(centroX, centroY, maxTam - x * 40, maxTam - x * 40);
  }
}
