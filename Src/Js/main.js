
// eraser = false;
// pencil = false;
pencilColor = 0;
backgroundColor = 255;
var objectPencil ;
var objectEraser ;
var objectDeselect ;
var currentTool  ;
let toolbox = []



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColor, backgroundColor, backgroundColor);
  currentTool = new Tools();
}

function draw() {
  if (mouseIsPressed)
  {
    currentTool.draw()
  }
}

