const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const enemiesAmount = document.getElementById('enemiesAmount');
const showEnemiesCount = document.getElementById('enemiesCount');
let numberOfEnemies = 0;
const enemiesArray = [];

let gameFrame = 0;
class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = 'images/enemies/enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth= 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height =   this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
    }
    update(){
        this.x -= this.speed;
        this.y += 3 * Math.sin(this.angle);
        this.angle += this.angleSpeed; 
        //this.y+=  Math.random() * 5 - 2.5;
        if(this.x + this.width < 0 ) this.x = canvas.width;
        //animate sprites
        gameFrame % this.flapSpeed === 0 ? this.frame > 4 ? this.frame = 0 : this.frame++ : 0;
    }
    draw(){
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage( this.image, this.frame * this.spriteWidth ,0,this.spriteWidth, this.spriteHeight,this.x, this.y, this.width, this.height);
    }
};

enemiesAmount.value = numberOfEnemies;
showEnemiesCount.innerHTML = numberOfEnemies;
enemiesAmount.addEventListener('change', function(){
    enemiesArray.length = 0;
    numberOfEnemies = this.value;
    showEnemiesCount.innerHTML = numberOfEnemies;
    for (let i = 0; i < numberOfEnemies; i++){
        enemiesArray.push(new Enemy());
    }
});




window.addEventListener('load', function(){
    
   
    function animate(){
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
       /*  enemy1.update();
        enemy1.draw(); */
        enemiesArray.forEach(enemy =>{
            enemy.update();
            enemy.draw();
        });
        
        gameFrame++;
        requestAnimationFrame(animate);
    }
    
    animate(); 
});
