
let rad = 10;  
let xpos, ypos, vx, vy, ax, ay, dt; 

function setup() {
	createCanvas(windowWidth, windowHeight);  
	background(100);  
	ellipseMode(RADIUS);  
	xpos = windowWidth/4;  
    ypos = windowHeight/5;  
	vy = 50;	
	ay = 50; 
    dt = 0.1;  
}


function draw() {
	vy += ay*dt;  
	ypos += vy*dt; 
	ellipse(xpos, ypos, rad, rad);
}
