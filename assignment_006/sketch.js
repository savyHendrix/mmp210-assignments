// transform animation

var r = 0;
var x = 0;
var y = 0;
//var n = 10;

function setup() { 
    createCanvas(640, 480);
    noStroke();
  
}

function draw() {
    background(0);
    
    
    push();
    rotate(r);
    r++;
    fill(190,50,250);
    ellipse(100,0,20);
    pop();
    pop();
    
    translate(width/2, height/2);
    fill(255);
    rotate(r);
//    r+=0.05;
    
    ellipse(0,0,20);
    
    
//    n+=0.1;
    for (var i = 0; i < 30; i++) {
        for (var h = 0; h < width/2; h++){
            ellipse(0+h, 0, 5);
            rotate(PI/50);
        }
    }
    
    

}

/////////////

//push();
//    rotate(r);
//    rectMode(CENTER);
//    rect(100, 100, 50, 50);
//    pop();
//    
//    push();
//    rotate(-r);
//    fill("blue");
//    rect(150,150, 50,50);
//    pop();

// animation

//var x = 10;
//var y = 10;
//
//var r = 0, g = 0, b = 0;
//
//function setup() { 
//   createCanvas(640, 480);
//    noStroke();
//}
//
//function draw() {
//    //background(200);
//    
//    if (frameCount % 60 == 0) {
//        r = random(0, 255);
//        g = random(0, 255);
//        b = random(0, 255);
//    }
//    
//    fill(r, g, b);
//    
//    if (frameCount < 60*5) {
//        ellipse(x, y, random(40, 60));
//    } else {
//        rect(x, y, random(10, 60), random(10, 40));   
//    }
//    
//    x += 1;
//
//    if (x > width) {
//        x = 0;
//    }
//    
//    if (x > width/2) {
//        y--;
//    } else {
//        y++;
//    }
//}