
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  
  monkey=createSprite(40,400,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
 
  
  ground=createSprite(0,440,600,20);
  ground.x=ground.width/2;
  
  bananaGroup=createGroup();
}


function draw() {
  background(220);
  
 var survivalTime=0;
 var score=0;
  stroke("white");
  textSize(15);
  fill("white");
  text("score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time:" + survivalTime,200,50);
  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space") && monkey.y > 315){
    monkey.velocityY=-12;
  }
  
  console.log(monkey.y)
  // adding gravity to monkey.
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana=createSprite(600,320,40,10);
    banana.y = Math.round(random(180,270));
    banana.addAnimation("banana", bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=145;
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle=createSprite(600,397,30,30);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-6;
    obstacle.lifetime=150;
  }
}



