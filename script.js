// Canvas Properties
let canvas;
let ctx;
let canvasWidth = document.getElementById("container").clientWidth;
let canvasHeight = document.getElementById("container").clientHeight;

// Dynamic Variables
let timer = 0;
let keys = [];
let conga = [];

// Game Objects
let player;
let friend;

document.addEventListener('DOMContentLoaded', SetupCanvas);

function UpdateTimer(){
    timer = (timer + 1) % 120;
}

function SetupCanvas(){

    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    player = new Player();
    friend = new Friend();

    conga.push(player);
    
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
    // Backgrounds
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#96ff96";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Objects
    if(player.visible){
        CheckPlayerInputs();
        player.UpdateObject();
    }

    if(friend.visible){
        friend.DrawObject();
    }

    for (let i = 0; i < conga.length - 1; i++){
        let leader = conga[i]
        let follower = conga[i+1];
        if(follower.visible){
            CheckFollowerInputs(follower, leader);
            follower.UpdateObject();
        }        
    }

    // Collisions

    if(CenterPointCollision(player, friend)){
        conga.push(new Follower());
        friend = new Friend();
    }

    // console.log(CenterPointCollision(player, friend));

    UpdateTimer();
    requestAnimationFrame(RenderCanvas);  
}
