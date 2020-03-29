var deselectVar = document.getElementById('deselect');
deselectVar.addEventListener("click", deselectPressed);

function deselectPressed()
{
    pencil = false;
    eraser = false;
    document.body.style.cursor = "no-drop";
}
