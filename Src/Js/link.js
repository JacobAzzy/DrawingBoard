var pencilVar = document.getElementById('pencil');
var eraserVar = document.getElementById('eraser');
var deselectVar = document.getElementById('deselect');
var resetVar = document.getElementById('reset');
var paintBrush = document.getElementById("Paint-Brush");


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


// code for the background color picker
	var defaultBackgroundColor = "#FFFFFF"
	var backgroundColor;
	window.addEventListener("load", startup, false);

// code for stroke color 
	var defaultstrokeColor = "#000000"
	var strokeColor;



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




