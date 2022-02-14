leftWrist = 0;
rightWrist = 0;
difference = 0;

function preload() {}

function draw() {
    background('#6C91C2');
    textSize(difference);
    fill("red");
    text("look at the dog", 45, 45);
    document.getElementById("unnamed").innerHTML = "Font size of the text will be = " + difference + "px"
}

function setup() {
    canvas = createCanvas(450, 460);
    video = createCapture(VIDEO);
    video.size(300, 300);
    canvas.position(310, 100);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelloaded() {
    console.log("posenet is loaded");
}