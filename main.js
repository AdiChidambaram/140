function setup() {
   var canvas = createCanvas(1240,336);
	canvas.parent('canvas');
    video = createCapture(VIDEO);
	video.size(1240, 336);
    video.hide();
    pn = ml5.poseNet(video, modelLoaded);
	pn.on('pose', gotPoses);
}

function draw() {
    background(0);
    image(video, 0, 0, 1240, 336);
    fill("black");
    stroke("black");
    rect(680, 0, 20, 800);
}

function modelLoaded() {
	console.log("Model Loaded");
}