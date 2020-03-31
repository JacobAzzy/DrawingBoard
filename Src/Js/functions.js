/*var deselectVar = document.getElementById('deselect');
deselectVar.addEventListener("click", deselectPressed);

function deselectPressed()
{
	// change the icon to same as the cursor == no-drop
    pencil = false;
    eraser = false;
    document.body.style.cursor = "no-drop";
}
*/

function keyPressed() {
  if (keyCode === UP_ARROW) {
    currentTool.addStrokeSize();
  } else if (keyCode === DOWN_ARROW) {
    currentTool.reduceStrokeSize();
  }
  return false; // prevent default
}