function setup(){
	createCanvas(600,800);
}

function draw(){
	background(227,110,86);
	
	var column = width/3; //grid column width
    var row = height/4; //grid row height
	var wSize = column/2; //window size
    
    for ( var x1 = column/4; x1 < width; x1+=column) {
       for (var y1 = wSize/2; y1 < height; y1+=row*2) {
    
            //window top half
            stroke(237,235,216);
            strokeWeight(3);
            fill(59,67,84);
            rect(x1,y1,wSize+1,wSize+1);

                var wGrid=wSize/8 //window grid size

                var x1a=x1+1;
                var y1a=y1+1;
                var x2a=x1+1;
                var y2a=y1+1;

                //left upward lines
                strokeWeight(1.5);
                //descending left side
                y1a+=wGrid;
                x2a+=wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                //crossing bottom
                y1a+=wGrid;
                x2a+=wGrid;
                x1a+=wGrid;
                y2a+=wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);

                //left downward lines
                //ascending left side
                var x1b=x1+1;
                var y1b=y1+wSize;
                var x2b=x1+1;
                var y2b=y1+wSize;
                y1b-=wGrid;
                x2b+=wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                //crossing top
                y1b-=wGrid;
                x2b+=wGrid;
                x1b+=wGrid;
                y2b-=wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);

                //inner square
                quad(x1+wGrid+1,y1+4*wGrid+1,x1+4*wGrid+1,y1+wGrid+1,x1+7*wGrid+1,y1+4*wGrid+1,x1+4*wGrid+1,y1+7*wGrid+1);
                line(x1+2*wGrid+1,y1+3*wGrid+1,x1+2*wGrid+1,y1+5*wGrid+1);
                line(x1+6*wGrid,y1+3*wGrid+1,x1+6*wGrid+1,y1+5*wGrid+1);
                line(x1+3*wGrid+1,y1+2*wGrid+1,x1+5*wGrid+1,y1+2*wGrid+1);
                line(x1+3*wGrid+1,y1+6*wGrid+1,x1+5*wGrid+1,y1+6*wGrid+1);
           
           // window bottom half
            stroke(237,235,216);
            strokeWeight(3);
            fill(59,67,84);
            rect(x1,y1+wSize,wSize+1,wSize+1);

                var wGrid=wSize/8 //window grid size

                var x1a=x1+1;
                var y1a=y1+1;
                var x2a=x1+1;
                var y2a=y1+1;

                //left upward lines
                strokeWeight(1.5);
                //descending left side
                y1a+=wGrid;
                x2a+=wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                y1a+=2*wGrid;
                x2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                //crossing bottom
                y1a+=wGrid;
                x2a+=wGrid;
                x1a+=wGrid;
                y2a+=wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);
                x1a+=2*wGrid;
                y2a+=2*wGrid;
                line(x1a,y1a,x2a,y2a);

                //left downward lines
                //ascending left side
                var x1b=x1+1;
                var y1b=y1+wSize;
                var x2b=x1+1;
                var y2b=y1+wSize;
                y1b-=wGrid;
                x2b+=wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                y1b-=2*wGrid;
                x2b+=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                //crossing top
                y1b-=wGrid;
                x2b+=wGrid;
                x1b+=wGrid;
                y2b-=wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);
                x1b+=2*wGrid;
                y2b-=2*wGrid;
                line(x1b,y1b,x2b,y2b);

                //inner square
                quad(x1+wGrid+1,y1+4*wGrid+1,x1+4*wGrid+1,y1+wGrid+1,x1+7*wGrid+1,y1+4*wGrid+1,x1+4*wGrid+1,y1+7*wGrid+1);
                line(x1+2*wGrid+1,y1+3*wGrid+1,x1+2*wGrid+1,y1+5*wGrid+1);
                line(x1+6*wGrid,y1+3*wGrid+1,x1+6*wGrid+1,y1+5*wGrid+1);
                line(x1+3*wGrid+1,y1+2*wGrid+1,x1+5*wGrid+1,y1+2*wGrid+1);
                line(x1+3*wGrid+1,y1+6*wGrid+1,x1+5*wGrid+1,y1+6*wGrid+1);
       }
    }

}

// windows
//function setup() { 
//   createCanvas(600, 800);
//    noStroke();
//}
//
//function draw() {
//    background(220);
//    
//    var windowWidth = width/3; // window width
//    var windowHeight = height/2; // window height
//    
//    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
//       for (var y = windowHeight/4; y < height; y+=windowHeight) {
//           
//           fill(167, 82, 54);
//           rect(x, y, windowWidth/2, windowHeight/2);
//           
//           fill("black");
//           stroke(167, 82, 54);
//           
//           rect(x, y, windowWidth/4, windowHeight/8);
//           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
//           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
//           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);          
//        }
//    }      
//}

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