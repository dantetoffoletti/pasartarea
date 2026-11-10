class Personaje{


 constructor(){
  this.posX = 400;
  this.posY = 350;
  
  this.vida = true;
   
    
  }



dibujar(){
  fill(200,200,0);
 ellipse(this.posX,this.posY,50,100);   
 this.mover();
}



mover(){
  
  
   if (keyIsDown(RIGHT_ARROW)) {
        this.posX += 5;
      } 
   if (keyIsDown(LEFT_ARROW)) {
        this.posX -= 5;
      }
    
}






}
