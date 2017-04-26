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
			
			if (x >= w && x < w*10 && y >= h && y < h*10) {
				
				var shape = Math.floor(random(0, 3));
				
				ellipseMode(CORNER);
		
				if (shape == 0) {
					
				}
//				else if (shape == ?) {
//					noStroke();
//					fill(250,175,190);
//					ellipse(x, y, w, h);
//					fill(100,130,80);
//					arc(x, y, w, w, PI*11/8, PI*13/8);
//				} 
//				else if (shape == 1) {
//					noStroke();
//					fill(255,230,235);
//					ellipse(x, y, w, h);
//					fill(200,20,50);
//					ellipse(x, y, 20, 20);
//					fill(220,220,0);
//					ellipse(x, y, 5, 5);
//					fill(255,255,255);
//					arc(0, -85, 50, 50, PI*5/4, PI*7/4);
//				}
//				else if (shape == 2) {
//					noStroke();
//					fill(200,20,50);
//					ellipse(x, y, w/2, h/2);
//				}
			}
			else {
				
				var shape = Math.floor(random(0, 2));
				
				if (shape == 0) {
	//				haru kanji

					var kx1 = x+w/16, //kanji x1
						ky1 = y+h/16; //kanji y1 (LOL)

					var kx2 = kx1+kw, //kanji x2
						ky2 = ky1+kh; //kanji y2

					var kxChange = w/16,
						kyChange = h/16;

					var kw = w*7/8, //kanji max width
						kh = h*7/8; //kanji max height

					stroke('black');
					strokeWeight(4);
					strokeCap(SQUARE);
					noFill();

					line(kx1+kxChange, ky1+kyChange, kx2-kxChange, ky1+kyChange);
					line(kx1+w/12, ky1+kyChange*3, kx2-w/12, ky1+kyChange*3);
					//longest h. stroke
					line(kx1, ky1+kyChange*5, kx2, ky1+kyChange*5);

					curve(x+w/5, y-1.5*h,
						  kx1+kw/2, ky1, kx1, ky1+kyChange*10,
						  x-w/2, y+h*4/8);
					curve(kx1+kw/2, ky1,
						  x+w*9/16, ky1+kyChange*5, kx2, ky1+kyChange*10,
						  x+w, y+h*4/8);

					line(kx1+kxChange*3, ky1+kyChange*8, kx2-kxChange*3, ky1+kyChange*8);
					line(kx1+kxChange*3, ky1+kyChange*11, kx2-kxChange*3, ky1+kyChange*11);
					line(kx1+kxChange*3, ky1+kyChange*14, kx2-kxChange*3, ky1+kyChange*14);

					//longest v. strokes
					line(kx1+kxChange*3, ky1+kyChange*8, kx1+kxChange*3, ky1+kyChange*15);
					line(kx2-kxChange*3, ky1+kyChange*8, kx2-kxChange*3, ky1+kyChange*15);
				} else if(shape == 1) {
					noStroke();
					fill(255,255,255);
					rect(x, y+h/8, w, h*3/4);
					fill(255,0,0);
					ellipseMode(CENTER);
					ellipse(x+w/2, y+h/2, w/3, h/3);
				}
			}//end else
		}//end forLoop y
	}//end forLoop x
}//end setup

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