function setup(){
    createCanvas(800, 500);
    noStroke();
//    canvas.parent('container'); add with #container in css
	
}

function draw(){
	background(80, 60, 60);
	
	//fence
	for (var q = 10; q < width; q+=20) {
		var postY = height-250;
		var postW = 5;
		noStroke();
		rect(q, postY, postW, 100);
		triangle(q, postY, q+postW/2, postY-10, q+postW, postY);
	}
	rect(0, 330, width, 5);
	rect(0, 280, width, 5);
	
	//tree
	push();
	translate(width/5, height);
	var trunkW = width/12;
	var trunkH = height/3;
	//trunk
	rectMode(CENTER);
	rect(0, -trunkH/2, trunkW, height/2);
	triangle(-trunkW, 0, 0, -trunkH/4, trunkW, 0);
	pop();
	//leaves
	push();
	translate(width/5, height-trunkH-100)
	for (var i = 0; i < 30; i++) {
		for (var h = 0; h < 149; h+=0.5){
			stroke(0.25);
			ellipse(0, 0+h, 10);
			rotate(PI/30);
		}
	}
	pop();
	
	//rat
	ellipse(30, height, 40, 30);
	
	//moon
	ellipse(width-100, 100, 200);
	
	//bat
	stroke(2);
	beginShape();
		vertex(width-100, 100);
		vertex(width-105, 95);
		vertex(width-120, 102);
		vertex(width-110, 102);
		vertex(width-110, 102);
	endShape();
	
	//headstone_01
	rect(360, 360, 80, 100);
	
	//headstone_02
	
	//mausoleum
	rect();
	
	//cross
	rect(500, 320, 20, 150);
	rect(460, 350, 80+20, 20);
	
	//constellation_01
	stroke(2);

	line(400, 100, 420, 130);
	ellipse(400, 100, 5);
	line(420, 130, 460, 120);
	ellipse(420, 130, 5);
	line(460, 120, 465, 85);
	ellipse(460, 120, 5);
	line(465, 85, 500, 40);
	ellipse(465, 85, 5);
	line(500, 40, 530, 20);
	ellipse(500, 40, 5);
	ellipse(530, 20, 5);


} //drawEnd



function mouseDragged(){
	line();
}
//var vanity;
//var vanityBottom;
//var mummy;
//var margin = 100;
//var vanityW;
//var newX = 570, newY = 200;
//var paletteW = 100;
//var paletteH = 40;
//var shadowPickUp;
//
//function preload(){
//    vanity = loadImage("gothicVanity_v2.png");
//    vanityBottom = loadImage("gothicVanityBottom.png");
//	mummy = loadImage("wrappedMummy_v1.png");
//}
//
//function setup(){
//    createCanvas(800, 500);
//    noStroke();
////    canvas.parent('container'); add with #container in css
//	
//}
//
//function draw(){
//	background(40, 20, 20);
//	
//	vanityW = width-margin*2; //width of vanity
//	
//	push();
//	translate(margin, 0);
//	
//	
//    image(vanity, 0, 0, vanityW, height);
//    image(vanityBottom, -40, height*2/3, vanityW+80, height*3/5);
//    image(vanityBottom, -80, height*7/8, vanityW+160, height);
//	pop();
//	
//	image(mummy, width/2-280/2, height-459, 280, 459);
//
//
//// wig
//	ellipse(200, 170, 90, 130);
////nail polish
//	ellipse(120, height*7/8, 30, 30);
////powder
//	ellipse(margin+vanityW-20, height*2/3-15, 50, 50);
////blush
//	ellipse(margin+vanityW-100, height*2/3, 90, 20);
////eyeshadow palette
//	push();
//	translate(newX, newY);
//	
//	
//	var shadowW = paletteW/5;
//	
//	
//	fill(150);
//	rect(0, 0, paletteW, paletteH);
//	
////eyeshadows
//	for(var x = shadowW; x < paletteW; x+=shadowW*1.5){
//		stroke(255);
//		strokeWeight(0.5);
//		var r = 0, g = 0, b = 0;
//		r += x;
//		fill(r, g, b);
//		ellipse(x, paletteH/2, shadowW);
//	}
//	shadowBrush(paletteW/2, paletteH);
//	pop();
//}
//
//function shadowBrush(x, y){
//	var w = 30;
//	var h = 5;
//	
//	noStroke();
//	fill(200);
//	rect(x, y, w, h);
//	fill(255);
//	ellipse(x, y+h/2, w/2, 2*h);
//	
//}
//
////lash function w open and clsoed container