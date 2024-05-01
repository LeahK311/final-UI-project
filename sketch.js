// var video;
// var scaler = 5;
// var preFrame;
let textString = "what is your current outlook on life";
let glitchSpeed = 1;
let glitchAmount = 0;

let button;
let buttonPressed = false;
//let title;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let button2;
let audio1;
let currentImageIndex = 1;
let images = []; // Array to hold image paths
let audios = []; // Array to hold audio paths
//let fuckasstext;
// let border;

function preload (){
   
    img1 = loadImage('egon scheile.png');
    images.push(loadImage('melting clocks.jpeg'));
    images.push(loadImage('its over.png'))
    images.push(loadImage('in a world.png'));
    images.push(loadImage('this is fine.jpg'));
    images.push(loadImage('avatar.jpg'));
    images.push(loadImage('bible.jpeg'));
    audios.push(loadSound('SZA_-_Good_Days.mp3'));
   // audios.push(loadSound(''))
   // fuckasstext = loadFont('OFL.txt');

    //border = loadModel('FINAL UI PROJECT/RESP1Asset 3.obj', true);
}
function setup() {
  createCanvas(2000, 2000, WEBGL);
  background(0, 0, 0);
  textSize(100);

  
  
  // Create the button
  button = createButton('BEGIN JOURNEY');
  button.position(width / 2 - 50, height - 100); // Center the button at the bottom
  button.mousePressed(startJourney);
}

function startJourney() {
  button.hide(); // Hide the button when pressed
  background(255); // Change background color to white
  buttonPressed = true; // Set the flag indicating button press
}

function draw() {
    
  // Clear the canvas if the button is pressed
  if (buttonPressed) {

   // clear();
//     textSize(80);
//   text('I view life as an ebb and flow of energy, emotion, and experiences. My attitude towards it shifts depending on how much stress and pain Ive put my body through. Mostly though, I keep a positive outlook and do my best to cultivate a naive happiness towards living because ultimately, life is short. ' ,35, 55);
// //
    background(255);
    
        box(400, 400, 400);
        texture(img1);
        if (mouseX !== pmouseX || mouseY !== pmouseY) {
            // Change the current image index
            currentImageIndex = (currentImageIndex + 1) % images.length;
            // Update the texture
            img1 = images[currentImageIndex];
            // Stop current audio and play the corresponding audio
            // audio1.stop();
            // audio1 = audios[currentImageIndex];
            // audio1.play();
          }

        //   text('I view life as an ebb and flow of energy, emotion, and experiences. My attitude towards it shifts depending on how much stress and pain Ive put my body through. Mostly though, I keep a positive outlook and do my best to cultivate a naive happiness towards living because ultimately, life is short. ');
        //   fill(250, 250, 250);
        
       // mouseMoved(changeTexture);

//play sound
//      audio1 = audios[currentImageIndex];
//   audio1.play();
     

        // Create the second button
        // push();
        // let button2 = createButton('NEW PERSPECTIVE');
        // button2.position(width / 2 - 100, height - 50); // Position the button
        // button2.mousePressed(changeBox);
        // pop();

       // return;



   
   
    // model(border);
    
  // Exit draw loop if button is pressed
  }
//  fill(0);
//   text('what is your current outlook on life?', 0, 0);
  
  // orbiting boxes

//

  let orbitScale = 0.01;
  rotateZ(frameCount * orbitScale);
  rotateX(frameCount * orbitScale);
  rotateY(frameCount * orbitScale);



  push();
  translate(-250, -30, 50);
  box(60, 60, 60);
  pop();
  push();
  translate(-200, -80, 50);
  box(50, 50, 50);
  pop();

  push();
  translate(-150, -50, 50);
  box(30, 30, 30);
  pop();

  push();
  translate(-110, -50, 50);
  box(20, 20, 20);
  pop();

  push();
  translate(-100, -20, 50);
  box(10, 10, 10);
  pop();

  push();
  translate(250, -30, 50);
  box(60, 60, 60);
  pop();

  push();
  translate(200, -80, 50);
  box(50, 50, 50);
  pop();

  push();
  translate(150, -50, 50);
  box(30, 30, 30);
  pop();

  push();
  translate(110, -50, 50);
  box(20, 20, 20);
  pop();

  push();
  translate(100, -20, 50);
  box(10, 10, 10);
  pop();

  //

// glitching text




for (let i = 0; i < textString.length; i++) {
    let x = 300;
    let y = 300;
    
    // Apply glitch effect by randomly changing position and opacity
    let glitchX = x + random(-glitchAmount, glitchAmount);
    let glitchY = y + random(-glitchAmount, glitchAmount);
    let alpha = random(100, 255);
    
    fill(255, 255, 255, alpha);
    text(textString[i], glitchX, glitchY);
  }
  
  // Update glitch effect over time
  glitchAmount = map(sin(frameCount * glitchSpeed), -1, 2, 0, 10);
}

     //function changeTexture() {
        // Change the texture of the box
        // For demonstration purposes, let's switch between the images
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//texture = images[currentImageIndex];
    
        // Stop current audio and play the corresponding audio
        // audio1.stop();
        // audio1 = audios[currentImageIndex];
        // audio1.play();
        // buttonpressed = true;

//}

    // buttonclicked = true;









//!!pixel stuff below!!


//   video.loadPixels();
//   preFrame.loadPixels();

//   for (let y = 0; y < video.height; y++) {
//     for (let x = 0; x < video.width; x++) {
//       var index = (x + y * video.width) * 4
//       let pr = preFrame.pixels[index + 0];
//       let pg = preFrame.pixels[index + 1];
//       let pb = preFrame.pixels[index + 2];
//       let pbright = (pr + pg + pb) / 3;

//       let r = video.pixels[index + 0];
//       let g = video.pixels[index + 1];
//       let b = video.pixels[index + 2];
//       let bright = (r + g + b) / 3;
			
//       var diff = dist(r, g, b, pr, pg, pb);
// 			if (diff<15){
//         fill(bright);
//       } else {
//         fill(255, 0, 0);
//       }
//       noStroke();
//       ellipse(x * scaler, y * scaler, scaler, scaler);
//     }

//!!pixel stuff above!!
  //}

   // preFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);

