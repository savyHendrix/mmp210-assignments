function setup(){
	createCanvas(600,800);
}

function draw(){
	background(227,110,86);
	
	var column = width/3; //grid column width
    var row = height/2; //grid row height
	var wSize = column/2; //window size
    
    for (var x1 = column/4; x1 < width; x1+=column) {
       for (var y1 = wSize; y1 < height; y1+=row) {
    		
		 	stroke(197,195,176);
		 	strokeWeight(1);
			fill(237,235,216);
		 	rect(x1-6, y1-2, 4, wSize*2+10);
		 	rect(x1+wSize+3, y1-2, 4, wSize*2+10);
		 	
		//window bottom half
			var y2 = y1+wSize;
				 
            stroke(197,195,176);
            strokeWeight(3);
            fill(39,47,64);
            rect(x1,y2,wSize+1,wSize+1);

                var wGrid=wSize/8 //window grid size

                var x1a=x1+1; //x coordinate - bottom of up lines
                var y1a=y2+1; //y coordinate - bottom of up lines
                var x2a=x1+1; //x coordinate - top of up lines
                var y2a=y2+1; //y coordinate - top of up lines

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
                var x1b=x1+1; //x coordinate - top of down lines
                var y1b=y2+wSize; //y coordinate - top of down lines
                var x2b=x1+1; //x coordinate - bottom of down lines
                var y2b=y2+wSize; //y coordinate - bottom of down lines
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
                quad(x1+wGrid+1,y2+4*wGrid+1,x1+4*wGrid+1,y2+wGrid+1,x1+7*wGrid+1,y2+4*wGrid+1,x1+4*wGrid+1,y2+7*wGrid+1);
                line(x1+2*wGrid+1,y2+3*wGrid+1,x1+2*wGrid+1,y2+5*wGrid+1);
                line(x1+6*wGrid,y2+3*wGrid+1,x1+6*wGrid+1,y2+5*wGrid+1);
                line(x1+3*wGrid+1,y2+2*wGrid+1,x1+5*wGrid+1,y2+2*wGrid+1);
                line(x1+3*wGrid+1,y2+6*wGrid+1,x1+5*wGrid+1,y2+6*wGrid+1);
				
       //window top half
            stroke(237,235,216);
            strokeWeight(3);
            fill(59,67,84);
            rect(x1,y1,wSize+1,wSize+1);

                var wGrid=wSize/8 //window grid size

                var x1a=x1+1; //x coordinate - bottom of up lines
                var y1a=y1+1; //y coordinate - bottom of up lines
                var x2a=x1+1; //x coordinate - top of up lines
                var y2a=y1+1; //y coordinate - top of up lines

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
                var x1b=x1+1; //x coordinate - top of down lines
                var y1b=y1+wSize;//y coordinate - top of down lines
                var x2b=x1+1;//x coordinate - bottom of down lines
                var y2b=y1+wSize;//y coordinate - bottom of down lines
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
           
     
			push();	 
			//window roof
		 		var xSill = x1-10;
		 		var ySill = y1-11;
		 		var sillSize = wSize+22;
		 	
		 		noStroke();
		 		fill(177,165,110);
				rect(xSill, ySill, wSize+22, 10);
		 	
		 		stroke(157,135,80);
		 		strokeWeight(3);
		 		strokeJoin(ROUND);
		 		strokeCap(SQUARE);
		 		beginShape();
		 			vertex(xSill+1,ySill+2);
		 			vertex(xSill-1+sillSize/2,ySill-14);
		 			vertex(xSill-1+wSize+22,ySill+2);
		 		endShape();
		 		
		 		stroke(177,165,110);
		 		strokeWeight(3);
		 		strokeJoin(ROUND);
		 		strokeCap(PROJECT);
		 		noFill();
		 		beginShape();
		 			vertex(xSill-2,ySill);
		 			vertex(xSill-1+sillSize/2,ySill-17);
		 			vertex(xSill+wSize+24,ySill);
		 		endShape();
				
		 	//window sill
		 		noStroke();
		 		fill(177,165,110);
				rect(xSill, y2+wSize+3, wSize+22, 10);
		 	pop();
       }
    }
}