var canWidth = 864;
var canHeight = 300;
// the postion of the frame will be drawn
var x = 0;
var y = 0;

var left = false;

var trackLeft = 1;
var trackRight = 0;

var srcX;
var srcY;

var sheetWidth = 864;
var sheetHeight = 280;
// nombre of frames per rows
var cols = 8;
var rows = 2;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

//index's frame
var currentFrame = 0;
var frameCount = 8;

var img = new Image();
img.src = "sprite.png";

var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;

var ctx = canvas.getContext('2d');
function moveRight(){
    left = false;
}
function moveLeft (){
    left = true;
}

function updateFrame(){
    ctx.clearRect(x, y, width, height);
    currentFrame = ++currentFrame % frameCount;
    srcX = currentFrame * width;
    if(left){
        x-=5;
        srcY = trackLeft * height;
    }else{
        x+=5;
        srcY =  trackRight * height;
    }
    
    
}

function drawImage(){
    updateFrame();
    ctx.drawImage(img, srcX, srcY, width, height, x, y, width, height);
    
    
}
setInterval(function(){
    drawImage();
}, 100);
