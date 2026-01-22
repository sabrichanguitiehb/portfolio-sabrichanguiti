let pointsX = [];
let pointsY = [];
let n = 50;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    strokeWeight(5);
    for (let i = 0; i < n; i++) {
        pointsX[i] = random(width);
        pointsY[i] = random(height);
    }
}

function draw() {
    if (frameCount % 30 == 0) {
        background(0, 0, 0);
        for (let i = 0; i < n; i++) {
            noStroke();
            fill(0, 255, 0);
            circle(pointsX[i], pointsY[i], 5);
        }

        let ri = floor(random(n));
        for (let i = 0; i < 10; i++) {
            let r = floor(random(n));
            stroke(0, 255, 0);
            line(pointsX[ri], pointsY[ri], pointsX[r], pointsY[r]);
        }
    }
}