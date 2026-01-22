let barHeights = [];
let n = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    colorMode(HSB);
    strokeWeight(5);
    n = width / 10;
    for (let i = 0; i < n; i += 1) {
        barHeights[i] = noise(frameCount * 0.01 + i) * height;
    }
}

function draw() {
    background(0, 0, 0);
    for (let i = 0; i < n; i += 1) {
        fill(90 + i * 7, 100, 100);
        rect(i * width / 20, height - barHeights[i], width / 20, barHeights[i]);
        barHeights[i] = noise(frameCount * 0.01 + i) * height;
    }


}