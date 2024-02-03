const follower_width = 16;
const follower_height = 24;
const blue_character_start_y = 120;

const follower_sprites = {

    path: "./assets/character_sheet.png",
    width: follower_width,
    height: follower_height,

    down_idle : {
        start_x : 4 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    down_walk1 : {
        start_x : 4 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    down_walk2 : {
        start_x : 4 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    down_walk3 : {
        start_x : 4 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    down_walk4 : {
        start_x : 4 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    up_idle : {
        start_x : 0,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    up_walk1 : {
        start_x : 0,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    up_walk2 : {
        start_x : 0,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    up_walk3 : {
        start_x : 0,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    up_walk4 : {
        start_x : 0,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    right_idle : {
        start_x : 2 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    right_walk1 : {
        start_x : 2 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    right_walk2 : {
        start_x : 2 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    right_walk3 : {
        start_x : 2 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    right_walk4 : {
        start_x : 2 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    left_idle : {
        start_x : 6 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    left_walk1 : {
        start_x : 6 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    left_walk2 : {
        start_x : 6 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    left_walk3 : {
        start_x : 6 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    left_walk4 : {
        start_x : 6 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dr_idle : {
        start_x : 3 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    dr_walk1 : {
        start_x : 3 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dr_walk2 : {
        start_x : 3 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    dr_walk3 : {
        start_x : 3 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dr_walk4 : {
        start_x : 3 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dl_idle : {
        start_x : 5 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    dl_walk1 : {
        start_x : 5 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dl_walk2 : {
        start_x : 5 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    dl_walk3 : {
        start_x : 5 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    dl_walk4 : {
        start_x : 5 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },


    ur_idle : {
        start_x : follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    ur_walk1 : {
        start_x : follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    ur_walk2 : {
        start_x : follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    ur_walk3 : {
        start_x : follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    ur_walk4 : {
        start_x : follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    ul_idle : {
        start_x : 7 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    ul_walk1 : {
        start_x : 7 * follower_width,
        start_y : blue_character_start_y,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    ul_walk2 : {
        start_x : 7 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,
    },

    ul_walk3 : {
        start_x : 7 * follower_width,
        start_y : blue_character_start_y + 2 * follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

    ul_walk4 : {
        start_x : 7 * follower_width,
        start_y : blue_character_start_y + follower_height,
        cover_x : follower_width,
        cover_y : follower_height,
        scale_x : 2 * follower_width,
        scale_y : 2 * follower_height,        
    },

}