let cols = 10;
let rows = 10;
let spacing = 45;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
  background(230);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push();

      let xpos = 100 + x * spacing;
      let ypos = 100 + y * spacing;

      // Wave offset
      let angle = sin(frameCount * 0.025 + x + y);

      translate(xpos, ypos);
      rotate(angle);

      let hueVal = map(y, 0, rows, 0, 360);
      fill(hueVal, 80, 90);
      rect(0, 0, 20, 20);

      pop();
    }
  }
}
