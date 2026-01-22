let radius = 250;
let layers = 8;
let spokes = 24;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noFill();
}

function draw() {

    background(0);
    translate(width/2, height/2);

    for(let i = 0; i < layers; i++){ 
        push();

        //scale different layers
        let s = map(i, 0, layers - 1, 1, 0.2);
        scale(s);

        //animate rotation
        //half of the layers rotate clockwise, half counter-clockwise
        if(i % 2 === 0) {
            rotate(frameCount * 0.5);
        } else {
            rotate(-frameCount * 0.5);
        }

        //stroke("#FFF");
        stroke(180 + i * 10, 150, 255 - i * 30);
        
        let angleStep = 360 / spokes;
        for(let j = 0; j <  spokes; j++) {
            push();
            rotate(j*angleStep);
            line(0, 0, radius, 0); 
            translate(0, radius);
            circle(0, 0, 10);
            pop();
        }

        pop();
    }
}