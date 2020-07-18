class Helicopter{

    constructor(x, y) {
  
      var rect_options = {
        isStatic: true
      }
  
      this.body = Bodies.rectangle(x, y, 100, 20, rect_options);
      this.width = 100;
      this.height = 20;
  
      World.add(world, this.body); 
    }
  
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      stroke("brown");
      strokeWeight(4);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  } 