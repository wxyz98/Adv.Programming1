var mic;
var amp;

var scale = 1.0;

function setup() {
    createCanvas(1000, 800);
    background(28, 55, 56);
    // Create an audio input and start it
    mic = new p5.AudioIn();
    mic.start();
    // Create a new amplitude analyzer and patch into input
    amp = new p5.Amplitude();
    amp.setInput(mic);
}


function draw() {
    // Draw a background that fades to black
    noStroke();
    fill(28, 55, 56, 10);
    rect(0, 0, width, height);
    // The getLevel() method returns values between 0 and 1,
    // so map() is used to convert the values to larger numbers
    scale = map(amp.getLevel(), 0, 0.5, 10, width);
    // Draw the circle based on the volume
    fill(233, 175, 163);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);
}
