const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function preload(){
  bg = loadImage("snow3.jpg") 
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;


    g = {
      isStatic: true
    }
    ground = Bodies.rectangle(48,400,800,10,g)
    World.add(world,ground)


    snowflake1 = new Snowflake(200,0,50,50)
    snowflake2 = new Snowflake(250,0,30,30)
    snowflake3 = new Snowflake(150,0,30,30)
    snowflake4 = new Snowflake(300,0,0,50)
    snowflake5 = new Snowflake(20,0,0,50)
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,800,10)

  snowflake1.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
  snowflake5.display();
  drawSprites();
}



