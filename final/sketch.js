var trees;

function preload(){
    trees = loadImage("trees.jpg");
}

function setup() {
    createCanvas(900, 700);
    noStroke();
//    canvas.parent('container'); add with #container in css
}

function draw() {
    background(0,0,0);
    image(trees, 0, 0, width, height*3/4);
    
    //clearing
    noStroke();
    fill('green');
    ellipse(width/2, height, width*1.5, height*3/4);
    
    //firesite
        //fireRing
        push();
        stroke('black');
        fill('gray');
        translate(width/2, 600);
        for(var i = 0; i < 20; i++){
            ellipse(0, 80, 20);
            rotate(PI/10);
        }
        pop();
    
        //wood
        
    
    //match
    push();
    translate(width*4/5, 600);
    stroke('black');
    fill('tan');
    rect(0, 0, 50, 4);
    fill('red');
    ellipse(0, 2, 12, 10);
    pop();
    
    //rock
    push();
    translate(width/8, 600);
    stroke('black');
    fill('gray');
    beginShape();
        vertex(0, 0);
        vertex(-4, -5);
        vertex(-3, -10);
        vertex(1, -13);
        vertex(1, -20);
        vertex(15, -30);
        vertex(25, -31);
        vertex(28, -25);
        vertex(42, -29);
        vertex(52, -20);
        vertex(50, -12);
        vertex(53, -10);
        vertex(58, -4);
        vertex(57, 0);
    endShape(CLOSE);
    pop();
    
    //fireAnimation
    
    
    //wood scattered, must be gathered
    
    //matchbox ->click-> the box is all soggy ->click-> crap! only one left!
}