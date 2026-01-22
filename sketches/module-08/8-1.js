function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  // Sun
  fill("yellow");
  ellipse(0, 0, 50);

  // Planet
  rotate(frameCount);
  translate(100, 0);
  fill("blue");
  ellipse(0, 0, 30);

  // Moon 
  push();
  rotate(frameCount * 2);
  translate(40, 0);
  fill("white");
  ellipse(0, 0, 10);
  pop();
}