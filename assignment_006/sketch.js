var r = 0;
var x = 0;
var y = 0;
var n = 10;


function setup() { 
    createCanvas(640, 480);
    noStroke();
  
}

function draw() {
    background(0);
    r+=-0.05;
    
    translate(width/2, height/2);
    fill(255);
	
	//moving circle
	push();
		var g = random(0,255); //green
		rotate(-r);
		fill(190,g,250);
		ellipse(280,0,20);
	pop();
	
	push();
	//growing center
		rotate(r);
		if(n < height){
			n+=frameCount;
			ellipse(0,0,n);
		}
		else{
			ellipse(0,0,n);
		}
	
	//swirling stars
		for (var i = 0; i < 20; i++) {
			for (var h = 0; h < width; h++){
				ellipse(0+h, 0, 5);
				rotate(PI/50);
			}
		}
	pop();
    
	//text
    if(n > height){
			var a = random(0,255);
			var b = random(0,255);
			var c = random(0,255);
			fill(a,b,c);
			textSize(100);
			textAlign(CENTER,CENTER);
			textStyle(BOLD);
			text("Hi.",x,y);
		}

}