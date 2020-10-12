
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3, ground, ball;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(600,670);
  ground = new ground1(400,680,800,10);	
  
  ball = new paper(150,600,40);
  
Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background('grey');
  
  Engine.update(engine);
  
  ball.display();
  bin1.display();
  ground.display();
  
  // drawSprites();
 
}

function keyPressed(){

	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x: 85, y: -120})
	}
}



