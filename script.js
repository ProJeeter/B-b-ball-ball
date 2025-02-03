let jeetland, xyz;

function preload(){
    xyz = loadImage("abdur goofy.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    jeetland = new Sprite(windowWidth/2, windowHeight/2, 50, 50, "s");
    jeetland.img = xyz;
    jeetland.scale = 0.25;

}

function draw(){
    background("pink")

    jeetland.rotationSpeed = 0.5;
    jeetland.speed = 2
}