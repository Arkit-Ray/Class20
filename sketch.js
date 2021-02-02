var fixedRect;
var MovingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";

  MovingRect = createSprite(400,200,80,40);
  MovingRect.shapeColor = "green";
}

function draw() {
  background("black"); 
  MovingRect.y = mouseY;
  MovingRect.x = mouseX;

  if(MovingRect.x-fixedRect.x<fixedRect.width/2+MovingRect.width/2 && 
    fixedRect.x-MovingRect.x<fixedRect.width/2+MovingRect.width/2 &&
    MovingRect.y-fixedRect.y<fixedRect.height/2+MovingRect.height/2 &&
    fixedRect.y-MovingRect.y<fixedRect.height/2+MovingRect.height/2){
    fixedRect.shapeColor = "red";
    MovingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    MovingRect.shapeColor = "green";
  }
  console.log(MovingRect.x-fixedRect.x);
  drawSprites();
}