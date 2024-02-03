const player_width = 16;
const player_height = 24;
const red_character_start_y = 216;

const player_sprites = {

    path: "./assets/character_sheet.png",
    width: player_width,
    height: player_height,

    down_idle : {
        start_x : 4 * player_width,
        start_y : red_character_start_y + player_height,
        cover_x : player_width,
        cover_y : player_height,
        scale_x : 2 * player_width,
        scale_y : 2 * player_height,
    },

    down_walk1 : {
        start_x : 4 * player_width,
        start_y : red_character_start_y,
        cover_x : player_width,
        cover_y : player_height,
        scale_x : 2 * player_width,
        scale_y : 2 * player_height,        
    },

    down_walk2 : {
        start_x : 4 * player_width,
        start_y : red_character_start_y + 2 * player_height,
        cover_x : player_width,
        cover_y : player_height,
        scale_x : 2 * player_width,
        scale_y : 2 * player_height,        
    },

}