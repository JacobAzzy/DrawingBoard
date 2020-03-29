//global variables dependent on main
//setup
//draw
//additionalHTMLFunctions

eraser = false;
pencil = false;
pencilColor = 0;
backgroundColor = 255;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColor, backgroundColor, backgroundColor);
}

function draw() {
 
  if (pencil && mouseIsPressed)
  {
    stroke(pencilColor, pencilColor, pencilColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    
  if (eraser && mouseIsPressed)
  {
  	stroke(backgroundColor, backgroundColor, backgroundColor);
  	line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

