var canvas;
var canvasContext;

window.onload = function (){
  console.log("Hello World!");
  canvas = document.getElementById("pongCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
}
