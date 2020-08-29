var fixedrectangle,movingrectangle

function setup() {
  createCanvas(1200,800);
 fixedrectangle= createSprite(200, 200, 50, 50);
 fixedrectangle.shapeColor="green";
 fixedrectangle.debug=true;
movingrectangle=createSprite(400,200,50,80);
movingrectangle.shapeColor="green";
movingrectangle.debug=true;
}

function draw() {
  background(0,0,0);  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
  fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 && 
  movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 &&
  fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
  fixedrectangle.shapeColor="red";

  movingrectangle.shapeColor="red";
}
else{
  fixedrectangle.shapeColor="green";
  movingrectangle.shapeColor="green";
}

  drawSprites();
}