function preload(){
  car_img = loadImage("images/car.png");
  car2_img = loadImage("images/download.png");
}

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  var formObj;
  var background1, background2;
}

function draw() {
  background(255, 0, 0);

  
  background2 = createSprite(displayWidth/4, displayHeight/2, 50, 50);
  background2.addImage("background2", car_img);
  background1 = createSprite(displayWidth/4+displayWidth/2, displayHeight/4, 50, 50);
  background1.addImage("background1", car2_img);
  formObj = new Form();
  formObj.display();
  drawSprites();
}