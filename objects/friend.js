class Friend{

    constructor(){
        // Position
        this.x;
        this.y;
        this.off;
        this.min_x;
        this.min_y;
        this.max_x;
        this.max_y;

        // Visuals
        this.visible;
        this.sheet;
        this.sprite;
        this.width;
        this.height;

        this.LoadObject();
    }

    LoadObject(){
        this.off = 32;
        this.min_x = this.off;
        this.min_y = this.off;
        this.max_x = canvas.width - this.off;
        this.max_y = canvas.height - this.off;

        this.x = Math.round(Math.random() * (this.max_x - this.min_x)) + this.min_x;
        this.y = Math.round(Math.random() * (this.max_y - this.min_y)) + this.min_y;

        this.visible = true;
        this.sheet = new Image();
        this.sheet.src = follower_sprites.path;
        this.width = follower_sprites.width;
        this.height = follower_sprites.height;
        this.sprite = follower_sprites.down_idle;
        this.DrawObject();
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