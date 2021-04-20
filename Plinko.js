  
  class PlinkoBall {
    constructor(x,y)   {
        var options = {
            isStatic: true,
            'restitution': 0.6,
            density : 1.2,
            'friction': 1
        }
        this.d=10;

        this.body = Bodies.circle(x,y,this.d,options);
        stroke("black")
        strokeWeight(3)
        fill(rgb(255,207,213));
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,this.d,this.d);
            pop();
        }

}