let size = 50;
let h = 0;
let sizeDiff = 1;
let shape = true;
let particles = [];
let verraden = false;
let trustDistance = 100;
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-1, 1),
            vy: random(-1, 1),
            size: random(5, 12)
        });
    }
}
function draw() {
    background(0, 0, 10, 0.2);
    k1(mouseX / 100); 
    k2(mouseY / height * 360);

    for (let i = 0; i < particles.length; i++) {
        let e = particles[i];
        e.x += e.vx * sizeDiff;
        e.y += e.vy * sizeDiff;

        if (!verraden) {
            for (let j = i + 1; j < particles.length; j++) {
                let other = particles[j];
                if (dist(e.x, e.y, other.x, other.y) < trustDistance) {
                    stroke(h, 50, 100, 0.3);
                    line(e.x, e.y, other.x, other.y);
                }
            }
            noStroke();
            fill(h, 80, 100);
            circle(e.x, e.y, e.size);
        } else {
                fill(0, 100, 100);
                rect(e.x, e.y, e.size * 1.5, e.size * 1.5);
        }
    }
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        pad1();
    }
    if (key === 'z' || key === 'z') {
        pad2();
    }
}

function pad1() {
    for (let e of particles) {
        e.x = width / 2;
        e.y = height / 2;
    }
}

function pad2() {
    verraden = !verraden;
}

function k1(size) {
    sizeDiff = size;
}
function k2(hue) {
    h = hue;
}


function receivedOSC(address, args) {
    let values = oscArgsToArray(args);
    //receives OSC messages for different addresses
    //the pads are buttons, the k's are knobs
    switch (address) {
        case "/pad1":
            pad1();
            break;
        case "/pad2":
            pad2();
            break;
        case "/k1":
            k1(values[0] / 10);
            break;
        case "/k2":
            k2(values[0] / 127 * 360);
            break;
        
    }
}