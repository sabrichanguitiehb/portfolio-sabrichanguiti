let cols = 20;
let rows = 20;
let spacing = 30;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    background(20); // Dark grey converted to HSB brightness
    let chaosLevel = map(mouseX, 0, width, 0, 0.2);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            push();

            let xpos = spacing / 2 + x * spacing;
            let ypos = spacing / 2 + y * spacing;
            
            let angle = (x + y) * 0.2 + frameCount * 0.1;
            
            let isGlitch = random(1) < chaosLevel;      
            if (isGlitch) {
                //random position and angle for glitch
                xpos += random(-10, 10);
                ypos += random(-10, 10);
                angle = random(TWO_PI);
            }

            translate(xpos, ypos);
            rotate(angle);

            if (isGlitch) {
                fill(random(360), 10, 100); 
                rect(0, 0, 45, 2);
            } else {
                // change color based on y position
                let hueVal = map(y, 0, rows, 220, 260);
                fill(hueVal, 80, 80);
                rect(0, 0, 18, 12);
            }

            pop();
        }
    }
}