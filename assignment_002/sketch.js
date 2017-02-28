function setup() { 
  createCanvas(450, 500);

    var xCenter = 200;
    var yCenter = 200;

    var cup = color('turquoise');
    var backdrop = color('rgb(210, 160, 200)');
    var tea = color('rgb(200, 160, 122)');
    var outline = color('black');
    var teaOutline = color('rgb(121, 103, 77)');
    
    background(backdrop);
    
//    handle
    fill(cup);
    stroke(outline);
    strokeWeight(1);
    arc(xCenter+150, 280, 100, 100, PI+QUARTER_PI, HALF_PI+QUARTER_PI);
    fill(backdrop);
    arc(xCenter+150, 280, 60, 60, PI+QUARTER_PI, HALF_PI+QUARTER_PI);
    
//    coaster
    strokeWeight(2);
    stroke('rgb(100, 100, 100)');
    fill('rgb(170, 170, 170)');
    ellipse(xCenter, 400, 310, 90);
    
//    tea bag
    var xBag = xCenter + 70;
    var yBag = 380;
    
    stroke(teaOutline);
    strokeWeight(1);
    fill(tea);
    ellipse(xBag+20, yBag+30, 80, 45);
    stroke(outline);
    fill('rgb(230, 210, 180)');
    rect(xBag, yBag, 60, 40);
    fill('rgb(70, 30, 0)');
    rect(xBag, yBag, 40, 40);
    noFill();
    bezier(330, 400, 340, 390, 360, 420, 380, 410);
    fill('rgb(260, 260, 180)');
    rect(yBag, 405, 18, 18);
    
//    cup
    var w = 300;
    var h = 70;
    
    fill(cup);
    arc(xCenter, yCenter, w, 400, 0, PI);
    ellipse(xCenter, yCenter, w, h);
    
//    tea
    var wChange = 50;
    var hChange = 10;
    
    fill(tea);
    stroke(outline);
    ellipse(xCenter, yCenter, 296, 66);
    stroke(teaOutline);
    
    w-= wChange;
    h-= hChange;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange;
    h-= hChange;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange;
    h-= hChange;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange-10;
    h-= hChange;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange-20;
    h-= hChange;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange-20;
    h-= hChange-3;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange-30;
    h-= hChange-3;
    ellipse(xCenter, yCenter, w, h);
    w-= wChange-35;
    h-= hChange-6;
    ellipse(xCenter, yCenter, w, h);
    
//    drop
    ellipse(xCenter, yCenter-7, 9, 12);
    
//    steam
    var a = xCenter-90;
    var b = xCenter+90;
    var c = 30;
    
    strokeWeight(5);
    stroke('rgb(210, 180, 210)');
    noFill();
    bezier(a, c, a-40, c+40, a+30, c+50, a, c+110);
    bezier(xCenter, 10, 250, 70, 160, 70, xCenter, 150);
    bezier(b, c, b+50, c+40, b-50, c+50, b, c+110);
}