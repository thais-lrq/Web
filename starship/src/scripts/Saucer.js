import Mobile from "./Mobile.js";
import flyingSaucerImg from "./assets/images/flyingSaucer-petit.png";

const SAUCER_STEP = -3;

export default class Saucer extends Mobile {
  constructor(y, game) {
    super(game.canvas.width, y, flyingSaucerImg, 40, 30);
    this.game = game;
    this.image = this.#createImage(flyingSaucerImg);
    this.deltaX = SAUCER_STEP;
    this.deltaY = 0;
    this.isFalling = false;
  }

  #createImage(imageSource) {
    const img = new Image();
    img.src = imageSource;
    return img;
  }

  move() {
    if (!this.isFalling) {
      this.x += this.deltaX;
    } else {
      this.y += -SAUCER_STEP;
    }
    if (this.x + this.width < 0) {
      this.game.updateScore(-1000);
      this.game.removeSaucer(this);
    } else if (this.y > this.game.canvas.height) {
      this.game.removeSaucer(this);
    }
  }

  fall() {
    this.isFalling = true;
    this.deltaX = 0;

    let intensity = 5; // Intensité du tremblement
    let count = 0;
    const shakeInterval = setInterval(() => {
      if (count > 10) {
        clearInterval(shakeInterval);
        document.body.style.transform = ""; // Remet à l'état normal
        return;
      }
      const xOffset = (Math.random() - 0.5) * intensity;
      const yOffset = (Math.random() - 0.5) * intensity;
      document.body.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      count++;
    }, 50);
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}
