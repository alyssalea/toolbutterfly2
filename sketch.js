//global variables
var sprite;
var xpos;
var ypos;

//preloading assets
function preload(){
  sprite = loadImage ("assets/butterfly.png");
  //cat = loadSound("assets/scat.mp3");
}
//this runs once at the beginning
function setup() {
  createCanvas (windowWidth,windowHeight);
  imageMode (CENTER);

  xpos = 100;
  ypos = 250;
 
}
//this loops as long as the sketch is running
function draw() {
  //frameRate(1);
  //background (250);
  //xpos = xpos + 10;
  //ypos = ypos - 10;
  console.log(xpos);//check for errors
  
  image(sprite,xpos,ypos);
}

function keyPressed() {
  
  if (keyCode === DOWN_ARROW) {
    ypos = ypos + 10;}
    
  if (keyCode === RIGHT_ARROW) {
    xpos = xpos + 10;}
    
  if (keyCode === LEFT_ARROW) {
    xpos = xpos - 10;}
    
  if (keyCode === UP_ARROW) {
    ypos = ypos - 10;}
    
}