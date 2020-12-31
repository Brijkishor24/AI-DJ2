song1="";
song2="";
function preload(){
  song1=loadSound("Aankh Marey - Simmba 128 Kbps.mp3");
  song2=loadSound("Jai Jai Shivshankar - war 128 Kbps.mp3");
}

function setup(){
  canvas=createCanvas(500,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
}
function draw() {  
    image(video,0,0,500,500);
}