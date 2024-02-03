class Player{

    constructor(){
        this.visible;
        this.sheet;
        this.sprite;
        this.x;
        this.y;
        this.width;
        this.height;
        this.LoadObject();
        this.DebugValues();
    }

    DebugValues(){
        console.log("visible: ", this.visible);
        console.log("sheet: ", this.sheet);
        console.log("sprite: ", this.sprite);
        console.log("x: ", this.x);
        console.log("y: ", this.y);
        console.log("width: ", this.width);
        console.log("height: ", this.height);
    }

    LoadObject(){
        // Logic
        this.visible = true;

        // Position
        this.x = canvas.width / 2 - player_sprites.width / 2;
        this.y = canvas.height / 2 - player_sprites.height / 2;

        // Visuals
        this.sheet = new Image();
        this.sheet.src = player_sprites.path;
        this.width = player_sprites.width;
        this.height = player_sprites.height;
        this.sprite = player_sprites.down_idle;
        this.DrawObject();
    }

    UpdateObject(){

    }

    DrawObject(){
        ctx.save();

        ctx.drawImage(
            this.sheet,
            this.sprite.start_x, this.sprite.start_y, // Top Left Corner
            this.sprite.cover_x, this.sprite.cover_y, // Bottom Right Corner
            this.x, this.y, // Position
            this.sprite.scale_x, this.sprite.scale_y, // Scaling factors
        )

        ctx.restore();
    }
}