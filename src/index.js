import Phaser from "../phaser.js";

import { preloadScene } from "./scenes/preload.js";
import { startMenuScene } from "./scenes/startmenu.js";
import { getReadyScene } from "./scenes/getready.js";
import { gameScene } from "./scenes/game.js";
import { pausedScene } from "./scenes/paused.js";
import { gameOverScene } from "./scenes/gameover.js";

let game = new Phaser.Game({
  type: Phaser.AUTO,
  //the game should always be vertical or square
  width: returnLowest(
    returnLowest(screenBuffer(window.innerWidth), screenBuffer(window.innerHeight)),
    //max width is 1080
    1080
  ),
  //max height is 1920
  height: returnLowest(screenBuffer(window.innerHeight), 1920),
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: (window.innerHeight * 2) },
          debug: false
      }
  },
  scene: [
    preloadScene,
    startMenuScene,
    getReadyScene,
    gameScene,
    pausedScene,
    gameOverScene
  ],
  pixelArt: true
});

function returnLowest(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function screenBuffer(windowSize) {
  return (windowSize * 0.95)
}
