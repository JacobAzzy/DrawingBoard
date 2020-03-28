//global variables dependent on main 
//setup
//draw
//additionalHTMLFunctions

eraser = false;
pencil = false;
pencilColor = 0;
eraserColor = 255

//DOM

var pencilVar = document.getElementById('pencil');
pencilVar.addEventListener("click", pencilPressed);

var eraserVar = document.getElementById('eraser');
eraserVar.addEventListener("click", eraserPressed);

function pencilPressed(){
	pencil = true;
	eraser = false;

}

function eraserPressed(){
	eraser = true;
	pencil = false;

}



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
 
  if (pencil && mouseIsPressed ){
  	 stroke(pencilColor, pencilColor, pencilColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  if(eraser && mouseIsPressed){
  	stroke(eraserColor, eraserColor, eraserColor);
  	line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

