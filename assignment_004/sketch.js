var ellipseWidth = 0;

function setup(){
    createCanvas(displayWidth,500);
}

function draw(){
	background(255);
	
	fill('rgb(250,140,190)');
	noStroke();
	rect(0, 0, width, height/2);
	fill('rgb(110,150,200)');
	rect(0, height/2, width, height/2);
	
	frameRate(10);
	
	var w = 10;
	var wChange = 10;
	
//	moving ellipse growth
	if(ellipseWidth < w+6*wChange){
		ellipseWidth += w;
	}
	else{
		ellipseWidth = 0;
	}
//	color change left/right
	if(mouseY > height/2){
		var light = color("rgb(135,196,255)");
		var dark = color("rgb(19,106,193)");
	}
	else{
		var light = color("rgb(255,175,255)");
		var dark = color("rgb(235,12,235)");
	}
//	stable ellipses
	noFill();
	stroke(light);
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
		w += wChange;
		ellipse(mouseX, mouseY, w);
//	moving ellipse
	stroke(dark);
		ellipse(mouseX, mouseY, ellipseWidth);
}


//function mouseMoved(){
//	frameRate(60);
//	clear();
//}
//function mouseClicked(){
//		if(light == color("rgb(135,196,255)")){
//			light = color("black");
//			dark = color("white");
//		}
//}