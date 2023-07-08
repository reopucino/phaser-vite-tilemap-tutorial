import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game");
  }
  preload() {
    //this.add.image(30, 30, "vite");
    this.add.image(90, 30, "js").setInteractive().on("pointerdown", () => {
      this.scene.start("menu")
    });

    this.add.text(120, 90, "Game Scene");

    const level = [
      [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7],
      [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    ];

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    // const map = this.make.tilemap({ data: level, tileWidth: 64, tileHeight: 64 });
    // const tiles = map.addTilesetImage('tilesheet');
    // const layer = map.createLayer(0, tiles, 0, 0);

    const otherlevel = this.make.tilemap({ key: "tilemap" });
    const tilesSheet = otherlevel.addTilesetImage('tilesheet');
    otherlevel.createLayer(0, tilesSheet, 0, 0);

    this.add.image(0, 0, "player");

    this.input.keyboard.on("keydown-RIGHT", () => {
      console.log("move right");
    })
    this.input.keyboard.on("keydown-LEFT", () => {
      console.log("move left");
    })
    this.input.keyboard.on("keydown-UP", () => {
      console.log("move up");
    })
    this.input.keyboard.on("keydown-DOWN", () => {
      console.log("move down");
    })
  }
}
