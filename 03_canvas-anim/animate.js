// Team AbsentBoy Bo hui Lu
// SoftDev pd7
// K03 -- They lock us in the tower whenever we get caught ...
// 2019-02-06
// --------------------------------------------------

//get to canvas + buttons
var c = document.getElementById("playground");
var ctx = c.getContext("2d");


var dotBut = document.getElementById("circle");
var stopBut = document.getElementById("stop");


//set fill color to blueeee
ctx.fillStyle = "blue";


var id;
var rad = 1;
var bigger = true;


var draw = function () {
    window.cancelAnimationFrame(id);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "blue"

    //checks if dot is getting bigger or nt
    if (bigger) {
         rad += 1; 
    }
    else {
        rad -= 1;
    }

    //checks size of dot
    if (rad == (c.width / 2))
        bigger = false;
    else if (rad == 1) {
        bigger = true;
    }

    //draw the dot
    ctx.beginPath();
    ctx.ellipse(c.width / 2, c.height / 2, rad, rad, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    id = window.requestAnimationFrame(draw);
};

//method for stopping animation
var stop = function () {
    window.cancelAnimationFrame(id);
};

dotBut.addEventListener("click", draw);
stopBut.addEventListener("click", stop);
