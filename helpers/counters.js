function UpdateTimer(){
    timer = (timer + 1) % 120;
}

function UpdateInvinsibility(){
    invinsibility += 1;
    if(invinsibility == 12){
        invinsibility = 0;
    }
}

function UpdateScore(){
    score = document.getElementById("score");
    score.textContent = parseInt(score.textContent) + 1;
}