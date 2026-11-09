export default class Mobile {
  constructor(x, y, imageSource, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.deltaX = 0;
    this.deltaY = 0;
    this.image = this.createImage(imageSource);
  }

  createImage(imageSource) {
    const newImg = new Image();
    newImg.onload = () => {};
    newImg.src = imageSource;
    return newImg;
  }
  moveLeft() {
    this.deltaX = -10;
  }
  moveRight() {
    this.deltaX = +10;
  }
  moveUp() {
    this.deltaY = -10;
  }
  moveDown() {
    this.deltaY = 10;
  }

  stopMoving() {
    this.deltaX = 0;
    this.deltaY = 0;
  }
  move(box) {
    this.x = Math.max(
      0,
      Math.min(box.width - this.width, this.x + this.deltaX)
    );
    this.y = Math.max(
      0,
      Math.min(box.height - this.height, this.y + this.deltaY)
    );
  }

  checkCollisionWith(other) {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }

  handleMoveKeys(keyManager) {
    this.stopMoving();
    if (keyManager.left) this.moveLeft();
    if (keyManager.right) this.moveRight();
    if (keyManager.up) this.moveUp();
    if (keyManager.down) this.moveDown();
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}
