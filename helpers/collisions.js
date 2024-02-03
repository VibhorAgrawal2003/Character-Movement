function CenterPointCollision(body1, body2, bar = 16){

    let center1_x = body1.x + body1.width / 2;
    let center1_y = body1.y + body1.height / 2;
    let center2_x = body2.x + body2.width / 2;
    let center2_y = body2.y + body2.height / 2;

    let along_x = (Math.abs(center1_x - center2_x) < bar);
    let along_y = (Math.abs(center1_y - center2_y) < bar);

    if(along_x && along_y){
        return true;
    }
    else{
        return false;
    }

}