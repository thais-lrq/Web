import Mobile from "./Mobile.js";

import vaisseauImg from "./assets/images/vaisseau-ballon-petit.png";
const STARSHIP_STEP = 8;

export default class StarShip extends Mobile {
  constructor(x, y, game) {
    super(x, y, vaisseauImg, 0, 0);
    this.game = game;
    this.moving = null;
  }

  get up() {
    return this.moving === "up";
  }

  get down() {
    return this.moving === "down";
  }

  moveUp() {
    this.moving = "up";
  }

  moveDown() {
    this.moving = "down";
  }

  stopMoving() {
    this.moving = null;
  }

  move() {
    if (this.up) {
      this.y = Math.max(0, this.y - STARSHIP_STEP);
    }

    if (this.down)
      this.y = Math.min(
        this.game.canvas.height - this.image.height,
        this.y + STARSHIP_STEP
      );
  }
}
