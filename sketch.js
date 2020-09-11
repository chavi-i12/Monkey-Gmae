var monkey , monkey_running;
var banana ,bananaImage, bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var FoodGroup;
var ground, groundImage, invisibleGround;
var score;
var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(500,500);

  monkey = createSprite(100, 340, 20, 50);
  monkey.addAnimation("running", monkey_running);
  //monkey.addImage("gameOver", gameOver);
  monkey.scale=0.2;
  
  ground = createSprite(250,480,1200,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  //obstacle=createSprite(200,150,20,50);
  //obstacle.addImage(obstacleImage);
  //obstacle.scale=1;
  
}


function draw() {
background("brown");
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
      monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount)
  text("Survival Time:" + survivalTime,100,50)
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  bananaGroup = createGroup();
  
  //spawn obstacles on the ground
    spawnObstacles();

  food();  
  drawSprites();
}

function food(){
   if (frameCount % 80 === 0){
   banana=createSprite(500,200,20,50);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX=-3;
      banana.lifetime = 200;
   }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,440,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;

obstacle.scale = 0.2;
    obstacle.lifetime = 300;
 }
}