// DOM manipulation - Active Listerned listing to objects from HTML
var pencilVar = document.getElementById('pencil');
var eraserVar = document.getElementById('eraser');
var deselectVar = document.getElementById('deselect');
var resetVar = document.getElementById('reset');
var paintBrush = document.getElementById("Paint-Brush");
var Highlighter = document.getElementById("Highlighter");
var download = document.getElementById("download"); 


// Event listeners Connecting HTML and JS
pencilVar.addEventListener("click", function(){
  selectTool('pencil');
});

eraserVar.addEventListener("click", function(){
  selectTool('eraser');
});

deselectVar.addEventListener("click", function(){
  selectTool('deselect');
});

resetVar.addEventListener("click", function(){
  selectTool('reset');
});

paintBrush.addEventListener("click",function(){
	selectTool('paintBrush');
})

Highlighter.addEventListener("click",function(){
	selectTool('Highlighter');
})

download.addEventListener("click",function(){
	selectTool('Download');
})

// code for the background color picker
	var defaultBackgroundColor = "#FFFFFF"
	var backgroundColor;
	window.addEventListener("load", startup, false);

// code for stroke color 
	var defaultstrokeColor = "#000000"
	var strokeColor;


/**
 * Summary - Function startup is used to get input change from the user and link it with the appropriate Variable/Onbject in backend

 *
 * @fires   StrokeUp(), StrokeDown() ,backgroundColorUpdateFirst() ,backgroundColorupdateAll() ,strokeColorUpdateFirst() , strokeColorupdateAll()
 * @listens Window.EventListener("load")
 *
 * @param {NULL}   No parametets used           
 * @return {NULL} 
 */
function startup(){

	backgroundColor = document.getElementById("head");
	backgroundColor.value = defaultBackgroundColor;	

	backgroundColor.addEventListener("input", backgroundColorUpdateFirst, false);
	backgroundColor.addEventListener("change", backgroundColorupdateAll, false);
	backgroundColor.select();

	strokeColor = document.getElementById("body");
	strokeColor.value = defaultstrokeColor;	

	strokeColor.addEventListener("input", strokeColorUpdateFirst, false);
	strokeColor.addEventListener("change", strokeColorupdateAll, false);
	strokeColor.select();

}




