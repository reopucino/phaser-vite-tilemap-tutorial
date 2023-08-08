import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("preload");
  }
  preload() {
    this.load.svg("vite", "vite.svg");
    this.load.svg("js", "javascript.svg");

    this.load.image("tilesheet", "img/platformpack_tilesheet.png");

    this.load.tilemapTiledJSON("tilemap", "level1.json");

    this.load.image("player", "img/soldier1_stand.png");
    //this.load.setBaseURL("https://labs.phaser.io");
    this.load.image(
      "logo",
      "https://labs.phaser.io/assets/sprites/phaser3-logo.png"
    );
    this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
    console.log("preload scene first");

    //add 
    this.load.image("star", "img/star.png");
    this.load.image("back", "img/back.png");
    this.load.image("popup", "img/grey_panel.png");
  }
  create() {
    this.scene.start("game");
  }
}
