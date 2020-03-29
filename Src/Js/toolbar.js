// parent class 
//	- opacity
//	- shape
//	- size

// Child class
// Pencil 
//	- Constructor
//	- extras
// Eraser 
//	- Constructor
//	- extras

//DOM

var pencilVar = document.getElementById('pencil');
pencilVar.addEventListener("click", pencilPressed);

var eraserVar = document.getElementById('eraser');
eraserVar.addEventListener("click", eraserPressed);

function pencilPressed(){
	// Mouse Hover 
	// text to show to which tool is getting selected


    pencil = true;
    eraser = false;
    document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=131115'), auto;";
}

function eraserPressed(){

	// Mouse Hover 
	// text to show to which tool is getting selected

	
    eraser = true;
    pencil = false;
    document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=72976'), auto;";
}
