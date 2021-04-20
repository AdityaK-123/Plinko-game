class Ground {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var Gpos =this.body.position;
      push();
      rectMode(CENTER);
      fill(rgb(222,184,135));
      rect(Gpos.x, Gpos.y, this.width, this.height);
      pop();
    }


  };