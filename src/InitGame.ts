import "phaser";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import Intro from "./scenes/Intro";
import Hud from "./scenes/Hud";
import GameOver from "./scenes/GameOver";
import GamePlay from "./scenes/GamePlay";
import ScenaProva from "./scenes/ScenaProva";
import { GameData } from "./GameData";
import Intro2 from "./scenes/Intro2";
import Intro3 from "./scenes/Intro3";
import GamePlay2 from "./scenes/GamePlay2";

window.addEventListener("load", () => {

  const config: any = {
    type: Phaser.WEBGL,
    backgroundColor: GameData.globals.bgColor,
    parent: "my-game",
    scale: {
      mode: Phaser.Scale.FIT,
      width: GameData.globals.gameWidth,
      height: GameData.globals.gameHeight,
    },

    scene: [
      Boot,
      Preloader,
      Intro,
      Hud,
      GamePlay,
      GamePlay2,
      GameOver,
      ScenaProva,
      Intro2,
      Intro3
    ],

    physics: {
      default: "arcade",
      arcade: {
        debug: GameData.globals.debug,
        gravity: {y: 300}
      }
    },
    input: {
      activePointers: 2,
      keyboard: true,
    },
    render: {
      pixelArt: true,
      antialias: false,
    },
  };

  const game = new Phaser.Game(config);


});
