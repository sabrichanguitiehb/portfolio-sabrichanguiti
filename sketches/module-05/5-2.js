let cols = 12;
let rows = cols * 1.5;

function setup() {
    createCanvas(400, 600);
    colorMode(HSB);
    background(0);
    noLoop();
}

function draw() {
    let shapeSize = width / cols;

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {

            let randomColor = floor(random(0, 3));
            switch (randomColor) {
                case 0:
                    fill(330, 90, 100);
                    break;
                case 1:
                    fill(200, 90, 100);
                    break;
                case 2:
                    fill(280, 90, 100);
                    break;
            }
            randomShape(i * shapeSize, j * shapeSize, shapeSize);
        }
    }
}

function randomShape(x, y, s) {
    let randomShape = floor(random(0, 4));

    switch(randomShape) {
        case 0:
            circle(x + s/2, y + s/2, s);
            break;
        case 1:
            rect(x, y + s/2, s, s/2);
            break;
        case 2:
            rect(x , y, s/2, s);
            break;
        case 3:
            quad(x, y, x + s/2, y, x + s, y + s,  x+ s/2, y + s);
            break;
    }
}