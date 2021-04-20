
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,ball,ground,bgimage,Sidegr1,Sidegr2;

var divisions = [];
var divisionHeight = 200;
var particles = [];
var plinkos = [];




function preload(){
  bgimage = loadImage('Bg.jpg'); 
  plimg = loadImage('plinko.jpg');
  light = loadImage('neon.png');
}

function setup() {
	createCanvas(752,700);
	engine = Engine.create();
	world = engine.world;
  
  
  for(var b=2; b<=width ; b= b+80 ){
    divisions.push(new Divider(b,divisionHeight/0.5,10,divisionHeight))

  }

  for(var i=60; i<=width ; i=i+50 ){

    plinkos.push(new PlinkoBall(i,40));

  }

  for(var i=170; i<=width ; i=i+30 ){

    plinkos.push(new PlinkoBall(i,70));

  }

  for(var i=178; i<=width ; i=i+30 ){

    plinkos.push(new PlinkoBall(i,110));

  }
  

	ground = new Ground(523,515,440,20);
  Sidegr1 = new Ground(310,190,10,629);
  Sidegr2 = new Ground(734,190,10,629);
  ball = Bodies.circle(400,30,50,30);
  ball1 = Bodies.circle(550,30,50,30);

 

  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimage);
  Engine.update(engine);
  
 
  image(plimg,400,510,200,90);
  image(light,550,10,500,200);
  
  ellipse(ball.position.x,ball.position.y,50,30);
  ellipse(ball1.position.x,ball1.position.y,50,30);
 
  Sidegr1.display();
  Sidegr2.display();
  
  push();
  fill("Darkblue")
  stroke('white')
  strokeWeight(4)
  textFont("cursive")
  textSize(30);
  text("press space to start",10,250);
  pop();
  
  ground.display(); 
  for(var r=4; r<divisions.length;  r++){
    divisions[r].display();
  }
   
  for(var p=2; p<= plinkos.length; p++){
     plinkos[p].display();
  }

  for(var k=2; k< divisions.length; k++){
    plinkos[k].display();
    
 } 
 for(var g=2; g< divisions.length; g++){
  plinkos[g].display();
  
} 
if(frameCount %60 === 0){
  particles.push(new Particle(random(width/2-30 , width/2+30),6,6));
}

for(var v=0; v<particles.length; v++){
  particles[v].display();
}
 
 

}

  


  

