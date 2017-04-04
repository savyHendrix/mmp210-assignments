function setup() {
    createCanvas(640, 640);
    background(255);
    
   noStroke();
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
//    var rows = 5;
//    var columns = numberOfRectangles / rows;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            // rain
            if (y < height/4) {
                // random rain blue color
                r = random(0, 50);
                g = random(150, 255);
                b = random(200, 255);
                //random rain size and position
                x += random(-25, 25);
                w = random(10, 20);
            } else if (y > height * 3/4) {
                // random flower color
                r = random(200, 255);
                g = random(0, 100);
                b = random(100, 200);
                // random flower size
                w = h = random(10, 40);
            } else {
                // random green grass color
                r = random(0, 50);
                g = random(150, 255);
                b = random(0, 100);
            }
            
            // all of the color fills
            fill(r,g, b);            
            
            // flowers
            if ( y > height * 3/4) {
                //stems
                fill(
                    random(0, 50),
                    random(150, 255),
                    random(0, 100)
                );
//                rectMode(CENTER);
                rect(x, y, w/8, h);
                 // flowers
                fill(r,g, b);  
                ellipse(x, y, w, h);
                //inside 
                fill(
                    random(0, 255),
                    random(0, 100),
                    random(100, 200)
                );
                ellipse(x, y, w/2, h/2);
            } else {
                // rain & grass
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
}
// stage 1
// var numberOfRectangles = 200;
//    var columns = Math.sqrt(numberOfRectangles);
//    var rows = columns;
//    var x = 0;
//    var y = 0;
//    var size = width/columns;
//    
//    for (var i=0; i<=columns; i++){
//        for (var h=0; h<=rows; h++){
//            rect(x,y,size,size);
//            y += size;
//        }
//        x += size;
//        y = 0;

//also try:
// var rows = 5;
// var columns = numberOfRectangles/rows;
//
// fill(random(0,255));
// fill(random(0,255), random(0,255), random(0,255));
//
//leaves
//fill(random(0,60),
//     random(100,255),
//     random(0,100)
//    );

//stage  2
//stroke("green");
//    
//    var numberOfRectangles = 200;
//    var columns = Math.sqrt(numberOfRectangles);
//    var rows = Math.sqrt(numberOfRectangles);
//    var w = width/columns;
//    var h = height/rows;
//    
//    for (var x=0; x<=width; x+=w){
//        for (var y=0; y<=width; y+=h){
//            rect(x,y,w,h);
//        }
//    }

//stage 3
//    for (var x=0; x<=width; x+=w){
//        for (var y=0; y<=width; y+=h){
//            
//            var b;
//            
//            //rain
//            if (y < height/4) {
//                b = random(160,255);
//            }
//            else{
//                b = random (0,100);
//            }
//            
//            //green leaves
//            fill(random(0,60),
//                 random(100,255),
//                 b
//                );
//            rect(x,y,w,h);
//        }
//    }