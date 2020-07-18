const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopter, box, ground;
var helicopterIMG, packageIMG;
var sprite1, sprite2, sprite3;


function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	helicopter = new Helicopter(350, 200);

	box = new Package(350, 200, 30, 20);

	ground = new Ground(600, 390, 1200, 20);

	sprite1 = createSprite(350, 600, 200, 20);
	sprite2 = createSprite(250, 560, 20, 100);
	sprite3 = createSprite(450, 560, 20, 100);

	Engine.run(engine);
}


function draw() {

  background(0, 0, 0);

  Engine.update(engine);

  helicopter.display();
  box.display();

  keyPressed();
  drawSprites();

}

function keyPressed() {
	if(keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(box.body, box.body.position, {x: 85, y: -85});
	}
}



