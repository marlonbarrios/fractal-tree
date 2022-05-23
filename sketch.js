
// thanks to Daniel Shiffman
//

var angle2 = 100
var angle2 = mouseX/10;


function setup() {
 
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
  background(0);

  stroke(255);
  translate(width /2, height);
  branch(windowHeight- mouseY );
}

function branch(len) {
  var angle2 = mouseX/2 * 0.001;
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle2);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle2);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}