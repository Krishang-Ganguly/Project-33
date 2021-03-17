
var ground;
var engine, world;
const Engine  = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

function setup() {
  createCanvas(800,400);
  rectMode(CENTER)

  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,380,800,20);

  for(var k = 0; k <=innerWidth; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width-20; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width-30; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }

  Engine.run(engine)
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function draw() {
  rectMode(CENTER)
  background("black");
  ground.display(); 
  
for(var j = 0; j < particles.length; j++){
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}

  drawSprites();
}