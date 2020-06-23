const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var polygon;
var block1,block2,block3,block4,block5,block6;
var backgroundImg;
var score;

function preload(){ 
    getBackgroundImage();
}
function setup() {
  createCanvas(800,400);
  var engine= Engine.create();
  var world=engine.World;
  polygon= new Polygon(100,300,50);
  stand= new Stand(500,300);
  block1= new Block(450,250);
  block2= new Block(500,250);
  block3= new Block(550,250);
  block4= new Block(475,200);
  block5= new Block(525,200);
  block6= new Block(500,150);
  catapult= new Catapult(polygon.body,{x:100,y:300});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  } 
  text("Score:"+score);
  Engine.update(engine);
  drawSprites();
  polygon.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  catapult.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  catapult.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(bird.body);
  }
}
async function getBackgroundImage(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour< 19){
      bg= "sprites/bg.png";
  }
  else{
      bg="sprites/bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}
