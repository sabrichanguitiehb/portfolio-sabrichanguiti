let cols = 20;
let rows = 20;
let spacing = 30;
let waveSpeed = 0.05;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
  background(0, 0, 60);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push();

      let xpos = spacing / 2 + x * spacing;
      let ypos = spacing / 2 + y * spacing;

      // calculate angle for wave
      // (x * small scale) + (y * small scale) + (frameCount (for animation over  time) * waveSpeed)
      let angle = (x * 0.3) + (y * 0.1) + (frameCount * waveSpeed);
      
      let yOffset = map(sin(angle), -1, 1, -15, 15);
      let rotation = sin(angle) * 0.5;

      // y-offset: sine wave for vertical movement
      translate(xpos, ypos + yOffset);
      rotate(rotation);

      let hueVal = map(y, 0, rows, 160, 0);
      fill(hueVal, 70, 80);
      rect(0, 0, 18, 12);

      pop();
    }
  }
}