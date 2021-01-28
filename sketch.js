var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 100);
  movingRect=createSprite(400,300,100,30);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2&&
      movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
       fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
     {

     fixedRect.shapeColor="green";
     

    movingRect.shapeColor="yellow"}
  
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}