class Juego {

  constructor() {
    this.personaje = new Personaje();
    this.fondo = new Fondo();
    
    this.obstaculos = [];
    
    this.agregarObstaculos();
  
  }
   
  
  agregarObstaculos(){    
    for (let i=0; i < 5 ; i++) {
      this.obstaculos.push(new Obstaculos(100*i));
    }
  }
  
  
  
    dibujar(){     
    
     background(255);
    this.dibujarFondo();
    this.dibujarObstaculos(); 
    this.dibujarPersonaje();
  }
  
  
  
  dibujarFondo(){
   this.fondo.dibujar(); 
  }
  
  
  dibujarPersonaje(){
   this.personaje.dibujar(); 
  }
  
  
  
  
  dibujarObstaculos(){
    
          
    for (let i=0; i < 5 ; i++) {
      this.obstaculos[i].dibujar();
    }    
    
    
    
  }
  
  
  
  
  
  
  
  
}
