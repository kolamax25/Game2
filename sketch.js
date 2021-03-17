var p1, p2;

var uzi, bullets, bat;
var uzii, bati;

var blaster, ray, acid;
var blasteri, acidi;

var plate1, plate2, plate3, plate4, plate5 

var hp1, hp2;
var sd1, sd2;

function preload(){

  uzii = loadImage("Sprites/UZI.png");
  bati = loadImage("Sprites/Metal Bat.png");
  blasteri = loadImage("Sprites/Blaster.png");
  acidi = loadImage("Sprites/acid.png");
}

function setup() {
  createCanvas(1600,950);

  
  p1 = createSprite(400, 142.5, 30, 75);
  p1.shapeColor = "blue"
  p2 = createSprite(1200, 742, 30, 75);
  p2.shapeColor = "yellow"

  plate1 = createSprite(400, 800, 500, 40);
  plate2 = createSprite(1200, 800, 500, 40);
  plate3 = createSprite(400, 200, 500, 40);
  plate4 = createSprite(1200, 200, 500, 40);
  plate5 = createSprite(800, 500, 500, 40);
  
  plate1.shapeColor = "Brown"
  plate2.shapeColor = "Brown"
  plate3.shapeColor = "Brown"
  plate4.shapeColor = "Brown"
  plate5.shapeColor = "Brown"

  

  hp1 = createSprite(10, 475, 10, 500)
  hp1.shapeColor = "red"

  sd1 = createSprite(30, 475, 10, 500)
  sd1.shapeColor = rgb(255, 229, 180);
  

  sd2 = createSprite(1570, 475, 10, 500)
  sd2.shapeColor = rgb(255, 229, 180);

  hp2 = createSprite(1590, 475, 10, 500)
  hp2.shapeColor = "red"

}

function draw() {
  background("skyblue");  
  drawSprites();

  

  p1Movement();
  p2Movement();

  //sprite collide

  p1.collide(plate1);
  p1.collide(plate2);
  p1.collide(plate3);
  p1.collide(plate4);
  p1.collide(plate5);

  p2.collide(plate1);
  p2.collide(plate2);
  p2.collide(plate3);
  p2.collide(plate4);
  p2.collide(plate5);


  console.log(p1.y)

  
  
  
}

function p1Movement(){

  //jump mechanic
 

  if(keyWentDown("w")){
    p1.velocityY = -26
  }
  
  if(keyWentUp("w")){
    p1.velocityY =  10;
  }

  if(p1.velocityY === 0){
    p1.velocityY = 0
  }
 
  if(keyDown("s")){
    
    p1.rotation = 90
  }
  else{

  p1.rotation = 0
  }
  if(keyDown("a")){
    p1.x = p1.x - 25
    p1.velocityY =  10;
  }
  if(keyDown("d")){
    p1.x = p1.x + 25
    p1.velocityY =  10;
  }

}

function p2Movement(){

  if(keyWentDown("up")){
    p2.velocityY = -26
  }
  
  if(keyWentUp("up")){
    p2.velocityY =  10;
  }

  
  if(keyDown("down")){
    
    p2.rotation = 90
  }
  else{

  p2.rotation = 0
  }
  if(keyDown("left")){
    p2.x = p2.x - 25
    p2.velocityY =  10;
  }

  if(keyDown("right")){
    p2.x = p2.x + 25
    p2.velocityY =  10;
  }
}