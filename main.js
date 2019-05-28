const SCREEN_HEIGHT = 768,
  SCREEN_WIDTH = 1024,
  DRESS_HEIGHT = 800,
  DRESS_WIDTH = 800

var isDragging,
  bg,
  dress,
  canvas,
  dressPosX,
  dressPosY

function preload() {
  bg = loadImage('assets/manequim.jpg')
  dress = loadImage('assets/dress.jpg')
}

function setup() {
  canvas = createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  dress.resize(DRESS_WIDTH, DRESS_HEIGHT)
  bg.resize((SCREEN_WIDTH / 1.5), SCREEN_HEIGHT)
  isDragging = false
  dressPosX = SCREEN_WIDTH - (SCREEN_WIDTH / 2)
  dressPosY = 0
}

function draw() {
  background(122)
  image(bg, 0, 0);
  dressPosX = isDragging ? mouseX - (DRESS_WIDTH / 2) : dressPosX
  dressPosY = isDragging ? mouseY - (DRESS_HEIGHT / 2) : dressPosY
  image(dress, dressPosX, dressPosY)
}

function isMouseOver(mousePos) {
  if (mousePos.x > dressPosX &&
    mousePos.x < dressPosX + SCREEN_WIDTH &&
    mousePos.y > dressPosY &&
    mousePos.y < dressPosY + SCREEN_HEIGHT) {
    return true;
  }
  return false;
}

function mousePressed() {
  let m = createVector(mouseX, mouseY)
  if (isMouseOver(m)) {
    isDragging = true
  }
}

function mouseReleased() {
  isDragging = false
}