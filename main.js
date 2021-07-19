var unstoppable = "";
var harryPotter = "";

function preload() {
    unstoppable = loadSound("Unstoppable.mp3");
    harryPotter = loadSound("Harry Potter.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}