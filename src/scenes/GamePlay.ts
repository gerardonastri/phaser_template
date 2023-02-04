import Enemy from "../components/enemy/Enemy";
import Player from "../components/player/Player";

export default class GamePlay extends Phaser.Scene {

  private _enemy: Enemy;
  private _player: Player;
  private _enemyGroup: Phaser.GameObjects.Group;
  private _tween: Phaser.Tweens.Tween;
  private _timer: Phaser.Time.TimerEvent;

  constructor() {
    super({ key: "GamePlay" });
  }

  create() {
    
   this._enemyGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
   this._enemy =  new Enemy({scene: this, x: 450, y: 250, key: "bomb"}).setAlpha(0).setInteractive().on("pointerdown", () => {

    //se l'animazione è in corso la stoppiamo
    if(this._tween.paused){
      this._timer.paused = false;
      this._tween.resume(); //la fa ripartire
    } else {
      this._timer.paused = true;
      this._tween.pause(); //la stoppa
    }

   });
   this._enemyGroup.add(this._enemy);

   //ANIMAZIONE (con dentro innestata un'altra)
   this.tweens.add({
    targets: this._enemy, // si può passare un elemento o un array di elementi
    alpha: 1,
    duration: 1000,
    onUpdate: (tween: Phaser.Tweens.Tween) => { //viene eseguita 60 volte al secondo
      console.log(tween.progress); //stampa il progresso dell'animazione
    },
    onComplete: () => { //quando sarà completata l'animazione farà partire l'altra animazione
      //ANIMAZIONE (innestata)
      this._tween = this.tweens.add({
        targets: this._enemy,
        x: 200, //cordinata  x
        duration: 2000,
        delay: 0, //dopo quanto parte l'animazione
        repeat: 10, //quante volte viene ripetto
        ease: "Quad.easeInOut",
        yoyo: true //setta se va avanti e dietro

      })
    }
   })

   //far fare qualcosa dopo un certo tempo
   this._timer = this.time.addEvent({
    delay: 1000,
    callback: (quantity: number, energy: number, damage: number) => {
      this.enemySpawn(quantity, energy, damage);
    },
    callbackScope: this,
    args: [3, 20, 10], //passare argomenti alla funzione di callback
    loop: true //la fa ripetere all'infinito
   })

  }

  enemySpawn(quantity: number, energy: number, damage: number){
    console.log(damage);
    
  }

  update(time: number, delta: number): void {
    
  }
}
