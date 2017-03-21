function setup() {
	createCanvas(450, 500);
	
	var y = height/3;
	var xLeft = width/3;
	var xRight = width*2/3;
	
//	face
	fill("rgb(255,243,225)");
	ellipse(width/2, height/2, 380, 450);
//	eyes
	strokeWeight(2);
	fill("white");
	ellipse(xLeft, y, 65, 40);
	strokeWeight(1);
	fill("rgb(82,40,6)");
	ellipse(xLeft, y, 30, 30);
	fill("black");
	ellipse(xLeft, y, 10, 10);
	strokeWeight(2);
	fill("white");
	ellipse(xRight, y, 65, 40);
	strokeWeight(1);
	fill("rgb(82,40,6)");
	ellipse(xRight, y, 30, 30);
	fill("black");
	ellipse(xRight, y, 10, 10);
//	glasses
	noFill();
	strokeWeight(5);
	rectMode(CENTER);
	rect(xLeft, y, 100, 70);
	rect(xRight, y, 100, 70);
	line(xLeft+50, y, xRight-50, y);
	line(xLeft-95, y-10, xLeft-50, y)
	line(xRight+50, y, xRight+95, y-10);
//	nose
	noFill();
	strokeWeight(2);
	strokeJoin(ROUND);
	beginShape();
		vertex(width/2, height/2-30);
		vertex(width/2-15, height/2);
		vertex(width/2+5, height/2+10);
	endShape();
//	lips
	fill("rgb(166,69,69)");
	strokeJoin(ROUND);
	beginShape();
		vertex(width/2-40, height*2/3+5);
		vertex(width/2-20, height*2/3-8);
		vertex(width/2, height*2/3);
		vertex(width/2+20, height*2/3-8);
		vertex(width/2+40, height*2/3+5);
		vertex(width/2+20, height*2/3+20);
		vertex(width/2-20, height*2/3+20);
		vertex(width/2-40, height*2/3+5);
	endShape();
	strokeWeight(1);
	line(width/2-40, height*2/3+5, width/2+40, height*2/3+5);
	
//	hair
//	fill("black");
//	arc(width/2, height/4, 320, 210, PI, TWO_PI);
	
}