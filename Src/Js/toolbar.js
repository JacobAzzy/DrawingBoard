/*
Summary - Selecting different tools.

Description - When the user switches tools, this function changes the toolName to the selcted tool by the user. 
              When a new tool is selected, the cursor changes to the desired tool, then we create a new object
              based on that tool. Lastly, the previous tool gets freed.

@access public

@initialize currentTool
@listens link.js

@param {toolName as a string}
@return {nothing}
*/
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

/*
Summary - This is the parent class for the tools.

Description - The main function of this class is the draw() function. This function takes the current
              tool selected and draws with the attributes of that tool. There are also addStrokeSize()
              and reduceStrokSize(), and they alter the stroke size by 2, depending on which function
              gets called.

@childclasses Pencil, Eraser, Deselect, PaintBrush, Highlighter 
*/
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
    }
    reduceStrokeSize(){
        defaultStroke -= 2;
    }
}

/*
Summary - This is the child class for the pencil.

Description - The draw function uses the interchangable strokeColorDefault variable, so the user
              can change the colour they want to use for the pencil. The defaultStroke is set to 6
              because the pencil stroke size is always constant.

@parent - Tools
*/
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

/*
Summary - This is the child class for the eraser.

Description - The draw function erases any drawing on the canvas. We do this by "drawing" with
              the background colour, to simulate an eraser.

@parent Tools 
*/
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

/*
Summary - This is the child class for the deselect.

Description - The draw function does nothing because the deselect tool just releives the user
              of any tool.

@parent 
*/
class Deselect extends Tools{
    Constructor(){
        Super();
        this.active = true;
    }
    draw(){
    // draws nothing
    }
    
}

/*
Summary - This is the child class for the paint brush.

Description - The draw function uses the strokeColorDefault for the stroke because the colour of
              the paint brush is interchangable. We also use defaultStroke beacause the stroke
              size is also interchangable.

@parent 
*/
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

/*
Summary - This is the child class for the highlighter.

Description - The draw function uses defaultStroke because the stroke size is interchangable.
              However, the stroke is set to (255,255,0,63) because (255,255,0) is the colour
              yellow and we always want the highlighter to be yellow, and the 63 represents the 
              opacity because a highlighter usually has around a 25% opacity compared to a 
              pencil or paintbrush. We the have strokeCap(PROJECT), which represents the highlighter
              edge, as a highlighter as a linear point, whereas the pencil and paintbrush have 
              rounded points

@parent Tools
*/
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


/*
Summary - Frees the previous tool object in the memory and initializes the selected tool.

Description - This function erases the memory, then pushes the new currentTool onto toolbox.

@access public

@initialize currentTool
@listens selectTool(toolName)

@param {currentTool}
@return {nothing}
*/
function freeOtherObjects(s){
    delete toolbox[0];
    toolbox.push(s);
}











