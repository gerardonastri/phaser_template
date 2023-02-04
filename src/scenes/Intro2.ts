export default class Intro2 extends Phaser.Scene{

    private _logo: Phaser.GameObjects.Image;
    private _text: Phaser.GameObjects.Text;
    private _credits: Phaser.GameObjects.Text;
    private _music: Phaser.Sound.BaseSound;

    private _creditsContainer: Phaser.GameObjects.Container;
    private _creditsContainerText: Phaser.GameObjects.Text;
    private _creditsContainerBg: Phaser.GameObjects.Image;

    constructor(){
        super({key: "Intro2"})
    }

    create(){

        //credits container
        this._creditsContainer = this.add.container().setAlpha(0).setDepth(10);
        this._creditsContainerBg = this.add.image(0,0,"bg1").setOrigin(0).setInteractive().on("pointerdown", this.closeCredits, this);
        this._creditsContainerText = this.add.text(this.game.canvas.width / 2 ,100,"Il test dei miei crediti").setTint(0xff0000).setOrigin(.5);
        this._creditsContainer.add([this._creditsContainerBg, this._creditsContainerText]);


        this.cameras.main.setBackgroundColor("000000");

        this._logo = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "galaxian" ).setOrigin(.5).setAlpha(0);
        
        this.displayItem(this.game.canvas.width / 2, 120, this._logo, 2000);

        this._text = this.add.text(this.game.canvas.width / 2, 600, "PLAY").setFontSize(60).setOrigin(0.5).setAlpha(0).setTint(0xff0000, 0x00ff00, 0xffffff, 0x0000ff);
        this.displayItem(this.game.canvas.width / 2, 400, this._text, 2000);

        //musica
        this._music = this.sound.add("music0", {loop: true, volume: 0.5});
        this._music.play();


        //credits
        this._credits = this.add.text(this.game.canvas.width / 2, 600, "CREDITS").setFontSize(60).setOrigin(0.5).setAlpha(0).setTint(0xff0000, 0x00ff00, 0xffffff, 0x0000ff);
        this.displayItem(this.game.canvas.width / 2, 500, this._credits, 2000);

        //play events
        this._text.setInteractive().on("pointerover", () => {
            this._text.setTint(0x0000ff, 0xffffff, 0x00ff00, 0xff0000); //cambia colore alla scritta
            // this.sound.playAudioSprite("sfx", "nodamage", {loop: false, volume: .5})
        }).on("pointerout", () => {
            this._text.setTint(0xff0000, 0x00ff00, 0xffffff, 0x0000ff); //ritorna come prima
        }).on("pointerdown", this.startGame, this); //chiama la funzione 'startGame'

        //credits events
        this._credits.setInteractive().on("pointerover", () => {
            // this.sound.playAudioSprite("sfx", "splash", {loop: false, volume: .5});

        }).on("pointerdown", this.openCredits, this); //chiama la funzione 'startGame'


    }

    //animazione
    displayItem(x: number, y: number, item: any, duration: number){
        this.tweens.add({
            targets: item,
            x, 
            y,
            duration,
            repeat: 0,
            alpha: 1,
            yoyo: false,
            ease: "Quad.easeInOut"
        })
    }

    startGame(){
        this.scene.start("GamePlay");
    }

    openCredits(){
        this.tweens.add({
            targets: this._creditsContainer,
            duration: 1500,
            repeat: 0,
            alpha: 1,
            yoyo: false,
            ease: "Quad.easeInOut"
        })
        
    }
    closeCredits(){
        this.tweens.add({
            targets: this._creditsContainer,
            duration: 1500,
            repeat: 0,
            alpha: 0,
            yoyo: false,
            ease: "Quad.easeInOut"
        })
    }


    update(time: number, delta: number): void {
        
    }
}