function setupObjects(){
// work in progress

}

function selectTool(toolName){
    if(toolName == "pencil"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=131115'), auto;";
        
        objectPencil = new Pencil();
        currentTool = objectPencil;
        freeOtherObjects(objectPencil);

    }
    else if(toolName=="eraser"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=72976'), auto;";
        objectEraser = new Eraser();
        currentTool = objectEraser;
        freeOtherObjects(objectEraser);
    }
    
    else if(toolName=="deselect"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=1076'), auto;";
        objectDeselect = new Deselect();
        currentTool = objectDeselect;
        freeOtherObjects(objectDeselect);
    }
    
    else if(toolName=="reset"){
        clear();
        // document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=1084'), auto;";
        // objectReset = new Reset();
        // currentTool = objectReset;
        // freeOtherObjects(objectReset);
    }
    else if(toolName=="paintBrush"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=72976'), auto;";
        objectPaintBrush = new PaintBrush();
        currentTool = objectPaintBrush;
        freeOtherObjects(objectPaintBrush);
        
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
        stroke(strokeColorDefault);
        super.draw();
        strokeWeight(2);
    }
}

class Eraser extends Tools{
    Constructor(){
        Super();
        this.active = true;
    }
    draw(){
        stroke(updatedcolor);
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

class PaintBrush extends Tools{
    Constructor(){
        Super();
        this.active = true
    }
    
    draw(){
        stroke(strokeColorDefault);
        super.draw();
        strokeWeight(defaultStroke);

    }

}

// class Reset extends Tools{
//     Constructor(){
//         Super();
//         this.active = true;
//     }
//     draw(){
        
//     }
// }

function freeOtherObjects(s){
    delete toolbox[0];
    toolbox.push(s);
}











