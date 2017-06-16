var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 15;

window.onload = function () {
  console.log("Hello World!");
  canvas = document.getElementById("pongCanvas");
  canvasContext = canvas.getContext("2d");

  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }
  , 1000/framesPerSecond);
}



function moveEverything () {
  ballX = ballX + ballSpeedX;
  if(ballX < 0){
      ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width){
      ballSpeedX = -ballSpeedX;
  }
}

function drawEverything () {
  // the line below fills the screen with black
  colorRect(0,0,canvas.width,canvas.height,'black');
 //next line creates the player paddle
  colorRect(0,210,10,100,'white');
  //the line below creates the ball
  colorRect(ballX,200,10,10,'red');
}

function colorRect(leftX,topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width, height, drawColor);

}
