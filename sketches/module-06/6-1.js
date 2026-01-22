let x = 0;
function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    noStroke();
}

function draw() {
    background(0);
    for (let i = 100; i > 0; i--) {
        fill(0, 100, i);
        triangle(x + i, 0, x + 50 + i, height / 2, x + i, height);
    }
    if (x > width) {
        x = -150;
    }
    x += 2;
}