function animacion_bici(){
  
let  mov_bici;
  
   mov_bici = 0;
  
  
  if(mov_bici < 6){
   mov_bici=floor(frameCount/5) % sprites_cant;
  }
  
  
  
  image(sprites[mov_bici], 800*13-x[cambio_de_imagen]-150 + vel_bici, 280, 128, 128);
  
  
  
  
  
  
}
