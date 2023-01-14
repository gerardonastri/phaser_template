import Enemy from "../components/enemy/Enemy";

export default class GamePlay extends Phaser.Scene {

  private _enemy: Enemy;
  private _enemyGroup: Phaser.GameObjects.Group;

  constructor() {
    super({ key: "GamePlay" });
  }

  create() {
    
   this._enemyGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
   this._enemy =  new Enemy({scene: this, x: 450, y: 250, key: "bomb"});

   this._enemyGroup.add(this._enemy);

  }

  update(time: number, delta: number): void {
    
  }
}
