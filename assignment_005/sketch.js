 //windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(220);
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
       for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill(167, 82, 54);
           rect(x, y, windowWidth/2, windowHeight/2);
           
           fill("black");
           stroke(167, 82, 54);
           
           rect(x, y, windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
           
           
        }
    }
        
}

// grid 
//function setup() { 
//   createCanvas(640, 480);
//}
//
//function draw() {
//    background(220);
//    
//    /* draw a grid */
//    stroke("green");
//    
//    var numColumns = 10;
//    
//    var columnWidth = width / numColumns;
//    var rowHeight = height / numColumns;
//    
//    for (var i = 1; i < numColumns; i++) {
//        line(columnWidth*i, 0, columnWidth*i, height);
//        line(0,rowHeight*i,width,rowHeight*i);
//    }
//}