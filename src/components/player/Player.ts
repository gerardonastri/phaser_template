import GamePlay from "../../scenes/GamePlay";
import IPlayer from "./IPlayer";

export default class Player extends Phaser.GameObjects.Sprite implements IPlayer{

    protected _config: genericConfig;
    protected _scene: GamePlay;
    protected _body: Phaser.Physics.Arcade.Body;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this._config = params;
        this._scene = <GamePlay>params.scene;
        this._config.scene.physics.world.enable(this);
        this._scene.add.existing(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        

        
        this.width = 81;
        this.height = 200;
        this.setScale(10);

        // settiamo i tasti cursore
        this._cursors = this._scene.input.keyboard.createCursorKeys();
    }
    
    
    create(){}
    update(time: number, delta: number){

        //se il tasto cursore left è premuto
        if (this._cursors.left.isDown) {
            //sottraiamo 10px alla x della bomba
            // this.x -= 10;
            this.x -= 10
        }
        //se il tasto cursore right è premuto
        else if (this._cursors.right.isDown) {
            //aggiungiamo 10px alla x della bomba
            this.x += 10;
        }
        //se il tasto cursore up è premuto
        if (this._cursors.up.isDown) {
            //sottraiamo 10px alla y della bomba
            this.y -= 10;
        }
        //se il tasto cursore down è premuto
        else if (this._cursors.down.isDown) {
            //aggiungiamo 10px alla y della bomba
            this.y += 10;
        }
    }


}