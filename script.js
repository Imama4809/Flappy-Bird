let img //these images are for the bird and the background
let img2
let x=0; //this one is for the jump of the bird
//variables with s stand for booleans, im just more comfortable using variables and positive and negative rather than true and false, and every one with b acts as a sort of incrementor
const SPACE_BAR = 32;
let b2 = 1;
let s1 =1;
let s2 =-1;
let b3 = -1000;
let y;
let s4 =-1;
let s3 =1;
let score = 0;
let i1=1
let n;
let s5=1;
//set of constants I need for the following code


function preload(){
  img = loadImage("flappybird_background.png");
  img2= loadImage("flappybird2.png");
  //importing the background
}


function setup() {// the setup for the beginning 
  print("hello\n world");
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, width, height);
  //setting up the proper background 
}


function draw(){ //runs every frame
  if (s4>0){
      if (b3 <= -1*width/5 && b3>=-1*width/5 - 3*width/20){
        //if the bird hits the pipe at all, the following code causes a game over
        if (s1>0){
          if ((b2-x) >= y +height/4){
            s4 = -1*s4;
          }
          if ((b2-x) <= y - height/4){
            s4 = -1*s4;
          }
        } else {
          if (mouseY >= y +height/4){
            s4 = s4*-1;
          }
          if (mouseY <= y - height/4 ){
            s4 = s4*-1;
          }
        }
      }
    if ((b2-x)>0){ // this if statement stops the bird from going above the screen
      bird();
      // the following code changes the pipe depending on the value of the random value y
      pipe();
    }else{
      b2=x; // this sets the bird so that it gets blocked at the top of the window if it tries to go above 
    }
    if ((b2-x)<height-width/20){ // this if statement stops the bird from going under the screen 
      if (s2>0){ //pauses the fall if the mouse is clicked 
        b2 = b2 + height/170;//makes the bird fall
      }
    }
    if (s2>0){ //while the game is not paused
      b3 = b3 + width/100;
    }
    if (b3>0){ //resets the buffer everytime the pipe goes offscreen, sending the pipe back to the start
      b3 = -1*width;
      y = random(height); //changes the pipe everytime one goes offscreen
      if (i1>1){ //because my code isn't the best, the score actually increments before a pipe is on the screen, this stops that
        score++;
      }
      i1++;
    }
  }
  if (s5 >0){ // this is a way to ensure that the player has time to read the dialouge at the beginning
      b3=-2*width;
      s5=-1;
      s4 =1;
  }
}


function bird(){ //mechanics of the bird //setting up a way to move the bird up and down by letting the height be a variable
  image(img, 0, 0, width, height);
  if (b3 < -1*width){
    fill(0);
    text("Hello!, Welcome to my version of flappy bird\n the game is paused right now\n if you wish to pause/unpause the game, press the mouse button\npress the space key to get the bird to jump\n switching to a mode where the bird follows your mouse requires double-clicking", width/2, height/2); //writes a tutorial that can only be seen at the beginning of the game
  }
  fill(0);
  textSize(width/30);
  fill(255,255,255)
  textAlign(CENTER, CENTER); 
  text("Score\n", width/2, 1*height/8);
  text(score, width/2, 1*height/8 + width/30); // lines 96 and 97 write the score 
  fill(0);
  text("Auronno Imam                 , ", width - width/30, height - width/30); // this one writes my name
  fill(25,40,40);
  if (s1>0){ 
    image(img2,width/5,b2-x,width/20,width/20); //bird drawing
  } else {
    image(img2,width/5,mouseY,width/20,width/20); // after double clicking it switches the bird to following the mouse 
  }
}


function keyPressed(){ //set of rules for if a specific key is pressed
   if (keyIsDown(SPACE_BAR)) {
      if (s2>0){ //pauses the "jump" of the bird when the mouse is clicked
        x = x + (height/7);
      }
   }
  if (keyIsDown(ENTER)){// this will start and stop the game using a buffer
  }
}


function doubleClicked() { 
  s1 = s1*-1; //basically a boolean for switching gamemode
}


function mouseClicked() {
  s2=s2*-1; //basically a boolean for pausing the game
}


function pipe() { //creates a pipe taht moves based on variable b3
  fill(0,255,0);
  // creates the pipe 
  rect(-1*b3,y+height/4 - height/16,-1* width/10, 3*height/4 - y + height/16);
  rect(-1*b3,0, -1*width/10, y - height/4 - height/16);
  fill(0,200,0);
  //creates the "enterance" of the pipe (Think about it like Mario)
  rect(-1*b3 + width/30,  y - height/4 -height/16,-1* width/6, height/16)
  rect(-1*b3 + width/30, height/4 +y - height/16,-1*width/6, height/16)
}


