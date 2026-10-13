


function clicBotonSiguiente() {

  
boton_cambio(cambio_boton);
  
  let botonX = 570 - cambio_areaX;
  let botonY = 370 - cambio_areaY;
  let botonAncho = 210 + cambio_ancho;
  let botonAlto = 75 + cambio_alto;

  if (
    mouseX >= botonX &&
    mouseX <= botonX + botonAncho &&
    mouseY >= botonY &&
    mouseY <= botonY + botonAlto
  ) {
    return true;
  } else {
    return false;
  }

}




function area_boton(a,b,c,d) {
 
  let botonX = a;
  let botonY = b;
  let botonAncho = c;
  let botonAlto = d;

  if (
    mouseX >= botonX &&
    mouseX <= botonX + botonAncho &&
    mouseY >= botonY &&
    mouseY <= botonY + botonAlto
  ) {
    return true;
  } else {
    return false;
  }
}




function boton_cambio(a){
  

  
 image(boton,570 + a ,370,210,75)
}
