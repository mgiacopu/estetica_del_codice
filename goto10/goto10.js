let scaling, px, py;

function setup() {
    createCanvas(600, 600);
    background(0);
    scaling = 30;
    px = 0;
    py = 0;
}

function draw() {
    translate(px*scaling, py*scaling);
    stroke(255);
    if (random() > 0.5) {
        line(0, 0, scaling, scaling);
    } else {
        line(scaling, 0, 0, scaling);
    }
    px++;
    if (px * scaling > width) {
        px = 0;
        py++;
    }
    if (py * scaling > height) {
        noLoop();
    }
}