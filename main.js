leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song = "";
function preload()
{
song = loadSound("music.mp3");
}
function setup()
{
canvas = createCanvas(700,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
console.log("Model is loaded");
}

function gotPoses(results)
{
if(results.length >0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
scoreLeftWrist=results[0].pose.keypoints[9].score;
scoreRightWrist=results[0].pose.keypoints[10].score;
}
}

function draw()
{
image(video, 0,0,700,450);
}

function play()
{
song.play();
song.volume(1);
song.rate(1);
}