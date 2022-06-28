//Create drawing variables
var canvas;
var ctx;

//Creat input variables
var upKey;
var rightKey;
var downKey;
var leftKey;

//Create game variables
var screenWidth = 1280;
var screenHeight = 720;
var gameLoop;
var borders = [];

//Runs once the page has loaded
window.onload = function () {
  //Assign canvas and context variables
  canvas = document.getElementById("game-canvas");
  ctx = canvas.getContext("2d");

  //Setup key listeners
  setupInputs();

  //Start Game Loop
  gameLoop = setInterval(step, 1000/30)
  //Draw on the canvas
  ctx.fillStyle = "#14213d";
  ctx.fillRect(0,0,screenWidth,screenHeight)
};

function step() {

    //Draw everything
    drawScreen();

}

function drawScreen() {
    //Clear the canvas
    ctx.fillStyle = "#14213d";
    ctx.fillRect(0,0,screenWidth,screenHeight)
    drawAllbodyParts()
}

function setupInputs() {
    document.addEventListener('keydown', function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = true;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true;
        }
    })
    document.addEventListener('keyup', function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = false;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false;
        }
    })
}