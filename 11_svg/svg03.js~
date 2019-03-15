//Bo Hui Lu
//SoftDev pd7
//K10 -- Ask Circles [Change || Die]
//2019-03-14R

var pict = document.getElementById("vimage");
var but = document.getElementById("but_clear");
//offset whacko b/c of firefox issues
var rect = pict.getBoundingClientRect();

var clear = function(e) {
    while (pict.firstChild) {
        pict.removeChild(pict.firstChild);
    }
}

var draw = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.clientX - rect.left);
    c.setAttribute("cy", e.clientY - rect.top);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");

    //color change!
    c.addEventListener("click", (e) => {
        e.stopPropagation();
        c.setAttribute("fill", "pink");
    });

    pict.appendChild(c);

}

//event listeners
pict.addEventListener("click", draw);
but.addEventListener("click", clear);