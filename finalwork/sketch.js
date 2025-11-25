// 最終課題を制作しよう
let x, y;
let vx = 0
let vy = 0
let w, h


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(160, 192, 255);
  x = width / 2;
  y = height / 2;
  let widths = []
  let heights = []
  
    // line(x, y, random(0, width), random(0, height));
  
}


function draw(){
  background(160, 192, 255);
    // widths[i] = random(0, width) 
    // heights[i] = random(0, height)
 
  // for(let i = 0; i < 10; i++){
  // widths[i] = random(0, width);
  // heights[i] =  random(0, height);
  
  // w = widths[1]
  // h = heights[1]
  // }
  line(x, y, random(0,width), random(0,height))
  vx = constrain(vx, 0, w)
  vy = constrain(vy, 0, h)
  if(vx < w){
    vx += 1
  }
  if(vy < h){
    vy += 1
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
