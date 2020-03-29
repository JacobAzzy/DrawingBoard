var deselectVar = document.getElementById('deselect');
deselectVar.addEventListener("click", deselectPressed);

function deselectPressed()
{
	// change the icon to same as the cursor == no-drop
    pencil = false;
    eraser = false;
    document.body.style.cursor = "no-drop";
}
