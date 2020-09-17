
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,box1,box2,box3,paper

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground=new Ground(400,600,1000,10)
	box1=new DustBin(600,585,200,20)
	box2=new DustBin(690,545,100,20)
	box3=new DustBin(500,545,100,20)
	paper=new PaperObject(100,400,35)
}	

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display(0);
  box2.display(90);
  box3.display(90);
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:-185});
	}
}





