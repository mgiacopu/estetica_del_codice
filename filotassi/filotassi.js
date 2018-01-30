let petalo, n;

function setup() {
    createCanvas(600, 600);
    background(0);
    colorMode(HSB);
    n = 0;
}

function draw() {
    petalo = p5.Vector.fromAngle(n * radians(137.6));
    petalo.normalize().mult(sqrt(n) * 4);
    translate(300, 300);
    stroke(n * radians(137.6) % 360, 100, 100);
    strokeWeight(10);
    point(petalo.x, petalo.y);
    n++;
}