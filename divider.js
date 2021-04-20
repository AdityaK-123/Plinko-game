class Divider {
    constructor(x, y, width, height) {
      var options = {
           isStatic:true,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;

      
      World.add(world, this.body);
    }
    display(){
      var Dpos =this.body.position;
      
      push();
      rectMode(CENTER);
      strokeWeight(3);
      stroke(rgb(255,202,110));
      fill(rgb(171,39,79));
      rect(Dpos.x,Dpos.y, this.width, this.height);
      
      pop();
    }
  }