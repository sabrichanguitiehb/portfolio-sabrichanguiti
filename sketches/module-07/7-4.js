
let xPos = [];
let total = 5;
let space = 0;
let activeRace = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    space = height / total;
    textAlign(CENTER, CENTER);
    fill("white");
    for (let i = 0; i < total; i++) {
        xPos[i] = 0;
    }
}

function draw() {
    if (activeRace) {

        for (let i = 0; i < xPos.length; i++) {
            noStroke();
            if (xPos[i] >= width - space * 2 / 3) {
                activeRace = false;
                fill("darkred");
                textSize(50);
                textStyle("bold");
                text("Snail " + (i + 1) + " has won!!!", width / 2, height / 2);
                break;
            }
            if (i % 2 == 0) {
                fill("gray");
            } else {
                fill("lightgray");
            }
            rect(0, i * space, width, space);
            drawSnail(xPos[i], space / 2 + i * space, space, i + 1);
            xPos[i] += random(0, 5);
        }
    }
}




function drawSnail(x, y, sizeY, number) {
    let sizeDiff = sizeY / 10;
    noStroke();
    fill("green");
    ellipse(x + sizeY / 24, y + sizeY / 4, sizeY, sizeY / 4, 0, 0, Math.PI * 2);
    ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 2, sizeY / 4, Math.PI / 4 * 3, 0, Math.PI * 2);
    ellipse(x + sizeY / 2, y - sizeY / 16, sizeY / 8, sizeY / 4, 0, 0, Math.PI * 2);


    for (let i = 0; i < 5; i++) {
        stroke("orange");
        fill("darkorange");
        ellipse(x, y, sizeY / 1.5 - sizeDiff * i, sizeY / 1.5 - sizeDiff * i);

    }

    fill("black");
    textStyle("bold");
    textSize(sizeY / 5);
    text(number, x, y);
}