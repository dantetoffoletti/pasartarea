function precargar(){
  
 for(let p=0; p < correr_cant; p++){ 
  let imagen = loadImage("data/fox_corriendo_"+ p +".png");
   correr.push(imagen);
 }
  
  
 for(let p=0; p < nube_cant; p++){
  let imagen = loadImage("data/nube_" + p + ".png");
  nube.push(imagen)
 }
 
 
 
}
