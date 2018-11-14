var r = 0;
var g = 0;
var b = 0;

function setup() {
createCanvas(600,600);

}


function draw() {
  background(r,g,b);
fill(181,184,167);
stroke(0);
strokeWeight(12);
rect(0,300,330,300,2,100,0,0);
stroke(random(255),random(255),random(255));
fill(234,236,233);
ellipse(450, 150, 295, 295);
fill(0,0,0);
noStroke();
rect(450,330,74,220);

if(mouseY > height/2) {
    r = r + 1; 
    g = g + 1;
    b = b + 1;
  } else {
    r = r - 1;
    g = g - 1;
    b = b - 1;
  }

 
  if (r > 126) {
    r = 125; 
  } else if (r < 0) {
    r = 0; 
  }
 if (g > 146) {
    g = 145; 
  } else if (g < 0) {
    g = 0; 
  }
   if (b > 137) {
    b = 137; 
  } else if (b < 0) {
    b = 0; 
  }
}
