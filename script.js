var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

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
  ballX = ballX + ballSpeedY;
  if(ballX < 0){
      ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width){
      ballSpeedX = -ballSpeedX;
  }
  if(ballY < 0){
      ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.width){
      ballSpeedY = -ballSpeedY;
  }
}

function drawEverything () {
  // the line below fills the screen with black
  colorRect(0,0,canvas.width,canvas.height,'black');
 //next line creates the player paddle
  colorRect(0,210,10,100,'white');
  //the line below draws the ball
  colorCirlce(ballX, 150, 10, 'white');
}

function colorCirlce(centerX,centerY,radius,drawColor){
  canvasContext.fillStyle = 'white';
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();

}

function colorRect(leftX,topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width, height, drawColor);

}
