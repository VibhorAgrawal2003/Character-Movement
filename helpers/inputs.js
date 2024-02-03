function CheckPlayerInputs(){

    player.moving = true;

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


function CheckFollowerInputs(follower, leader){
    let copy;
    follower.knowledge.push([leader.x, leader.y, leader.moving, leader.direction]);

    if(follower.delay != 0){
        follower.delay -= 1;
    }
    else{
        copy = follower.knowledge.shift();
        follower.x = copy[0];
        follower.y = copy[1];
        follower.moving = copy[2];
        follower.direction = copy[3];
    }
}
