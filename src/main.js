import Phaser from "phaser";
import GameScene from "./Scenes/GameScene";
import MenuScene from "./Scenes/MenuScene";
import PreloadScene from "./Scenes/PreloadScene";

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scene: [PreloadScene, MenuScene, GameScene],
  physics:{
    default:'arcade',
    arcade:{debug:true}
  }
};

const game = new Phaser.Game(config);
