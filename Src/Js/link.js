var pencilVar = document.getElementById('pencil');
var eraserVar = document.getElementById('eraser');
var deselectVar = document.getElementById('deselect');
var resetVar = document.getElementById('reset');


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
