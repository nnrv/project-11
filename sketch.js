var runner , runnerImage;
var path, pathImage;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 
  //create path and add velocity
path = createSprite(200,200);
path.addImage("path.png",pathImage);
path.velocityY = 4;
path.scale = 1.2;

// craete runner 
runner = createSprite(200,270,20,50);
runner.addAnimation("running",runner_running);
runner.scale = 0.1;

//create boundaries
leftBoundary = createSprite(50,200,10,400);
leftBoundary.shapeColor = "brown";
leftBoundary.visible = false;

rightBoundary = createSprite(350,200,10,400);
rightBoundary.shapeColor = "brown";
rightBoundary.visible = false;
}

function draw() {
  background(220);

  //turning the runner right 
if(keyDown("RIGHT_ARROW") && runner.x <=350){
  runner.velocityX = 10;
}

//turning the runner left 
if(keyDown("LEFT_ARROW") && runner.x >=150 ){
  runner.velocityX = -10;
}

//resetting the path in a loop
if (path.y > 400){
  path.y  = height/2;
}


runner.collide(leftBoundary);
runner.collide(rightBoundary);
drawSprites();
}
