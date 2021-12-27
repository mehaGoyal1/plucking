
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground,tree,treeing;
var boy,boying;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	treeing = loadImage("tree.png");
	boying = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     dground = new Ground();
	 stones = new Stone(100,460,23)
	 mango1 = new Mango(600,290,34)
	 mango2 = new Mango(855,325,35)
	 mango3 = new Mango(670,260,35)
	 mango4 = new Mango(730,200,35)
	 mango5 = new Mango(710,320,36)
	 mango6 = new Mango(780,250,35)
	 mango7 = new Mango(825,173,33)
	 mango8 = new Mango(880,265,35)
	 mango9= new Mango(940,220,35)
	 mango10 = new Mango(980,305,35)

	 attach = new Throw(stones.body,{x: 100,y:465})

	 tree = createSprite(775,368)
	 tree.addImage(treeing)
	 tree.scale = 0.42

	 boy = createSprite(160,550)
	 boy.addImage(boying)
	 boy.scale = 0.125

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black")
  textSize(18)

  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)
  detectCollision(stones,mango1)


  stones.diaplay()
  dground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	attach.fly()
}
function detectCollision(lstones,lmango){
	if(lstones.body.setPosition.x - lmango.body.setPosition.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y <lmango.diametre + lstones.diamtre){
			Matter.Body.setStatic(lmango.body,false)
		}
}
function keyPressed(){
	if(KeyCode === 32){
		Matter.Body.setPosition(stones.body,{x:100,y:465})
		attach.Launch(stones.body)
	}
}