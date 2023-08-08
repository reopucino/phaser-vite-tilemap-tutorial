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
    //create player objects
    this.players = otherlevel.createFromObjects("player", { key: "player" }, false);

    this.players.forEach(obj=>{
      //console.log(obj);
      //console.log(this);
      this.physics.add.existing(obj);
    })
    //this.physics.add.existing(this.players[0]);
    //this.physics.add.
    

    this.input.keyboard.on("keydown-RIGHT", () => {
      console.log("move right");
      this.movePlayers(1, 0);
    })
    this.input.keyboard.on("keydown-LEFT", () => {
      console.log("move left");
      this.movePlayers(-1, 0);
    })
    this.input.keyboard.on("keydown-UP", () => {
      console.log("move up");
      this.movePlayers(0, -1);
    })
    this.input.keyboard.on("keydown-DOWN", () => {
      console.log("move down");
      this.movePlayers(0, 1);
    })


    let obj = this.physics.add.image(64*8, 64*4, 'vite');//.setOrigin(0);
    this.physics.add.overlap(obj, this.players, ()=>{
      console.log("WIN");
      obj.body.enable=false;
      this.gameComplete()
    })
  }

  movePlayers(x, y) {
    if(this.state == "wingame")return;
    this.players.forEach(obj => {
      obj.x += x * 64;
      obj.y += y * 64;
    })
  }

  gameComplete(){
    this.add.image(this.game.config.width*.5, this.game.config.height*.5, 'popup').setScale(5);
    this.state = "wingame";
    //this.input.
  }
}
