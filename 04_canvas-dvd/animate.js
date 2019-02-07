// Team AbsentBoy Bo hui Lu
// SoftDev pd7
// K04 -- What is it saving the screen from?
// 2019-02-07
// --------------------------------------------------

//get to canvas + buttons
var c = document.getElementById("playground");
var ctx = c.getContext("2d");


var dotBut = document.getElementById("circle");
var stopBut = document.getElementById("stop");
var dvdBut = document.getElementById("dvd")


//set fill color to blueeee
ctx.fillStyle = "blue";


var id;
var rad = 1;
var bigger = true;

//animates dot
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


//dvd animation
var requestID;
var dvdLogoSetup = function () {
    stop();
    //window.cancelAnimationFrame(requestID);
    ctx.clearRect(0, 0, c.width, c.height);
    //Dimension to draw the image in
    var rectWidth = 100;
    var rectHeight = 50;

    //Init spawn of dvd logo
    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random() * (c.height - rectWidth));

    var xVel = 1;
    var yVel = 1;

    //instantiating an image object
    var logo = new Image(rectWidth, rectHeight);
    logo.src = "logo_dvd.jpg";
    //ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

    var dvdLogo = function () {
        //ctx.beginPath();
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

        if (rectX >= c.width - rectWidth) { // right
            xVel = -1;
        } else if (rectY <= 0) { // top
            yVel = 1;
        } else if (rectY >= c.height - rectHeight) { // down
            yVel = -1;
        } else if (rectX <= 0) { // left
            xVel = 1;
        }

        // increment/decrement to the new position
        rectX += xVel;
        rectY += yVel;

        requestID = window.requestAnimationFrame(dvdLogo);
    };

    dvdLogo();

};

//method for stopping animation
var stop = function () {
    window.cancelAnimationFrame(id)
    window.cancelAnimationFrame(requestID);
};

dotBut.addEventListener("click", draw);
stopBut.addEventListener("click", stop);
dvdBut.addEventListener("click", dvdLogoSetup)
