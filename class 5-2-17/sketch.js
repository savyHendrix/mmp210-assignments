//var numSpaceships = 15;
//var xPositions = [];
//var yPositions = [];
//var spaceshipSize = [];
//var spaceshipSpeed = [];
var x = 0;

function preload () {
    img = loadImage("BrownBlock.png");
}

function setup() {
    createCanvas(720, 360);
//    
//    for (var i = 0; i < numSpaceships; i++) {
//        xPositions[i] = random(0, width);
//        yPositions[i] = random(0, height);
//        spaceshipSize[i] = random(10, 20);
//        spaceshipSpeed[i] = random(0.1, 20);
//    }
//    image(getImage("BrownBlock"), 100, 100);
    
    
    
}

function draw() {
    
    background('black');
    
    image(img, x, 0);
    x++;
    

//    
////    for (var i = 0; i < numSpaceships; i++) {
////        ellipse(xPositions[i], yPositions[i], spaceshipSize[i]);
////        xPositions[i] += spaceshipSpeed[i];
////        if (xPositions[i] > width + spaceshipSize[i]/2) {
////            xPositions[i] = -spaceshipSize[i]/2;
////            yPositions[i] = random(0, height);
////        }
////    }
}


// size or speed could be manipulated by user! any of these variables can be things the user can mess with

//throw this in a draw function for a casual rave
//      for (var i = 0; i < numSpaceships; i++) {
//            var x = random(0, width);
//            var y = random(0, height);
//            var size = random(1, 40);
//            ellipse(x, y, size);
//      }