// Canvas Properties
let canvas;
let ctx;
let canvasWidth = document.getElementById("container").clientWidth;
let canvasHeight = document.getElementById("container").clientHeight;

// Dynamic Variables
let keys = [];

// Game Objects
let player;


document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas(){

    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    player = new Player();
    
    RenderCanvas();
}

function RenderCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(player.visible){
        player.DrawObject();
    }

    requestAnimationFrame(RenderCanvas);  
}
