let amount = 20 + floor(random(0, 6));
let choose = random() < 0.5;
let radius;

function setup(){
createCanvas(windowWidth, windowHeight);
background(0);
colorMode(HSB);
noStroke;

let base = min(width, height);
let r1 = base * 0.1;
let r2 = base * 0.3;
radius = choose ? r2 : r1;

let middleX = width / 2;
let middleY = height / 2;

fill("green");
circle(middleX, middleY, 50);

donut(middleX, middleY, radius, 20);
}

function donut(middleX, middleY, r, n) {

    for (let i = 0; i < n; i++) {
        let a = map(i, 0, n, 0, TWO_PI);
        a += random(-0.03, 0.03);

        let x = middleX + cos(a) * r;
        let y = middleY + sin(a) * r;

        fill("purple");
        circle(x, y, 50);
    }
}

