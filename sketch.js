function setup() {
  createCanvas(windowWidth, windowHeight);
  // sets the unit of angle as degree
  angleMode(DEGREES);
}

function draw() {
  background(51);
  // does something, i dont know
  translate(windowWidth / 2, windowHeight / 2);
  // rotates everything in an direction
  rotate(-90);
  
  // makes the variables and sets them 
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(4);
  
  // second arc
  stroke(224, 229, 141);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  // second stick
  push();
  rotate(secondAngle);
  line(0, 0, 100, 0);
  pop();
  
  // minute arc
  stroke(36, 240, 111);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  // minute stick
  push();
  rotate(minuteAngle);
  line(0, 0, 75, 0);
  pop();
  
  // hour arc
  stroke(174, 19, 230);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  // hour stick
  push();
  rotate(hourAngle);
  line(0, 0, 50, 0);
  pop();
  
  // centre point
  stroke(255);
  point(0, 0);
}