import Mobile from "./Mobile";
import tirImage from "./assets/images/tir.png";

const SHOOT_STEP = 8;
const SHOOT_WIDTH = 8;
const SHOOT_HEIGHT = 1;

export default class Shoot extends Mobile {
  constructor(x, y, game) {
    super(x, y, tirImage, SHOOT_WIDTH, SHOOT_HEIGHT);
    this.game = game;
    this.deltaX = SHOOT_STEP;
  }

  checkCollisionWithSaucer(saucers) {
    for (let saucer of saucers) {
      if (this.checkCollisionWith(saucer) && !saucer.isFalling) {
        return saucer;
      }
    }
    return null;
  }

  move() {
    this.x += this.deltaX;
    if (this.x > this.game.canvas.width) {
      this.game.removeShoot(this);
    }
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}
