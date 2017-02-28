var myFont
function preload() {
    myFont = loadFont('bangers/Bangers.ttf')
}
function setup() {
    var w = 640;
    var h = 480;
    
	createCanvas(w, h);
    background('rgb(255,255,255)');


//    shadows
    stroke('rgb(150, 150, 150)');
    fill('rgb(150, 150, 150)');
    rect(w-10, 5, 9, h-10);
    rect(5, h-10, w-6, 9);
    
//    page
    stroke('rgb(90,90,90)');
    fill('rgb(248,248,248)');
    rect(0, 0, w-10, h-10);
    
//    panels
    var wRect = 100;
    var hRect = 100;
    var blank = color('rgb(250,250,250)');
    
    stroke('rgb(50,50,50)');
    strokeWeight(2);
    //    row 1
    rect(20, 20, wRect, hRect);
    fill(blank);
    rect(141, 20, wRect, hRect);
    fill('rgb(255,50,190)');
    rect(262, 20, wRect, hRect);
    fill('yellow');
    rect(383, 20, wRect, hRect);
    fill(blank);
    //    rect(504, 20, wRect, hRect);
    
    //    row 2
    rect(20, 141, wRect, hRect);
    fill('blue');
    rect(141, 141, wRect, hRect);
    fill(blank);
    //    rect(262, 141, wRect, hRect);
    //    rect(383, 141, wRect, hRect);
    rect(504, 141, wRect, hRect);
    
    //    row 3
    fill('red');
    rect(20, 262, wRect, hRect);
    fill('yellow');
    rect(141, 262, wRect, hRect);
    rect(262, 262, wRect, hRect);
    rect(383, 262, wRect, hRect);
    rect(504, 262, wRect, hRect);
    
//    manipulated panels
    //    top
    fill('yellow');
    rect(20, 20, wRect, 2*hRect+21);
    
    strokeWeight(3);
    fill('rgb(90,200,255)');
    ellipse(554, 70, 120);
    
    strokeWeight(1);
    noFill();
    var x1 = 262;
    var x2 = 300;
    var y1 = 141;
    var y2 = y1+80;
    var xChange = 30;
    
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    x1+= xChange;
    x2+= xChange;
    line(x1,y1,x2,y2);
    
    //    bottom
    strokeWeight(2);
    fill('purple');
    rect(20, 383, wRect, 70);
    
    fill('rgb(90,90,90)')
    rect(170, 390, wRect/2, hRect/2);
    
    fill(blank);
    rect(262, 241, 2*wRect+21,
    2*hRect+12);
    
    fill('rgb(100, 240, 90)');
    rect(504, 141, wRect, 3*hRect+12);
    fill(blank);
    strokeWeight(1);
    line(604, 141, 504, 453);

    
//    text
    fill('rgb(255,255,255)');
    stroke('rgb(0,0,0)');
    textFont('Bangers');
    textAlign(CENTER);
    textSize(170);
    strokeWeight(15);
    text('Savy', 180, h*2/5);
    text('Hendrix', 350, h*4/5);
    
   
    var c = '©';
    var name = 'Hendrix';
    var year = "2017";
    fill('rgb(50,50,50)');
    textFont('Courier New');
    textSize(11);
    strokeWeight(1);
    text(c + name + year, 585, 467);
}