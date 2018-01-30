let people;

function setup() {
    createCanvas(600, 600);
    background(0);
    people = [new Head(random(-300, 300), random(-300, 300), 60)];
}

function draw() {
    translate(300, 300);
    people.forEach(head => {
        head.show();
    });

    let test = new Head(random(-300, 300), random(-300, 300), 60);

    for (let i = 60; i > 1; i--) {
        let can = true;

        people.forEach(head => {
            if (p5.Vector.dist(test.position, head.position) < test.r + head.r) {
                can = false;
            }
        });

        if (can) {
            people.push(test);
            break;
        } else {
            test.r = i;
        }

    }
}

function Head(x, y, r) {
    this.position = new p5.Vector(x, y);
    this.r = r;
    this.color = color(random(255), random(255), random(255));

    this.show = function () {
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.r * 2);
    }
}