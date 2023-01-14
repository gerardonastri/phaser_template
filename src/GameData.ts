export let GameData: any = {
  globals: {
    leaderboard: false,
    gameWidth: 1024,
    gameHeight: 600,
    bgColor: "#ffffff",
    debug: false,
  },

  preloader: {
    bgColor: "",
    image: "phaser",
    imageX: 512,
    imageY: 300,
    loadingText: "",
  },

  spritesheets: [
    {
      name: "bomb",
      path: "assets/images/bomb.png",
      width: 33,
      height: 31,
      frames: 12
    }
  ],
  images: [{
    name: "logo-phaser",
    path: "assets/images/logo-phaser.png",
  }, {
    name: "galaxian",
    path: "assets/images/galaxian.png",
  }, {
    name: "tyler-durden",
    path: "assets/images/tyler-durden.png",
  }, 
  {
    name: "edward-norton",
    path: "assets/images/edward-norton.webp",
  },
  { name: "bg1", path: "assets/images/bg/1.png" },
  { name: "bg2", path: "assets/images/bg/2.png" },
  { name: "bg3", path: "assets/images/bg/3.png" },
  { name: "bg4", path: "assets/images/bg/4.png" },
  { name: "bg5", path: "assets/images/bg/5.png" },
  { name: "bg6", path: "assets/images/bg/6.png" },
  { name: "bg7", path: "assets/images/bg/7.png" },
],
  atlas: [],
  sounds: [],
  audio: [],
  bitmapfont: [],
};
