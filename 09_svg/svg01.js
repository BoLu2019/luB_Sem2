//Bo Hui Lu
//Softdev pd7
//k09 -- Connect the dots
//2019-03-12

//initial vars
var pict = document.getElementById("vimage");
var button = document.getElementById("but_clear");

var firX = null; //first x
var firY = null; //first y

var clear = function(e) {
    while (pict.firstChild) {
        pict.removeChild(pict.firstChild);
    }
    firX = null;
    firY = null;
}

var draw = function(e) {
   

    //draws line when not the first pt, cuz the first one would be a circle
    if( firX != null){
        e.preventDefault();
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1",firX);
        line.setAttribute("y1",firY);
        line.setAttribute("x2",e.offsetX);
        line.setAttribute("y2",e.offsetY);
        line.setAttribute("stroke", "black")
        pict.appendChild(line);
	
    }  
    
    //circle
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); 
    circle.setAttribute("cx",e.offsetX);
    circle.setAttribute("cy",e.offsetY);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill","purple");
    //Add to pict
    pict.appendChild(circle);

    
    //Update vars
    firX = e.offSetX;
    firY = e.offSetY;
    

}

//event listeners
pict.addEventListener("click", draw);
button.addEventListener("click", clear);
