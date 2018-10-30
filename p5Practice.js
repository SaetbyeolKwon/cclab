var canvas

var angle = 1
var posX
var posY

var posX2
var posY2

var posX3
var posY3

var radius = 80
var orbit = 130

var c = 255

function setup() {
  //canvas tag has to be always on the top
  canvas = createCanvas(windowWidth,1100)
  canvas.position(0,0)
  
  //then set background color transpalent
  background(0,0)
  
  frameRate(30)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  angle = angle + 0.1
  
  posX = mouseX + cos(angle)*orbit
  posY = mouseY + sin(angle)*orbit
  posX2 = mouseX + cos(angle+8.25)*orbit
  posY2 = mouseY + sin(angle+8.25)*orbit
  posX3 = mouseX + cos(angle+16.5)*orbit
  posY3 = mouseY + sin(angle+16.5)*orbit
  
  fill(c,50)
  noStroke()
  ellipse(posX, posY, radius, radius)
  ellipse(posX2, posY2, radius, radius)
  ellipse(posX3, posY3, radius, radius)
}

function mouseClicked() {
  if (c === 255) {
    c = 0;
  } else {
    c = 255;
  }
}
