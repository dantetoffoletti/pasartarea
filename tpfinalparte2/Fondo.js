class Fondo{
  
  
   constructor(){
  
    this.posY = 0;
    
    
    
  }
  
  
  dibujar(){
   fill(155);     
      
   rect(0,this.posY ,800,400); 
   rect(0,this.posY - 400,800,400); 
   
   this.regeneracionFondo();
   this.mover();
  }
  
  
  
  regeneracionFondo(){
     if(this.posY >= 400){this.posY = 0;}
  }
  
  
  
  mover(){
   this.posY += 5;
    
  }
  
  
  
  
}
