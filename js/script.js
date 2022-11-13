const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575;
const spritHeight = 523;

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(image, sx, st, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spritHeight, 0, 0, spriteWidth, spritHeight);
    requestAnimationFrame(animate);
}

animate(); 