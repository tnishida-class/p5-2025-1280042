// 最終課題を制作しよう
let x, y;
let w, h

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  x = width / 2;
  y = height / 2;
}

function draw(){
  textSize(32); 
  textAlign(CENTER, CENTER); 
  text("improve comunity", width / 2, height / 2); 
  stroke(random(0, 255), random(0, 255), random(0, 255))
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
  for(let j = 0; j < 10; j += 1){
   w = random(0, width)
   h = random(0, height)
   w1 = random(0, width)
   h1 = random(0, height)
   stroke(random(0, 255), random(0, 255), random(0, 255))
   line(x, y, w, h)
   line(w, h, w1, h1)
   line(w1, h1, x, y)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
