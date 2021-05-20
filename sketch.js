function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="blue"
  rect2=createSprite(200,200,60,30);
  rect2.shapeColor="black"
}

function draw() {
  background("grey");  
  rect2.x=World.mouseX
  rect2.y=World.mouseY
  if(colDedect(rect1,rect2)){
    rect1.shapeColor="white"
    rect2.shapeColor="green"
  }
  else{
    rect1.shapeColor="blue"
    rect2.shapeColor="black"

  }
  
  drawSprites();
}
