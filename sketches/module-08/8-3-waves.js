let cols = 25;
let rows = 25;
let spacing = 24;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
  background(0);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push();

      let xpos = spacing / 2 + x * spacing;
      let ypos = spacing / 2 + y * spacing;

      // Noise offset
      let time = frameCount * 0.01;
      let noiseVal = noise(x * 0.1, y * 0.1, time);
      let angle = noiseVal * TWO_PI + time;

      translate(xpos, ypos);
      rotate(angle);

      let hueVal = (noiseVal * 360 + frameCount) % 360;
      fill(hueVal, 80, 90);
      rect(0, 0, 10, 6);

      pop();
    }
  }
}