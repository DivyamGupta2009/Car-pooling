function setup() {
  createCanvas(displayWidth, displayHeight);
  var formObj;
}

function draw() {
  background(255, 0, 0);
  
  var formObj = new Form();
  formObj.display();
}