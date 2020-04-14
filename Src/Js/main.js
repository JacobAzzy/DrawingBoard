// Gloabal variables used Across all the files

strokeColorDefault = "#000000";
var backgroundColorSetup = 255;
var updatedcolor= "#FFFFFF";
defaultStroke = 6;
let canvas;

// Variables for the Objects of each tool
var objectPencil ;
var objectEraser ;
var objectDeselect ;
var objectPaintBrush;
var objectHighlighter;
var currentTool  ;

// toolbox array keeps a track of current tool being used and reallocate memory of the previously initialised objects
let toolbox = [];

// Main p5 setup 
// it runs to setup all the inital variables/settings/objects
function setup() {
  // settings canvas according to the windows width and height outside html
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  // setting default background on intial launch
  background(backgroundColorSetup, backgroundColorSetup, backgroundColorSetup);
  // setting the current tool being used(Default = pencil)
  currentTool = new Tools();
  // calling selecting tool function with "pencil" to intialze current tool with default tool
  selectTool("pencil");
  
  
}
// Draw function is a pre-defined function from p5.js and is called every second. 
function draw() {
  // if the mosue is pressed. Current tool will start drawing. 
  if (mouseIsPressed)
  {
    currentTool.draw()
  }
  // updating stroke size for the front End in Html
  updateStrokeSizeHTML();
 
}






