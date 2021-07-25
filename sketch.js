
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var radius=70;
function preload(){
	dustbinImg=loadImage("dustbingreen.png");
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	var option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	image(dustbinImg,1185,570,200,200);
	image(paperImg,480,370,100,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();

}

function keyPress(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyforce(paperObject.body.paperObject.body.position,{x:130,y:145});
	
	}
	
}