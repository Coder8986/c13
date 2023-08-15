function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
image(video, 0, 0, 300, 300); 
fill("blue");
square(20,20,50);
fill("red");
circle(90,70,90);
fill("blue");
square(160,120,60);
fill("purple");
rect(10,120,60,60);
fill("pink");
circle(10,140,90);
fill("pink");
circle(160,150,90);
}

function take_snapshot() {
    save("img.png");
}

