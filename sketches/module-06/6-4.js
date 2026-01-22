let h = 0;
function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    noStroke();
}
function mousePressed() {
    for (let i = 0; i < 10; i++) {
        let size = random(2, 10);
        let x = mouseX + random(-50, 50);
        let y = mouseY + random(-50, 50);
        fill(h % 360, 100, 200);
        star(x, y, size, size * 2, 5);
        h += 2;
    }
}