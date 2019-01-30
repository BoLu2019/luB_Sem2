document.getElementById("clear").addEventListener("click", clearCanvas);

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

function clearCanvas() {
    ctx.clearRect(0, 0, 300, 300);

}


document.getElementById("slate").addEventListener("click", drawRect);

function drawRect() {
    ctx.fillRect(0, 0, 10, 15);

}
