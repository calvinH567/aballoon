var airBalloon,airIMG
var database, xRef, yRef;
var xChange,yChange = 0;
var backgroundw

database = firebase.database();
xRef = database.ref("x");
yRef = database.ref("y");
function preload(){
  airIMG=loadImage("Balloon.png");
  backgroundw = loadImage("bg.png");
 
}

function setup() {
  createCanvas(1500,750);
  
  airBalloon=createSprite(800,200,150,150);
  airBalloon.addImage(airIMG);
 // airIMG.scale=0.15;

}

function draw() {
  background(backgroundw);
  drawSprites();
  if(keyDown(UP_ARROW)){
    airBalloon.y= airBalloon.y - 10;
  }
  if(keyDown(DOWN_ARROW)){
    airBalloon.y= airBalloon.y + 10;
  }
  if(keyDown(LEFT_ARROW)){
    airBalloon.x=airBalloon.x - 10;
  }
  if(keyDown(RIGHT_ARROW)){
    airBalloon.x=airBalloon.x + 10;
  }
}