let size = 0;
let h = 0;
function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    strokeWeight(2);
    colorMode(HSB);
    noFill();
}

function draw() {
    rect(width / 2, height / 2, size);
    stroke(h % 360, 100, 100);
    size += 20;
    if (size > width) {
        size = 0;
        h += 20;
    }
}