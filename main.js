nose_x=0;
nose_y=0;

function preload()
{
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");

}


function setup()
{

    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
image(video, 0, 0, 300, 300);
image(lipstick, nose_x, nose_y, 40, 30);
}

function take_snapshot()
{

    save("myfilter.png");
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-17;
        nose_y=results[0].pose.nose.y+15;
        
    }
}