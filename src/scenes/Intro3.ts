export default class Intro3 extends Phaser.Scene {

   private _mainCamera: Phaser.Cameras.Scene2D.Camera;
   private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
   private _player: Phaser.GameObjects.Image;
  
    
  
    constructor() {
      super({
        key: "Intro3",
      });
  
  
    }
  
    
    create() {
        
        this._cursors = this.input.keyboard.createCursorKeys();
        this._mainCamera = this.cameras.main;
        this._mainCamera.setBackgroundColor(0x000000);

        this.add.image(0,0,"grid").setOrigin(0);
        this.add.image(1024,0,"grid").setOrigin(0);

        //setScrollFactor evita che l'oggetto si muova con il movimento della camera
        this.add.image(100,100,"bomb").setDepth(3).setScrollFactor(0).setInteractive().on("pointerdown", () => {
            //interrompe il movimento della camera
            this._mainCamera.stopFollow();
            this.panTo();
            this.zoomTo();
            this.flash();
        });

        this._player = this.add.image(512,300, "bomb").setScale(4);

        //imposta la larghezza della camera (due volte del canvas che è definito nel file css)
        this._mainCamera.setBounds(0,0, this.game.canvas.width * 2,  this.game.canvas.height * 2);

        //fa si che il personaggio sia al centro spostando la camera
        this._mainCamera.startFollow(this._player, true, 0.05, 0.05);

       // WORLD VIEW:
        //ti da il centro della camera (nel punto in cui si trova, quindi anche se spostata)
        let centerX = this.cameras.main.worldView.centerX;
        //ti da il bordo di sopra della camera (nel punto in cui si trova, quindi anche se spostata)
        let top = this.cameras.main.worldView.top;
        // ti dice se quel punto è contenuto nella camera visualizzata (per esempio quando esce un proiettole lo distruggiamo con destroy())
        let containsX = this.cameras.main.worldView.contains(1024, 400);


        
        
    }

    //la camera si muove al punto che abbiamo descritto
    panTo(){
        this.cameras.main.pan(
            1000, //x
            1000, //y
            1000, //duration
            "Sine.easeInOut", //ease function
            true, // force
            (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
              if (progress === 1) { console.log("pan completed"); }
            }, //callback
            this //callback context
          );      
    }

    //zooma la camera
    zoomTo(){
        this.cameras.main.zoomTo(
            2, //valore dello zoom
            1000, //duration
            "Sine.easeInOut", //ease function
            true, // force
            (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
                if (progress === 1) { console.log("zoom completed"); }
            }, //callback
            this //callback context
        );
      
    }

    //flash della camera
    flash(){
        this._mainCamera.flash(
            1000, //durata del flash
            255,0,0, //rgb del colore del flash
            true, //force to start
        )
    }
  
    
    update(time: number, delta: number): void {
        //se il tasto cursore left è premuto
	    if (this._cursors.left.isDown) {
            //sottraiamo 10px alla x del player
            this._player.x -= 10;
        }
        //se il tasto cursore right è premuto
        else if (this._cursors.right.isDown) {
            //aggiungiamo 10px alla x del player
            this._player.x += 10;
        }
        //se il tasto cursore up è premuto
        if (this._cursors.up.isDown) {
            //sottraiamo 10px alla y del player
            this._player.y -= 10;
        }
        //se il tasto cursore down è premuto
        else if (this._cursors.down.isDown) {
            //aggiungiamo 10px alla y del player
            this._player.y += 10;
        }
    }
  
  }
  