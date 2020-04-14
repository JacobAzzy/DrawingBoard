/**
 * Summary - KeyPressed function is used to monitor up and down arrow presses to Increse and decrease stroke size
 *
 * Description - This is fired by the current tool base class function draw. when user press Up or Down arrow on the keyboard, this function increase/ decrese the stroke size

 * @access     public

 * @fires   addStrokeSize() , reduceStrokeSize()
 * @listens User Keyboard input. Pre-defined by p5.js , StrokeUp, StrokeDown
 *
 * @param {NULL}   No parametets used           
 * @return {Integer} Returns false to prevent default.
 */
function keyPressed() {
  if (keyCode === UP_ARROW) {
    currentTool.addStrokeSize();
  } else if (keyCode === DOWN_ARROW) {
    currentTool.reduceStrokeSize();
  }
  return false; // prevent default
}


function StrokeUp(){
currentTool.addStrokeSize();

}

function StrokeDown(){
  currentTool.reduceStrokeSize();
}

/**
 * Summary - Updates the background color for the HTML front end element. {id = head}
 *

 * @fires   addStrokeSize() , reduceStrokeSize()
 * @listens startup()
 *
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */

function backgroundColorUpdateFirst (){
  
  updatedcolor = backgroundColor.value;
  background(updatedcolor);
}

/**
 * Summary - Updates the background color for the HTML front end element. {id = head}
 * - Difference between backgroundColorUpdateFirst and backgroundColorupdateAll is when user use mouse/hover out to select a color from the background palet.

 * @fires   addStrokeSize() , reduceStrokeSize()
 * @listens startup()
 *
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */

function backgroundColorupdateAll(){
   updatedcolor = backgroundColor.value;
   background(updatedcolor);
}
/**
 * Summary - Updates the Stroke color for the HTML front end element. {id = body}
 *

 * @fires   Null
 * @listens startup()
 * @Varibales updates : strokeColorDefault
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */


function strokeColorUpdateFirst(){
  strokeColorDefault = strokeColor.value;

}


/**
 * Summary - Updates the Stroke color for the HTML front end element. {id = body}
 * - Difference between backgroundColorUpdateFirst and backgroundColorupdateAll is when user use mouse/hover out to select a color from the background palet.

 * @fires   Null
 * @listens startup()
 * @Varibales updates : strokeColorDefault
 *
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */
function strokeColorupdateAll(){
  strokeColorDefault = strokeColor.value;

}

/**
 * Summary - // updating stroke size for the front End in Html
 *

 * @fires   Null
 * @listens Draw()
 * @Varibales updates : Null in backEnd
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */


function updateStrokeSizeHTML(){
  document.getElementById('inputBox').placeholder = defaultStroke;
}


