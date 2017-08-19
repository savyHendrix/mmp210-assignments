function setup(){
    createCanvas(800, 500);
    noStroke();
//    canvas.parent('container'); add with #container in css
	
}

function draw(){
	background(40, 20, 20);

	
	push();
	translate(width/5, height);
	//tree
	var trunkW = width/10;
	var trunkH = height/2;
	///trunk
	rectMode(CENTER);
	rect(0, -trunkH/2, trunkW, height/2);
	triangle(-trunkW, 0, 0, -trunkH/4, trunkW, 0);
	
	
	///leaves
//	for(var i = 0; i < 30; i++){
//		ellipse(x, y, 20);
//	}
//	
	for (var i = 0; i < 20; i++) {
		for (var h = 0; h < width; h++){
			ellipse(0+h, 0, 5);
			rotate(PI/50);
		}
	}
	pop();
}
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