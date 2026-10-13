function precarga() {




  //IMAGENES INICIALES

  for (d=0; d < imgn_inicial_cant; d++) {
    let imagen = loadImage("data/imgn_inicial_" + d + ".png");
    imgn_inicial.push(imagen);
  }


  //IMAGENES DESICION1

  for (d=0; d < camino1_cant; d++) {
    let imagen = loadImage("data/desicion1/imgn_" + d + "_d1.png");
    camino1.push(imagen);
  }



  //IMAGENES DESICION1 FINAL MALO

  for (d=0; d < camino1_finalMalo_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1_finalMalo/imgn_" + d + "_d1_finalMalo.png");
    camino1_finalMalo.push(imagen);
  }



  //IMAGENES DESICION1 D1

  for (d=0; d < camino1_d1_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1d1/imgn_" + d + "_d1d1.png");
    camino1_d1.push(imagen);
  }



  //IMAGENES CAMINO1 D1 FINAL HEROICO

  for (d=0; d < camino1_finalHeroico_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1d1/desicion1d1_finalHeroico/imgn_" + d + "_d1d1_finalHeroico.png");
    camino1_finalHeroico.push(imagen);
  }



  //IMAGENES CAMINO1 D1 D2

  for (d=0; d < camino1_d1_d2_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1d1/desicion1d1d2/imgn_" + d + "_d1d1d2.png");
    camino1_d1_d2.push(imagen);
  }




  //IMAGENES CAMINO1 D1 D2 FINAL MALO

  for (d=0; d < camino1_d1_d2_finalMalo_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1d1/desicion1d1d2/desicion1d1d2_finalMalo/imgn_" + d + "_d1d1d2_finalMalo.png");
    camino1_d1_d2_finalMalo.push(imagen);
  }




  //IMAGENES CAMINO1 D1 D2 FINAL BUENO

  for (d=0; d < camino1_d1_d2_finalBueno_cant; d++) {
    let imagen = loadImage("data/desicion1/desicion1d1/desicion1d1d2/desicion1d1d2_finalBueno/imgn_" + d + "_d1d1d2_finalBueno.png");
    camino1_d1_d2_finalBueno.push(imagen);
  }



  //IMAGENES DESICION2

  for (d=0; d < camino2_cant; d++) {
    let imagen = loadImage("data/desicion2/imgn_" + d + "_d2.png");
    camino2.push(imagen);
  }



  //IMAGENES DESICION2 FINAL BUENO

  for (d=0; d < camino2_finalBueno_cant; d++) {
    let imagen = loadImage("data/desicion2/desicion2_finalBueno/imgn_" + d + "_d2_finalBueno.png");
    camino2_finalBueno.push(imagen);
  }



  //IMAGENES DESICION2 D1

  for (d=0; d < camino2_d1_cant; d++) {
    let imagen = loadImage("data/desicion2/desicion2d1/imgn_" + d + "_d2d1.png");
    camino2_d1.push(imagen);
  }



  //IMAGENES DESICION2 D1 FINAL MALO

  for (d=0; d < camino2_d1_finalMalo_cant; d++) {
    let imagen = loadImage("data/desicion2/desicion2d1/desicion2d1_finalMalo/imgn_" + d + "_d2d1_finalMalo.png");
    camino2_d1_finalMalo.push(imagen);
  }



  //IMAGENES DESICION2 D1 FINAL BUENO

  for (d=0; d < camino2_d1_finalBueno_cant; d++) {
    let imagen = loadImage("data/desicion2/desicion2d1/desicion2d1_finalBueno/imgn_" + d + "_d2d1_finalBueno.png");
    camino2_d1_finalBueno.push(imagen);
  }









  // SPRITES
  
  for (d=0; d < sprites_cant; d++){
  let imagen = loadImage ("data/sprites/bici" + d + ".png")
  sprites.push(imagen);
}





  // AUDIO
  sonido = loadSound("data/audio/videoplayback.m4a");


  // BOTON
  boton = loadImage("data/boton_siguiente.png");
}
