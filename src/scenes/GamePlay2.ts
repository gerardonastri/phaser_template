export default class GamePlay2 extends Phaser.Scene {

  private _text: Phaser.GameObjects.Text;
  private _bomb: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private _ground: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  private _groupBomb: Phaser.GameObjects.Group;

  constructor() {
    super({ key: "GamePlay2" });
  }

  create() {
    this._text = this.add.text(512,50, "y:0").setTint(0x000000);
    this._bomb = this.physics.add.image(200,100,"bomb").setScale(3);
    this._ground = this.physics.add.image(100,500,"galaxian").setImmovable(true);
    this._ground.body.allowGravity = false; //ground non subirà la gravità
    this._groupBomb = this.add.group();


    this.input.on("pointerdown", () => {
      if(this._bomb.body.touching.down){
        this._bomb.body.setVelocity(0, -400);
      }
    })

    //collider
    this.physics.add.collider(this._bomb, this._ground);

    //collider tra la bomba e il gruppo(l'ostacolo)
    this.physics.add.collider(this._bomb, this._groupBomb, (obj1: any, obj2: any) => {
      this.scene.restart();
    }, undefined, this);

    this.time.addEvent({
      delay: 3000,
      loop: true,
      callback: () => {
        this.createBomb();
      },
      callbackScope: this
    })

  }


  createBomb(){
    let _bomb = this.physics.add.image(1024, 335, "bomb").setScale(2);
    _bomb.body.allowGravity = false;
    _bomb.body.setVelocityX(-200);
    this._groupBomb.add(_bomb);
  }

  update(time: number, delta: number): void {
    this._text.setText(this._bomb.y.toFixed(2) + "");
  }
}