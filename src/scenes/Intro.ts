export default class Intro extends Phaser.Scene {

  private _logo: Phaser.GameObjects.Image;
  private _string: Phaser.GameObjects.Text; //crea una variabile di tipo Text dei Game Objects di Phaser
  private _clicks: number = 0;
  private _text: Phaser.GameObjects.Text;

  

  constructor() {
    super({
      key: "Intro",
    });


  }

  preload() {


  }
  create() {

    this._string = this.add.text(200, 200, "Things you own end up owning you").setTint(0xff0000); //setTint modifica il colore
    this._string.setPosition(500, 50).setOrigin(.5,.5); //SetOrigin imposta l'asse di rotazione (in questo caso al centro) 

    this.cameras.main.setBackgroundColor("#ffffff");
    console.log("create:intro");

    this._logo = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "tyler-durden");
    this._logo.setScale(0.9); //cambia la scala dell'immagine
    this._logo.setDepth(1); //corrispondente allo z-index del css

    //rendiamo l'elemento interattivo
    this._text = this.add.text(300, 100, "").setTint(0xff0000); // nuovo testo
    this._logo.setInteractive().on("pointerdown", () => { //quando clicchiamo sull'immagine facciamo questa funzione
      this._clicks++;
      if(this._clicks < 5){
        this._text.setText("Clicchi: " + this._clicks);
      } else {
        this._logo.setAlpha(0.4); //opacità
        this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "edward-norton").setDepth(2).setScale(0.8).setInteractive().on("pointerdown", () => {
          this.scene.start("ScenaProva");
        });
        this._text.setAlpha(0)
      }
      
    })

  }

  //L'update viene eseguita 60 volte al secondo
  update(time: number, delta: number): void {


    
    //this._string.rotation += .01; // aggiunge rotazione al oggetto

  }

}

