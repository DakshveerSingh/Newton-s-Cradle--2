const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload(){}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Pendulumn(windowWidth/2-30*2,windowHeight - 100,rgb(0));
	bob2 = new Pendulumn(windowWidth/2-30,windowHeight - 100,rgb(0));
	bob3 = new Pendulumn(windowWidth/2,windowHeight - 100,rgb(0));
	bob4 = new Pendulumn(windowWidth/2+30,windowHeight - 100,rgb(0));
	bob5 = new Pendulumn(windowWidth/2+30*2,windowHeight - 100,rgb(0));

	rope1 = new Sling(bob1.body,{x: windowWidth/2-30*2,y: bob1.body.position - 300});
	rope2 = new Sling(bob2.body,{x: windowWidth/2-30,y: bob1.body.position - 300});
	rope3 = new Sling(bob3.body,{x: windowWidth/2,y: bob1.body.position - 300});
	rope4 = new Sling(bob4.body,{x: windowWidth/2-30,y: bob1.body.position - 300});
	rope5 = new Sling(bob5.body,{x: windowWidth/2-30*2,y: bob1.body.position - 300});
	

	Engine.run(engine);
}


function draw() {
  background(180);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Engine.update(engine);
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX,y: mouseY});
}