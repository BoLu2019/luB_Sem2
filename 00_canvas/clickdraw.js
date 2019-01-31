// Bo Hui Lu
// SoftDev pd7
// K00 -- I See a Red Door
// 2019-01-30


var clr = document.getElementById("clear");
var tog = document.getElementById("toggle");

var mode = true; //rect = truee, dot = false


var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle= 'red';

clr.addEventListener("click", clearCanvas );
tog.addEventListener("click", newMode );

tog.innerHTML = "Click if ye want dots";

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "red";

}

function newMode() {
    if (mode) {
        mode = false;
        tog.innerHTML = "Click if ye want rectangles"
    }
    else{
        mode = true;
        tog.innerHTML = "Click if ye want dots"
    }

}

function drawStuff(e) {
    if (mode == true) { //rectt mode
        ctx.fillRect(e.offsetX - 50, e.offsetY - 75, 50, 100)

    }
    else{
        ctx.beginPath()
        ctx.ellipse(e.offsetX, e.offsetY, 5, 5, 0, Math.PI, Math.PI*3)
        ctx.fill();
        ctx.stroke();

    }


}


c.addEventListener("click", drawStuff);

console.log(c);
console.log(ctx);