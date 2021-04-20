class ParticleBall{
    constructer(x,y,r){
        var options={
            restitution:1,
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,225), random(0,225), random(0,225));

        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }

}