const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImg;
var ball;
var ground;

function preload(){
  dustbinImg=loadImage("dustbin.png")
}
function setup() {
    createCanvas(1500, 600);
    engine = Engine.create();
    world = engine.world;
    ball = new PAPER(100,200,20);
    ground = new GROUND(750,580,1500,10);
    dustbin1 = new DUSTBIN (1100,570)
    dustbin1.addImage("dustbinImg")
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    dustbin.display();
    dustbin2.display();
    dustbin3.display();
    ball.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
