var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashGroup,diamondsGroup,jewelryGroup,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg,endImg);
boy.scale=0.08,0.6;
boy.x=70;
boy.y=580;



  
cashGroup=new Group();
diamondsGroup=new Group();
jewelryGroup=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashGroup.isTouching(boy)) {
      cashGroup.destroyEach();
      treasureCollection=treasureCollection + 50;
     }
    else if (diamondsGroup.isTouching(boy)) {
      diamondsGroup.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(jewelryGroup.isTouching(boy)) {
      jewelryGroup.destroyEach();
      treasureCollection= treasureCollection + 150;

      
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
      

        
        
        
        
        
        
       
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);

  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashGroup.add(cash);
  cashGroup.destroyEach();
  
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsGroup.add(diamonds);
  diamondsGroup.destroyEach();
  diamondsGroup.setVelocityYEach(0);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryGroup.add(jewelry);
  jewelryGroup.destroyEach();
  jewelryGroup.setVelocityYEach(0);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  swordGroup.destroyEach();
  swordGroup.setVelocityYEach(0);
  }
}
