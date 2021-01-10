song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
  song1=loadSound("Aankh Marey - Simmba 128 Kbps.mp3");
  song2=loadSound("Jai Jai Shivshankar - war 128 Kbps.mp3");
}

function setup(){
  canvas=createCanvas(500,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  
  poseNet=ml5.poseNet(video,modelloaded);
  poseNet.on('pose',gotPoses);
}
function modelloaded(){
  console.log("PoseNet Initialized!");
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("Left Wrist X = "+leftWristX+" , "+"Left Wrist Y = "+leftWristY);
    leftWristYscore=results[0].pose.keypoints[0].score;
    console.log("Left Wrist Score = "+leftWristyscore);

    rightWristX=reuslts[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("Right Wrist X = "+rightWristX+" , "+"Right Wrist Y = "+rightWristY);
  }
}
function draw() {  
    image(video,0,0,500,500);

    fill("red");
    stroke("red");
    if(leftWristYscore > 0.2){
      circle(leftWristX,leftWristY,20);
      
      song2.stop();
      if(song1.isPlaying() == "false"){
        song1.play();
        document.getElementById("song-name").innerHTML=song1;
      }
    }
}