let minLeaves = 10;
let maxLeaves = 25;
let leafSize = 15;

let minBranchStep = 20;
let maxBranchStep = 100;

function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
}

function draw() {
    let x = random(minBranchStep, maxBranchStep);
    while (x < width) {
        let amountOfLeaves = int(random(minLeaves, maxLeaves)); // Random number of leaves per branch
        drawBranch(x, amountOfLeaves);
        x += random(minBranchStep, maxBranchStep);
    }
    noLoop();
}

function drawBranch(x, amountOfLeaves) {
  stroke("sienna");
  line(x, 0, x, height);

  for (let i = 0; i < amountOfLeaves; i++) {
    let y = random(0, height);
    let direction = random([1, -1]); // Leaf on left or right
    drawLeaf(x, y, direction);
  }
}

function drawLeaf(x, y, direction) {
    noStroke();
    output(direction);
    //direction is 1 or -1 so it makes cx positive (to the right) or negative (to the left)
    let cx = leafSize * direction;
    let cy = random(-leafSize, leafSize);
    let hue = random(60, 120);
    let saturation = random(50, 75);
    let brightness = random(25, 75);

    //fill("green");
    fill(hue, saturation, brightness);

    // Bezier leaf with variation
    bezier(
        x, y,
        x + cx, y - leafSize + cy,
        x + cx, y + leafSize + cy,
        x, y
    );
}