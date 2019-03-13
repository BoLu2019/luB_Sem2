//Bo Hui Lu
//Softdev pd7
//k09 -- Connect the dots
//2019-03-12

//initial vars
var pict = document.getElementById("vimage");
var button = document.getElementById("but_clear");

var firX = 1; //first x
var firY = 0; //first y

var clear = (e) => {
    while (pict.firstChild) {
        pict.removeChild(pict.firstChild);
    }
    firX = 1;
    firY = 0;
}

var draw = (e) => {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); 
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    //draws line when not the first pt, cuz the first one would be a circle
    if( firX != 1){
        line.setAttribute('x1',firX);
        line.setAttribute('y1',firY);
        line.setAttribute('x2',e.offsetX);
        line.setAttribute('y2',e.offsetY);
        line.setAttribute("stroke", "black")
    }  
    
    //circle
    circle.setAttribute("cx",e.offSetX);
    circle.setAttribute("cy",e.offSetY);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill","purple");
    circle.setAttribute("stroke","black");
    //Add to pict
    pict.appendChild(circle);
    pict.appendChild(line);
    //Update vars
    firX = e.offSetX;
    firY = e.offSetY;


}

//event listeners
pict.addEventListener("click", draw);
button.addEventListener("click", clear);