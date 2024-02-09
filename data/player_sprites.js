const player_width = 16;
const player_height = 24;
const red_character_start_y = 216;

const player_sprites = {
  path: "./assets/character_sheet.png",
  width: player_width,
  height: player_height,

  down_idle: {
    start_x: 4 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  down_walk1: {
    start_x: 4 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  down_walk2: {
    start_x: 4 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  down_walk3: {
    start_x: 4 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  down_walk4: {
    start_x: 4 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  up_idle: {
    start_x: 0,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  up_walk1: {
    start_x: 0,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  up_walk2: {
    start_x: 0,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  up_walk3: {
    start_x: 0,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  up_walk4: {
    start_x: 0,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  right_idle: {
    start_x: 2 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  right_walk1: {
    start_x: 2 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  right_walk2: {
    start_x: 2 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  right_walk3: {
    start_x: 2 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  right_walk4: {
    start_x: 2 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  left_idle: {
    start_x: 6 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  left_walk1: {
    start_x: 6 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  left_walk2: {
    start_x: 6 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  left_walk3: {
    start_x: 6 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  left_walk4: {
    start_x: 6 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dr_idle: {
    start_x: 3 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dr_walk1: {
    start_x: 3 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dr_walk2: {
    start_x: 3 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dr_walk3: {
    start_x: 3 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dr_walk4: {
    start_x: 3 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  dl_idle: {
    start_x: 5 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width - 2,
    cover_y: player_height,
    scale_x: 2 * (player_width - 2),
    scale_y: 2 * player_height,
  },

  dl_walk1: {
    start_x: 5 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width - 2,
    cover_y: player_height,
    scale_x: 2 * (player_width - 2),
    scale_y: 2 * player_height,
  },

  dl_walk2: {
    start_x: 5 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width - 2,
    cover_y: player_height,
    scale_x: 2 * (player_width - 2),
    scale_y: 2 * player_height,
  },

  dl_walk3: {
    start_x: 5 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width - 2,
    cover_y: player_height,
    scale_x: 2 * (player_width - 2),
    scale_y: 2 * player_height,
  },

  dl_walk4: {
    start_x: 5 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width - 2,
    cover_y: player_height,
    scale_x: 2 * (player_width - 2),
    scale_y: 2 * player_height,
  },

  ur_idle: {
    start_x: player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ur_walk1: {
    start_x: player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ur_walk2: {
    start_x: player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ur_walk3: {
    start_x: player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ur_walk4: {
    start_x: player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ul_idle: {
    start_x: 7 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ul_walk1: {
    start_x: 7 * player_width,
    start_y: red_character_start_y,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ul_walk2: {
    start_x: 7 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ul_walk3: {
    start_x: 7 * player_width,
    start_y: red_character_start_y + 2 * player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },

  ul_walk4: {
    start_x: 7 * player_width,
    start_y: red_character_start_y + player_height,
    cover_x: player_width,
    cover_y: player_height,
    scale_x: 2 * player_width,
    scale_y: 2 * player_height,
  },
};
