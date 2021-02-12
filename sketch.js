const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground1;

var dustbin1,dustbin2,dustbin3;

var paper1;

function setup() {

	createCanvas(1200,600);
	
	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600,570,1200,20)

	dustbin1 = new dustbin(900,550,200,250);
	//dustbin2 = new dustbin(750,510,20,100);
	//dustbin3 = new dustbin(1050,510,20,100);

  paper1 = new paper(300,400,50);

	Engine.run(engine);
}

function draw() {

  background(0);

  Engine.update(engine);

  ground1.display();

  paper1.display();

  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

}

function keyPressed(){
 if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
 }
}

