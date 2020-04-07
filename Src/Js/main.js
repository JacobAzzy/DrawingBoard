
strokeColorDefault = "#000000";
var backgroundColorSetup = 255;
var updatedcolor= "#FFFFFF";
var objectPencil ;
var objectEraser ;
var objectDeselect ;
var objectPaintBrush;
var objectHighlighter;
var currentTool  ;
let toolbox = [];
defaultStroke = 6;
let canvas;





function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColorSetup, backgroundColorSetup, backgroundColorSetup);
  currentTool = new Tools();
  selectTool("pencil");
  
  
}

function draw() {
  if (mouseIsPressed)
  {
    currentTool.draw()
  }

  updateStrokeSizeHTML();
 
}

function updateStrokeSizeHTML(){
	document.getElementById('inputBox').placeholder = defaultStroke;

	
}




