var playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/layers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer1.src = 'images/layers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer1.src = 'images/layers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer1.src = 'images/layers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer1.src = 'images/layers/layer-5.png';

const playerImage = new Image();
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575;
const spritHeight = 523;



let gameFrame = 0;
const staggerFrames = 6;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },{
        name: 'jump',
        frames: 7,
    },{
        name: 'fall',
        frames: 7,
    },{
        name: 'run',
        frames: 9,
    },{
        name: 'dizzy',
        frames: 11,
    },{
        name: 'sit',
        frames: 5,
    },{
        name: 'roll',
        frames: 7,
    },{
        name: 'bite',
        frames: 7,
    },{
        name: 'ko',
        frames: 12,
    },{
        name: 'getHit',
        frames: 4,
    }
];

animationStates.forEach( (state, index) => {
    let frames = {
        loc: [],
    }
    for(j = 0;  j< state.frames; j++){
        let positionX =  j * spriteWidth;
        let positionY = index * spritHeight;
        frames.loc.push({x: positionX, y: positionY});

    }
    spriteAnimations[state.name] = frames;
});

let x = 0;

function animate(){

    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer3, x,0);
    if(x < -24) x = 0;
    else x -= gameSpeed;

  /*   
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spritHeight, 0, 0, spriteWidth, spritHeight); */
  

   /*  gameFrame++; */
    requestAnimationFrame(animate);
}

animate(); 