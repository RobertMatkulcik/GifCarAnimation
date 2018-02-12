var gif;

function setup() {
    var widthhh = window.innerWidth;
    var heightt = window.innerHeight;
    createCanvas(widthhh, heightt);
    gif = loadGif('sorry.gif');
    gif.pause();
}


function draw() {
    background(0);
    if (gif.loaded()) {
        image(gif, 0, 0);
    }
}








function mouseMoved() {
    if (gif.loaded()) {
        var frame = int(map(mouseX, 0, width, 0, gif.totalFrames()));
        gif.frame(frame);
    }
}

function mousePressed() {
    if (gif.playing()) {
        gif.pause();
    } else {
        gif.play();
    }
}
