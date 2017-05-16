var box;
var circles = [];

function preload() {
    box = loadImage("../BrownBlock.png");
}

function setup(){
    createCanvas(720, 360);
    noStroke();
}

function draw(){
    background("light blue");
    image(box, 0, 0);
    for (var i = 0; i < circles.length; i++){
        circles[i].display();
    }
}

function mouseDragged() {
    var c = box.get(mouseX, mouseY);
    circles.push(new Circle(mouseX, mouseY, c));
}

function Circle(x, y, c){
    this.x = x;
    this.y = y;
    this.color = c;
    this.size = random(20, 40);
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}