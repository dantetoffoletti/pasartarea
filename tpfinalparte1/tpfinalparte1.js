//MAAQUINA DE ESTADO
let estado_general = 'INICIALES';


let boton;


let x = [0, 800, 800*2, 800*3, 800*4, 800*5, 800*6, 800*7, 800*8, 800*9, 800*10, 800*11, 800*12, 800*13];



//let x = [imgIniciales_pos, d1_pos, d1_finalMalo_pos, d1d1_pos, d1_finalHeroico_pos, d1d1d2_pos, d1d1d2_finalMalo_pos, d1d1d2_finalBueno_pos, d2_pos, d2_finalBueno_pos, d2d1_pos, d2d1_finalMalo_pos, d2d1_finalBueno_pos];

let imgIniciales_pos = 0;

let d1_pos = 1;

let d1_finalMalo_pos = 2;

let d1d1_pos = 3;

let d1_finalHeroico_pos = 4;

let d1d1d2_pos = 5;

let d1d1d2_finalMalo_pos = 6;

let d1d1d2_finalBueno_pos = 7;

let d2_pos = 8;

let d2_finalBueno_pos = 9;

let d2d1_pos = 10;

let d2d1_finalMalo_pos = 11;

let d2d1_finalBueno_pos = 12;

let sprites_pos = 13;















//BOTON
let cambio_boton = 0;


let cambio_areaX = 0;
let cambio_areaY = 0;


let cambio_ancho = 0;
let cambio_alto = 0;


let pos_bici = 0;


let cambio_de_imagen = 0;

// PANTALLA ACTUAL

//let pantallaActual = 2;





// SPRITES 

let vel_bici = 0;

let sprites_cant = 6;
let sprites = [];

// cambio de Sprites
let sprites_num = 0;





// IMAGENES INICIALES

let imgn_inicial_cant = 3;
let imgn_inicial = [];

// cambio de Imagenes iniciales
let imgn_inicial_num = 0;






// DESICION1

let camino1_cant = 2;
let camino1 = [];

// cambio de Imagenes Desicion 1
let imgn_camino1_num = 0;
//



//DESICION1 FINAL MALO
let camino1_finalMalo_cant = 3;
let camino1_finalMalo = [];

// cambio de Imagenes Desicion1 Final Malo
let imgn_camino1_finalMalo_num = 0;




// DESICION1D1
let camino1_d1_cant = 3;
let camino1_d1 = [];

// cambio de Imagenes Desicion1D1
let  imgn_camino1_d1_num = 0;
//
let tempo_d1_d1 = 0;



// DESICION1 FINAL HEROICO

let camino1_finalHeroico_cant = 3;
let camino1_finalHeroico = [];

// cambio de Imagenes Desicion1 Final Heroico
let imgn_camino1_finalHeroico_num = 0;



// DESICION1D1D2

let camino1_d1_d2_cant = 3;
let camino1_d1_d2 = [];

// cambio de Imagenes Desicion1 D1 D2
let imgn_camino1_d1_d2_num = 0;



// DESICION1D1D2 FINAL MALO

let camino1_d1_d2_finalMalo_cant = 2;
let camino1_d1_d2_finalMalo = [];

// cambio de Imagenes Desicion1 D1 D2 Final Malo
let imgn_camino1_d1_d2_finalMalo_num = 0;



// DESICION1D1D2 FINAL BUENO

let camino1_d1_d2_finalBueno_cant = 2;
let camino1_d1_d2_finalBueno = [];

// cambio de Imagenes Desicion1 D1 D2 Final Bueno
let imgn_camino1_d1_d2_finalBueno_num = 0;



// DESICION2

let camino2_cant = 3;
let camino2 = [];

// cambio de Imagenes Desicion2
let imgn_camino2_num = 0;



// DESICION2 FINAL BUENO

let camino2_finalBueno_cant = 4;
let camino2_finalBueno = [];

// cambio de Imagenes Desicion2 Final Bueno
let imgn_camino2_finalBueno_num = 0;



// DESICION2 D1

let camino2_d1_cant = 2;
let camino2_d1 = [];

// cambio de Imagenes Desicion2 D1

let imgn_camino2_d1_num = 0;



// DESICION2 D1 FINAL MALO

let camino2_d1_finalMalo_cant = 3;
let camino2_d1_finalMalo = [];

// cambio de Imagenes Desicion2 D1 Final Malo

let imgn_camino2_d1_finalMalo_num = 0;



// DESICION2 D1 FINAL BUENO

let camino2_d1_finalBueno_cant = 3;
let camino2_d1_finalBueno = [];

// cambio de Imagenes Desicion2 D1 Final Bueno
let imgn_camino2_d1_finalBueno_num = 0;








function preload() {

  precarga();
}


function setup() {
  createCanvas(800, 450);
}


function draw() {
    background(0);


// image(sprite[1], 200, 270, 800, 450);
 
 
 
 
 vel_bici += 2;

 // if(vel_bici >=  1050 && cambio_de_imagen == sprites_pos){vel_bici = -150;}


 






if(vel_bici <= 1050){
cambio_de_imagen = sprites_pos;
}


if(vel_bici >= 1050 ){ cambio_de_imagen = imgIniciales_pos;}


//sprites_img();



animacion_bici();


  /*
if(cambio_de_imagen == 0){tempo_d1_d1 ++ ;}
   if(tempo_d1_d1 == 2) {imgn_camino1_d1_num = 0;}
   */




  /*
if(imgn_inicial_num == 3 && mouseX > 400 && mousePressed){estado_general = 'D1D1';}
   
   if(estado_general == 'D1D1'){cambio_de_imagen + 1;}
   */
  //  cambio_de_imagen = 1;


  imgnes_iniciales();

  imgnes_cam1();

  imgnes_cam1_finalMalo();

  imgnes_cam1_d1();

  imgnes_cam1_finalHeroico();

  imgnes_cam1_d1_d2();

  imgnes_cam1_d1_d2_finalMalo();

  imgnes_cam1_d1_d2_finalBueno();

  imgnes_cam2();

  imgnes_cam2_finalBueno();

  imgnes_cam2_d1();

  imgnes_cam2_d1_finalMalo();

  imgnes_cam2_d1_finalBueno();


  clicBotonSiguiente();






   if ( cambio_de_imagen == sprites_pos ||
   
   
   imgn_inicial_num == 2 ||
  
    
    imgn_camino1_num == 1 ||
    
    imgn_camino1_d1_num == 2 ||
    
    imgn_camino1_d1_d2_num == 2 ||
    
    imgn_camino2_num == 2 ||
    
    imgn_camino2_d1_num == 1
    
    ) {
    
    cambio_boton = 400;

    cambio_areaX = 570 ;
  
    cambio_areaY = 370;

    cambio_ancho = 590;

    cambio_alto = 375;
    } 
    else{
    cambio_boton = 0;

    cambio_areaX = 0;

    cambio_areaY = 0;

    cambio_ancho = 0;

    cambio_alto = 0;
    
  }
  









  //boton_cambio();

  //  texto();


}











function mousePressed() {




  //IMAGENES INICIALES








  if (cambio_de_imagen == imgIniciales_pos && clicBotonSiguiente()) {

    imgn_inicial_num++;
    /*      else if( clicBotonSiguiente() ){
     imgn_inicial_num++;
     
     return;
     }
     */

    if (imgn_inicial_num >= imgn_inicial_cant &&
      mouseX <= 400
      ) {
      imgn_inicial_num = 2;
      cambio_de_imagen = d1_pos;
      
      imgn_inicial_num = 0;

         
      
    } else if (imgn_inicial_num >= imgn_inicial_cant &&
      mouseX >= 400 ) {
      imgn_inicial_num = 2;
      cambio_de_imagen = d2_pos;
      
      imgn_inicial_num = 0;
      
      
return;

    }




    //area_boton(625,729,16,158)

    return;
  }





  //IMAGENES DESICION1

  if ( cambio_de_imagen == d1_pos && clicBotonSiguiente()) {



    imgn_camino1_num++;






    if (imgn_camino1_num >= camino1_cant && mouseX <= 400) {
      imgn_camino1_num = 1;


imgn_camino1_num = 0;


      cambio_de_imagen = d1_finalMalo_pos;
    } else if (imgn_camino1_num >= camino1_cant && mouseX >= 400) {

      imgn_camino1_num = 1;
      
      imgn_camino1_num = 0;

      cambio_de_imagen = d1d1_pos;
    }



    return;
  }





  //IMAGENES DESICION1 FINAL MALO

  if (cambio_de_imagen == d1_finalMalo_pos && clicBotonSiguiente()) {
    imgn_camino1_finalMalo_num++;

    if (imgn_camino1_finalMalo_num >= camino1_finalMalo_cant) {
      imgn_camino1_finalMalo_num = 2;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }


    return;
  }





  // DESICION1 D1


  if (cambio_de_imagen == d1d1_pos && clicBotonSiguiente()) {


    imgn_camino1_d1_num++;






    if (imgn_camino1_d1_num >= camino1_d1_cant && mouseX >= 400) {
      imgn_camino1_d1_num = 2;


imgn_camino1_d1_num = 0;


      cambio_de_imagen = d1_finalHeroico_pos;
    } else if (imgn_camino1_d1_num >= camino1_d1_cant && mouseX <= 400) {

      imgn_camino1_d1_num = 2;


imgn_camino1_d1_num = 0;

      cambio_de_imagen = d1d1d2_pos;
    }

    return;
  }






  //DESICION1 FINAL HEROICO

  if (cambio_de_imagen == d1_finalHeroico_pos && clicBotonSiguiente()) {
    imgn_camino1_finalHeroico_num++;

    if (imgn_camino1_finalHeroico_num == 2) {
      sonido.play();
    }

    if (imgn_camino1_finalHeroico_num >= camino1_finalHeroico_cant) {
      imgn_camino1_finalHeroico_num = 2;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }



    return;
  }




  // DESICION1 D1 D2

  if (cambio_de_imagen == d1d1d2_pos && clicBotonSiguiente()) {


    imgn_camino1_d1_d2_num++;



    if (imgn_camino1_d1_d2_num >= camino1_d1_d2_cant && mouseX >= 400) {
      imgn_camino1_d1_d2_num = 2;

imgn_camino1_d1_d2_num = 0;


      cambio_de_imagen = d1d1d2_finalBueno_pos;
    } else if (imgn_camino1_d1_d2_num >= camino1_d1_d2_cant && mouseX <= 400) {
      imgn_camino1_d1_d2_num = 2;


 imgn_camino1_d1_d2_num = 0;


      cambio_de_imagen = d1d1d2_finalMalo_pos;
    }


    return;
  }



  //DESICION1 D1 D2 FINAL MALO

  if (cambio_de_imagen == d1d1d2_finalMalo_pos && clicBotonSiguiente()) {
    imgn_camino1_d1_d2_finalMalo_num++;

    if (imgn_camino1_d1_d2_finalMalo_num >= camino1_d1_d2_finalMalo_cant) {
      imgn_camino1_d1_d2_finalMalo_num = 1;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }


    return;
  }



  //DESICION1 D1 D2 FINAL BUENO

  if (cambio_de_imagen == d1d1d2_finalBueno_pos && clicBotonSiguiente()) {
    imgn_camino1_d1_d2_finalBueno_num++;

    if (imgn_camino1_d1_d2_finalBueno_num >= camino1_d1_d2_finalBueno_cant) {
      imgn_camino1_d1_d2_finalBueno_num = 1;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }


    return;
  }






  //DESICION2


  if (cambio_de_imagen == d2_pos && clicBotonSiguiente() && clicBotonSiguiente()) {


    imgn_camino2_num++;



    //if(){ cambio_de_imagen = d2_finalBueno_pos; imgn_camino2_num = 0;}

    //if(){  cambio_de_imagen = d2d1_pos; imgn_camino2_num = 0;}



    if (imgn_camino2_num >= camino2_cant && mouseX <= 400) {
      imgn_camino2_num = 2;
      
      
        imgn_camino2_num = 0;

      cambio_de_imagen = d2_finalBueno_pos;
    } else if (imgn_camino2_num >= camino2_cant && mouseX >= 400) {
      
      
        imgn_camino2_num = 0;
      
      imgn_camino2_num = 2;
      cambio_de_imagen = d2d1_pos;
    }


    return;
  }




  // DESICION2 FINAL BUENO

  if (cambio_de_imagen == d2_finalBueno_pos && clicBotonSiguiente()) {
    imgn_camino2_finalBueno_num++;

    if (imgn_camino2_finalBueno_num >= camino2_finalBueno_cant) {
      imgn_camino2_finalBueno_num = 3;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }

    return;
  }



  // DESICION2 D1

  if (cambio_de_imagen == d2d1_pos && clicBotonSiguiente()) {


    imgn_camino2_d1_num++;



    //if(){   cambio_de_imagen = d2d1_finalMalo_pos;  imgn_camino2_d1_num = 0;}
    //if(){  cambio_de_imagen = d2d1_finalBueno_pos;  imgn_camino2_d1_num = 0;}


    if (imgn_camino2_d1_num >= camino2_d1_cant && mouseX >= 400) {
      imgn_camino2_d1_num = 1;

 imgn_camino2_d1_num = 0;

      cambio_de_imagen = d2d1_finalMalo_pos;
    } else if (imgn_camino2_d1_num >= camino2_d1_cant && mouseX <= 400) {

      
       imgn_camino2_d1_num = 0;
      
      imgn_camino2_d1_num = 1;
      cambio_de_imagen = d2d1_finalBueno_pos;
    }


    return;
  }


  // DESICION2 D1 FINAL MALO

  if (cambio_de_imagen == d2d1_finalMalo_pos && clicBotonSiguiente()) {
    imgn_camino2_d1_finalMalo_num++;

    if (imgn_camino2_d1_finalMalo_num >= camino2_d1_finalMalo_cant) {
      imgn_camino2_d1_finalMalo_num = 2;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }


    return;
  }




  //DESICION2 D1 FINAL BUENO

  if (cambio_de_imagen == d2d1_finalBueno_pos && clicBotonSiguiente()) {
    imgn_camino2_d1_finalBueno_num++;

    if (imgn_camino2_d1_finalBueno_num >= camino2_d1_finalBueno_cant) {
      imgn_camino2_d1_finalBueno_num = 2;

      cambio_de_imagen = imgIniciales_pos;

      reinicio_de_variables();
    }

    return;
  }
}
