import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game");
  }
  preload() {
    //this.add.image(30, 30, "vite");
    this.add.image(90, 30, "js");

    this.add.text(120, 90, "Game Scene");
  }
}
