var img;
function setup() {
    createCanvas(640, 360);
    img = loadImage();
    var w = 100, h = 100;
    for (var x = 0; x 
}

function draw() {
    background('black');
    tint(255);
    tint(0,255,255);
    image(img, mouseX, mouseY, 200, 150);
}