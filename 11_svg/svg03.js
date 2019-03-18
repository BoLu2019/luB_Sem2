//Bo Hui Lu
//SoftDev pd7
//K11 -- Ask Circles [Change || Die] ...While On The Go
//2019-03-18M

var pict = document.getElementById("vimage");
var but = document.getElementById("but_clear");
//offset whacko b/c of firefox issues
var rect = pict.getBoundingClientRect();
var rapido = document.getElementById("but_move");
var requestID;
var animated = false;


var clear = function (e) {
    while (pict.firstChild) {
        pict.removeChild(pict.firstChild);
    }
    window.cancelAnimationFrame(requestID);
    animated = false;
}

var draw = function (e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.clientX - rect.left);
    c.setAttribute("cy", e.clientY - rect.top);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");
    c.setAttribute("dy", 1);
    c.setAttribute("dx", 1);

    //color change!
    c.addEventListener("click", (e) => {
        e.stopPropagation();
        c.setAttribute("fill", "pink");
        //teleportation magic
        c.addEventListener("click", (e) => {
            e.stopPropagation();
            c.remove();
            var xcor = (Math.floor(Math.random() * 501));
            var ycor = (Math.floor(Math.random() * 501));
            c.setAttribute("cx", xcor);
            c.setAttribute("cy", ycor);
            c.setAttribute("r", 10);
            c.setAttribute("fill", "purple");
            c.setAttribute("stroke", "black");
            pict.appendChild(c);
        });

    });

    pict.appendChild(c);

}

var giddyUp = function(e){
    if(!animated){
        animate();
        animated = true;
    }
}

var animate = function(e){
    window.cancelAnimationFrame(requestID);
    var i;
    for(i = 0; i < pict.children.length; i++) {
        var kiddo = pict.children[i];
        var rad = parseInt(kiddo.getAttribute('r'));
        var cx = parseInt(kiddo.getAttribute('cx'));
        var cy = parseInt(kiddo.getAttribute('cy'));
        var dy = parseInt(kiddo.getAttribute('dy'));
        var dx= parseInt(kiddo.getAttribute('dx'));
        //checking for walls
        if(cx + rad > 500 || cx - rad < 0){
            dx *= -1;
        } 
        if(cy + rad > 500 || cy - rad < 0){
            dy *= -1;
        }  
        
        kiddo.setAttribute('cx', cx + dx);
        kiddo.setAttribute('cy', cy + dy);

    }

    requestID = wndow.requestAnimationFrame(animate);
}

//event listeners
pict.addEventListener("click", draw);
but.addEventListener("click", clear);
rapido.addEventListener("click", giddyUp);
