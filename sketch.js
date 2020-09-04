var fixedRect, movingRect;
var gameObject1, gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(500,500,50,40)
  gameObject2=createSprite(600,500,80,20)
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
gameObject2.x=mouseX
gameObject2.y=mouseY
if (isTouching(gameObject1,gameObject2)){
  gameObject1.shapeColor=("blue")
  gameObject2.shapeColor=("blue")
}
else{
  gameObject1.shapeColor=("green")
  gameObject2.shapeColor=("green")
}
  drawSprites();
}
