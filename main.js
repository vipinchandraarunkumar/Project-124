function setup()
{
 video = createCapture(VIDEO);
 video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(570,100);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#AFE1AF');
}

function modelLoaded()
{
 console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
 if(results.length > 0)
 {
   console.log(results);
 } 
}