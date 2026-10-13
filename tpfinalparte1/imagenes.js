//IMAGENES INICIALES

function imgnes_iniciales() {
  
  

  image(imgn_inicial[imgn_inicial_num],x[cambio_de_imagen] , 0, 800, 450);
}



//IMAGENES DESICION1

function  imgnes_cam1() {

  image(camino1[imgn_camino1_num], 800-x[cambio_de_imagen], 0, 800, 450);
}


//IMAGENES DESICION1 FINAL MALO
function imgnes_cam1_finalMalo(){
  
 image(camino1_finalMalo[imgn_camino1_finalMalo_num],800*2-x[cambio_de_imagen],0,800,450); 
   
}




//IMAGENES DESICION1 D1
function imgnes_cam1_d1(){
  //a
 image(camino1_d1[imgn_camino1_d1_num],800*3-x[cambio_de_imagen],0,800,450); 
   
}




 



//IMAGENES DESICION1 FINAL HEROICO
function imgnes_cam1_finalHeroico(){
  
 image(camino1_finalHeroico[imgn_camino1_finalHeroico_num],800*4-x[cambio_de_imagen],0,800,450); 
   
}


//IMAGENES DESICION1 D1 D2
function imgnes_cam1_d1_d2(){
  
 image(camino1_d1_d2[imgn_camino1_d1_d2_num],800*5-x[cambio_de_imagen],0,800,450); 
   
}


//IMAGENES DESICION1 D1 D2 FINAL MALO
function imgnes_cam1_d1_d2_finalMalo(){
  
 image(camino1_d1_d2_finalMalo[imgn_camino1_d1_d2_finalMalo_num],800*6-x[cambio_de_imagen],0,800,450); 
   
}



//IMAGENES DESICION1 D1 D2 FINAL BUENO
function imgnes_cam1_d1_d2_finalBueno(){
  
 image(camino1_d1_d2_finalBueno[imgn_camino1_d1_d2_finalBueno_num],800*7-x[cambio_de_imagen],0,800,450); 
   
}


//IMAGENES DESICION2
function  imgnes_cam2() {

  image(camino2[imgn_camino2_num], 800*8-x[cambio_de_imagen], 0, 800, 450);
}


//IMAGENES DESICION2 FINAL BUENO
function  imgnes_cam2_finalBueno() {

  image(camino2_finalBueno[imgn_camino2_finalBueno_num], 800*9-x[cambio_de_imagen], 0, 800, 450);
}


//IMAGENES DESICION2 D1
function  imgnes_cam2_d1() {

  image(camino2_d1[imgn_camino2_d1_num], 800*10-x[cambio_de_imagen], 0, 800, 450);
}



// IMAGENES DESICION2 D1 FINAL MALO
function  imgnes_cam2_d1_finalMalo() {

  image(camino2_d1_finalMalo[imgn_camino2_d1_finalMalo_num], 800*11-x[cambio_de_imagen], 0, 800, 450);
}



// IMAGENES DESICION2 D1 FINAL BUENO
function  imgnes_cam2_d1_finalBueno() {

  image(camino2_d1_finalBueno[imgn_camino2_d1_finalBueno_num], 800*12-x[cambio_de_imagen], 0, 800, 450);
}





//SPRITES

function  sprites_img() {

  image(sprites[1], 800*13-x[cambio_de_imagen], 270, 800, 450);
}
