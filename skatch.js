let snake;
let rez = 10;
let food;
let w;
let h;
let score = 0;
let speedIncreaseFactor = 1;
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(6);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
}

function draw() {
  scale(rez);
  background(144,238,144);
  
  if (gameOver) {
    textSize(1);
    fill(60,179,113);
    text("Game Over! Score: " + score, 5, 5);
    noLoop();
    return;
  }
  textSize(2);
  fill(0);
  textAlign(CENTER, TOP);
  text("Jogo da Cobrinha", width / rez / 2, 0);
  if (snake.eat(food)) {
    score += 10; 
    foodLocation();
  }
 if (snake.eat(food)) {
    foodLocation();
    currentFrameRate += speedIncreaseFactor; 
    frameRate(currentFrameRate); 
  }
  snake.update();
  
  
  if (snake.endGame()) {
    gameOver = true;
  }

  snake.show();
  
  noStroke();
  fill(255, 0,0);
  rect(food.x, food.y, 1, 1);
}
