let terra;
let venere;
let angle;

function setup() {
    createCanvas(600, 600);
    terra = new p5.Vector(0, -200);
    venere = new p5.Vector(0, -100);
    angle = PI / 60;
    background(0);
}

function draw() {
    translate(300, 300);
    stroke(255, 255, 255, 100);
    terra.rotate(angle / 13 * 8);
    venere.rotate(angle);
    strokeWeight(1);
    line(venere.x, venere.y, terra.x, terra.y);
}