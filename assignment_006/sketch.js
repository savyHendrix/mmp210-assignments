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
	
		push();
	var g = random(0,255); //green
    rotate(-r);
    fill(190,g,250);
    ellipse(280,0,20);
    pop();
		
		push();
    rotate(r);
		if(n < height){
			n+=frameCount;
			ellipse(0,0,n);
		}
		else{
			ellipse(0,0,n);
		}
    
    for (var i = 0; i < 20; i++) {
        for (var h = 0; h < width; h++){
            ellipse(0+h, 0, 5);
            rotate(PI/50);
        }
    }
		pop();
    
		
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

/////////////

//push();
//    rotate(r);
//    rectMode(CENTER);
//    rect(100, 100, 50, 50);
//    pop();
//    
//    push();
//    rotate(-r);
//    fill("blue");
//    rect(150,150, 50,50);
//    pop();

// animation

//var x = 10;
//var y = 10;
//
//var r = 0, g = 0, b = 0;
//
//function setup() { 
//   createCanvas(640, 480);
//    noStroke();
//}
//
//function draw() {
//    //background(200);
//    
//    if (frameCount % 60 == 0) {
//        r = random(0, 255);
//        g = random(0, 255);
//        b = random(0, 255);
//    }
//    
//    fill(r, g, b);
//    
//    if (frameCount < 60*5) {
//        ellipse(x, y, random(40, 60));
//    } else {
//        rect(x, y, random(10, 60), random(10, 40));   
//    }
//    
//    x += 1;
//
//    if (x > width) {
//        x = 0;
//    }
//    
//    if (x > width/2) {
//        y--;
//    } else {
//        y++;
//    }
//}