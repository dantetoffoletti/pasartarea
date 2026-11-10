class Obstaculos {

  constructor(posX ) {

    this.posX = posX;
    this.posY = -500;

    this.vel = -1;
    
  
  }


  dibujar() {
    fill(255);
    rect(this.posX, this.posY, 50, 100);
    this.mover();
 //   this.reciclarObstaculos();
  }
  
  
  
  
 /* reciclarObstaculos(){
    
    if(this.posY => 500){this.posY = -500;}
    
  }*/
  
  
  
  mover(){
    
    this.posY += 5;
    
  }
  
}
