// Bo Hui Lu and William Lu
// SoftDev pd7
// K02 -- ...and I want to Paint it better
// 2019-02-4

//variables to allow interaction with canvas
//also sets click color to blue and defaults to drawing boxes
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

//gets the size of canvas
var w = c.getAttribute("width");
var h = c.getAttribute("height");

//method for clearing the canvas
var clr = document.getElementById("clear");
clr.addEventListener('click', function(e) {
  //e.preventDefault();
  ctx.beginPath(); //necessary
  ctx.clearRect(0, 0, w, h);
})

//method for drawing a box/dot depending on the value of rect
c.addEventListener('click', function(e) {
  drawLine(e);
});


//func for drawing a line
var drawLine = function(e) {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.moveTo(e.offsetX+10, e.offsetY);
  ctx.strokeStyle = "white";
  ctx.ellipse(e.offsetX, e.offsetY, 10, 10, 0, 0, 2 * Math.PI)
  ctx.strokeStyle = "black";
  ctx.moveTo(e.offsetX, e.offsetY);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}
