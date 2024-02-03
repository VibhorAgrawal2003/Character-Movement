// Canvas Properties
let canvas;
let ctx;
let canvasWidth = document.getElementById("container").clientWidth;
let canvasHeight = document.getElementById("container").clientHeight;

// Dynamic Variables
let keys = [];
let timer = 0;

// Game Objects
let player;


document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas(){

    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    player = new Player();
    
    // enable key presses
    document.body.addEventListener("keydown", function(event){
        const key = event.key;

        if(!keys.includes(key)){
            keys.push(key);
        }

    });

    document.body.addEventListener("keyup", function(event){
        const key = event.key;
        const index = keys.indexOf(key);
        if(index !== -1){
            keys.splice(index, 1);
        }

    });

    RenderCanvas();
}

function RenderCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#96ff96";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if(player.visible){
        CheckPlayerInputs();
        player.UpdateObject();
    }

    UpdateTimer();
    requestAnimationFrame(RenderCanvas);  
}


function UpdateTimer(){
    console.log(timer, keys);
    timer = (timer + 1) % 120;
}

function CheckPlayerInputs(){

    if(keys.length == 0) player.moving = false; else player.moving = true;

    let right_pressed = keys.includes('ArrowRight') || keys.includes('d');
    let left_pressed = keys.includes('ArrowLeft') || keys.includes('a');
    let up_pressed = keys.includes('ArrowUp') || keys.includes('w');
    let down_pressed = keys.includes('ArrowDown') || keys.includes('s');

    if(up_pressed && right_pressed) player.direction = "ur";
    else if(up_pressed && left_pressed) player.direction = "ul";
    else if(down_pressed && right_pressed) player.direction = "dr";
    else if(down_pressed && left_pressed) player.direction = "dl";

    else if(right_pressed) player.direction = "right";
    else if(left_pressed) player.direction = "left";
    else if(up_pressed) player.direction = "up";
    else if(down_pressed)player.direction = "down";
}