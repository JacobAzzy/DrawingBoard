function setupObjects(){
// work in progress

}

// ToDO:
// - new cursors for PaintBrush and Highlighter
// - pencil cannot change colors




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
        background("#FFFFFF");
        //redraw();
        // document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=1084'), auto;";
        // objectReset = new Reset();
        // currentTool = objectReset;
        // freeOtherObjects(objectReset);
    }
    else if(toolName=="paintBrush"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=67892'), auto;";
        objectPaintBrush = new PaintBrush();
        currentTool = objectPaintBrush;
        freeOtherObjects(objectPaintBrush);

    }
     else if(toolName=="Highlighter"){
        document.body.style = "cursor: url('http://www.rw-designer.com/cursor-extern.php?id=11962'), auto;";
        objectHighlighter = new HighlighterC();
        currentTool = objectHighlighter;
        freeOtherObjects(objectPaintBrush);
        
    }
     else if(toolName=="Download"){
        saveCanvas(canvas, 'myCanvas', 'jpg');
        
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
        defaultStroke += 2;
       // circle(mouseX, mouseY, defaultStroke);
    }
    reduceStrokeSize(){
        defaultStroke -= 2;
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
        defaultStroke = 6;


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
class HighlighterC extends Tools{
    Constructor(){
        Super();
        this.active = true
    }
    
    draw(){
        super.draw();
        strokeWeight(defaultStroke);
        stroke(255,255,0,63);
        strokeCap(PROJECT);

    }

}


function freeOtherObjects(s){
    delete toolbox[0];
    toolbox.push(s);
}











