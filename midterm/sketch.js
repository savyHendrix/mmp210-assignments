function setup() {
	createCanvas(640, 640);
	background(200,220,220);
	
//	translate(width/2, height/2);
	
	noStroke();
	
//	//sakuramochi
//	fill(240,190,200);
//	ellipse(0, 0, 100, 80);
//	
//
//	fill(100,130,80);
//	arc(0, 60, 200, 205, PI*11/8, PI*13/8);
	
//	//sakura
//	fill(255,240,245);
//	ellipse(0, 0, 150, 200);
//	fill(230,230,0);
//	ellipse(-20, 70, 10, 10);
//	ellipse(0, 50, 10, 10);
//	ellipse(20, 70, 10, 10);
//	fill(255,255,255);
//	arc(0, -85, 50, 50, PI*5/4, PI*7/4);
	
	
	

	var columns = 12;
	var rows = 12;
	var w = width/columns;
	var h = height/rows;
	
	noFill();
	
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
		
	

			
			var shape = Math.floor(random(0, 4));
		
			if (shape == 0) {
				noStroke();
				fill(250,175,190);
				ellipse(x, y, w, h);
				fill(100,130,80);
				arc(x, y, w, w, PI*11/8, PI*13/8);
			} else if (shape == 1) {
				noStroke();
				fill(255,230,235);
				ellipse(x, y, w, h);
				fill(200,20,50);
				ellipse(x, y, 20, 20);
				fill(220,220,0);
				ellipse(x, y, 5, 5);
				fill(255,255,255);
				arc(0, -85, 50, 50, PI*5/4, PI*7/4);
			} else if (shape == 2) {
				noStroke();
				fill(200,20,50);
				ellipse(x, y, w/2, h/2);
			} else if (shape == 3) {
				stroke(1);
				line(x-w/4+2, y-h/3+2, x+w/4-2, y-h/3+2);
				line(x-w/4+3, y-h/3+4, x+w/4-3, y-h/3+4);
				line(x-w/4, y-h/3+6, x+w/4, y-h/3+6);
				line(x-5, y-h/3+8, x+5, y-h/3+8);
				line(x-5, y-h/3+10, x+5, y-h/3+10);
				line(x-5, y-h/3+12, x+5, y-h/3+12);
				line(x-5, y-h/3+8, x-5, y-h/3+8+4);
				line(x+5, y-h/3+8, x+5, y-h/3+8+4);
			}
		}
	}
}

//			if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
//				stroke(r * 10, g/10, b * 10);
//			} else {
//				 stroke(r, g, b);
//			}

// Garden
//			var r = random(0,50);
//			var g = random(100,200);
//			var b = random(0,50);
//		
//			stroke(r,g,b);
//			noFill();
//			
//			var shape = Math.floor(random(0, 5));
//		
//			if (shape == 0) {
//				arc(x, y, w*2, w*2, 0, HALF_PI);
//			} else if (shape == 1) {
//				arc(x + w, y, w*2, w*2, HALF_PI, PI);
//			} else if (shape == 2) {
//				arc(x + w, y + h, w*2, w*2, PI, PI + HALF_PI);
//			} else if (shape == 3) {
//				arc(x, y + h, w*2, w*2, PI + HALF_PI, 0);
//			} else if (shape == 4) {
//				noStroke();
//				fill("pink");
//				ellipse(x, y, w*2/3, h*2/3);
//			}