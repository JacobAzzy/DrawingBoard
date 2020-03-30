function setupObjects(){
// work in progress

}

function selectTool(toolName){

    
    if(toolName == "pencil"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=131115'), auto;";
        currentTool = objectPencil;
    }else if(toolName=="eraser"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=72976'), auto;";
        currentTool = objectEraser;
    }else if(toolName=="deselect"){
        currentTool = objectEraser;
    }

}


class Tools{

    Constructor(){
        this.active = false;
        
    }

    draw(){
        line(mouseX, mouseY, pmouseX, pmouseY);

    }

}

class Pencil extends Tools{
    Constructor(){
        Super();
        this.active = true

    }
    draw(){
        
        stroke(pencilColor, pencilColor, pencilColor);
        super.draw();
        

    }
}

class Eraser extends Tools{
    Constructor(){
        Super();
        this.active = true;
    }
    draw(){
        stroke(backgroundColor, backgroundColor, backgroundColor);
        super.draw();
       
    }
    
}

class Deselect extends Tools{
    Constructor(){
        Super();
        this.active = true;
    }
    draw(){
    // draws nothing
    }
    
}

















