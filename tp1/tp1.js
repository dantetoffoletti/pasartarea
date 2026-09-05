



let correr_cant = 12;

let correr = [];


let nube_cant = 6;

let nube = [];

let mov_nube = 800;



function preload(){


precargar();

}
 
  

function setup() {
  createCanvas(800,600);
  
  
  
}


function draw() {
  
  background(0);
  
  
  let mov_correr ;
  
  mov_correr = 0;
  
  if (mov_correr<12){mov_correr=floor(frameCount/5)%12;}
  
  image(correr[mov_correr],200,400);
 

 

 
pos_mov_nubes(0,0,170,100,50);
pos_mov_nubes(2,175,75,200,50);
pos_mov_nubes(1,-200,20,175,25);
pos_mov_nubes(3,250,250,175,25);
  
  
}
