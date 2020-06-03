var edge1, edge2, edge3, ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = new Ground(400,395,800,10)
	edge1 = new Edge(650,340,20,100);
	edge2 = new Edge(550,340,20,100);
	edge3 = new Edge(600,380,80,20)
	
	ball = new Ball(200,200,30);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();

	edge1.display();
	edge2.display();
	edge3.display();

	ball.display();
	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60, y:-60});
	}
}

