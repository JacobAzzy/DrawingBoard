function setupObjects(){
// work in progress

}

function selectTool(toolName){

    
    if(toolName == "pencil"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=131115'), auto;";
        
        objectPencil = new Pencil();
        currentTool = objectPencil;
        freeOtherObjects(objectPencil);

    }else if(toolName=="eraser"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=72976'), auto;";
        
        objectEraser = new Eraser();
        currentTool = objectEraser;
        freeOtherObjects(objectEraser);

    }else if(toolName=="deselect"){
        objectDeselect = new Deselect();
        currentTool = objectEraser;
        freeOtherObjects(objectDeselect);

    }

}

class Tools{

    Constructor(){
        this.active = false;
        
    }

    draw(){
        
        line(mouseX, mouseY, pmouseX, pmouseY);
        strokeWeight(defaultStroke);
        strokeCap(ROUND);

    }
    addStrokeSize(){
        defaultStroke += 3;
       // circle(mouseX, mouseY, defaultStroke);


    }
    reduceStrokeSize(){
        defaultStroke -= 3;
        //circle(mouseX, mouseY, defaultStroke);
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

function freeOtherObjects(s){

    delete toolbox[0];
    toolbox.push(s);

}











