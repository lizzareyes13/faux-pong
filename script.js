var canvas;
var canvasContext;
var ballX = 50;

window.onload = function () {
  console.log("Hello World!");
  canvas = document.getElementById("pongCanvas");
  canvasContext = canvas.getContext("2d");

  setInterval(drawEverything, 50);
}

function drawEverything () {
  ballX = ballX + 5;

  console.log(ballX);
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(225,210,200,200);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(ballX,200,10,10);
}
