export default class ScenaProva extends Phaser.Scene {

  private _spriteBomb: Phaser.GameObjects.Sprite;
  private _frame: number = 0;
  private _tile1: Phaser.GameObjects.TileSprite;
  private _tile2: Phaser.GameObjects.TileSprite;
  private _tile3: Phaser.GameObjects.TileSprite;

  private _animations: Array<{key: string, frames: Array<number>, frameRate: number, yoyo: boolean, repeat: number}> = [
    {key: "rotation", frames: [0,1,2,3,4,5], frameRate: 10, yoyo: false, repeat: -1},
    {key: "blinking", frames: [6,7,8,9,10,11], frameRate: 15, yoyo: false, repeat: -1}
  ];

    constructor() {
      super({
        key: "ScenaProva",
      });
    }
  
    create() {
  
      
      //creiamo lo sprite
      this._spriteBomb = this.add.sprite(500, 250, "bomb").setScale(2.5).setFrame(this._frame).setDepth(100);

      //creiamo le animazioni
      this._animations.forEach(animation => {
        
        //singola animazione
        let _animation: Phaser.Types.Animations.Animation = {
          key: animation.key,
          frames: this.anims.generateFrameNumbers("bomb", {frames: animation.frames}),
          frameRate: animation.frameRate,
          yoyo: animation.yoyo,
          repeat: animation.repeat
        };

        //instanziamo le animazioni e sono pronte per essere usate
        this.anims.create(_animation);

      })

      
      this._spriteBomb.play("rotation"); //facciamo partire l'animazione
      
      //cambiamo animazione col click
      this._spriteBomb.setInteractive().on("pointerdown", () => {
        this._spriteBomb.play("blinking");
      });

      // TILE SPRITE  
      this._tile1 = this.add.tileSprite(0, 0, 1024, 300, "bg2").setOrigin(0);
      this._tile2 = this.add.tileSprite(0, 0, 1024, 300, "bg3").setOrigin(0);
      this._tile3 = this.add.tileSprite(0, 0, 1024, 300, "bg4").setOrigin(0).setInteractive().on("pointerdown", () => {
        this.scene.start("GamePlay");
      });


    }
    

  update(time: number, delta: number): void {
    this._tile1.tilePositionX += 0.2;
    this._tile2.tilePositionX += 0.4;
    this._tile3.tilePositionX += 0.6;
  }
  
  }