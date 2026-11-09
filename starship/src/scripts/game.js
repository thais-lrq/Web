import Starship from "./Starship";
import KeyManager from "./KeyManager";
import Saucer from "./Saucer";
import Shoot from "./Shoot.js";

export default class Game {
  #canvas;
  // à compléter
  #context;
  #starship;
  #saucers;
  #keyManager;
  #score;
  #shoots;
  shootActive;

  constructor(canvas) {
    this.#canvas = canvas;
    // à compléter
    this.#context = canvas.getContext("2d");
    this.#starship = new Starship(40, canvas.height / 2, this);
    this.#keyManager = new KeyManager();
    this.#saucers = [];
    this.#score = 0;
    this.#shoots = [];
    this.shootActive = true;
    this.saucerInterval = null;
    this.explosions = [];

    window.addEventListener("keydown", (event) => this.keyDownHandler(event));
    window.addEventListener("keyup", (event) => this.keyUpHandler(event));
  }

  /** donne accès au canvas correspondant à la zone de jeu */
  get canvas() {
    return this.#canvas;
  }

  get context() {
    return this.#context;
  }

  get score() {
    return this.#score;
  }

  get starship() {
    return this.#starship;
  }

  get saucer() {
    return this.#saucers;
  }

  addExplosion(x, y) {
    this.explosions.push({ x, y, radius: 10, opacity: 1 });
  }

  createShoot() {
    const shoot = new Shoot(
      this.#starship.x + this.#starship.width,
      this.#starship.y + this.#starship.height / 2,
      this
    );
    this.#shoots.push(shoot);
  }

  removeShoot(shoot) {
    this.#shoots = this.#shoots.filter((s) => s !== shoot);
  }

  handleSpaceKey(event) {
    if (event.key === " " && this.shootActive) {
      const shoot = new Shoot(
        this.#starship.x + this.#starship.width,
        this.#starship.y + this.#starship.height / 2 + 10,
        this
      );
      this.#shoots.push(shoot);
      this.shootActive = false;
    }
  }

  checkCollisions() {
    this.#shoots.forEach((shoot) => {
      const hitSaucer = shoot.checkCollisionWithSaucer(this.#saucers);
      if (hitSaucer) {
        this.removeShoot(shoot);
        this.updateScore(200);
        this.addExplosion(
          hitSaucer.x + hitSaucer.width / 2,
          hitSaucer.y + hitSaucer.height / 2
        );
        hitSaucer.fall();
        if (hitSaucer.y + hitSaucer.height >= this.#canvas.height) {
          this.removeSaucer(hitSaucer);
        }
      }
    });
  }

  addSaucer() {
    const yPosition = Math.floor(Math.random() * (this.#canvas.height - 30));
    const saucer = new Saucer(yPosition, this);
    this.#saucers.push(saucer);
  }

  removeSaucer(saucer) {
    const index = this.#saucers.indexOf(saucer);
    if (index !== -1) {
      this.#saucers.splice(index, 1);
    }
  }

  updateScore(points) {
    this.#score += points;
    document.getElementById("score").textContent = this.#score;
    if (this.#score <= -5000) {
      console.log("⚠️ REPRENDS-TOI CAPITAINE !⚠️");
    } else if (this.#score <= -1000) {
      console.log("🔴 Ça commence à mal tourner...🔴");
    } else if (this.#score >= 3000) {
      console.log("🔥 Bien joué, continue comme ça !🔥");
    } else if (this.#score >= 10000) {
      console.log("🔥🔥🔥Le capitaine est en forme aujourd'hu!🔥🔥🔥");
    }
  }

  updateShoots() {
    this.#shoots.forEach((shoot) => {
      shoot.move();
      shoot.draw(this.#context);
      if (shoot.x > this.#canvas.width) {
        this.removeShoot(shoot);
      }
    });
  }

  updateSaucers() {
    this.#saucers.forEach((saucer) => {
      saucer.move();
      saucer.draw(this.#context);
    });
  }

  updateExplosions() {
    this.explosions.forEach((explosion, index) => {
      const { x, y, radius, opacity } = explosion;
      this.#context.beginPath();
      this.#context.arc(x, y, radius, 0, Math.PI * 2);
      this.#context.fillStyle = `rgba(255, 100, 0, ${opacity})`;
      this.#context.fill();
      explosion.radius += 2;
      explosion.opacity -= 0.05;
      if (explosion.opacity <= 0) {
        this.explosions.splice(index, 1);
      }
    });
  }

  keyDownHandler(event) {
    if (event.key === "ArrowUp") {
      this.#keyManager.upPressed();
      this.#starship.moveUp();
    }
    if (event.key === "ArrowDown") {
      this.#keyManager.downPressed();
      this.#starship.moveDown();
    }
    this.handleSpaceKey(event);
  }

  keyUpHandler(event) {
    if (event.key === " ") {
      this.shootActive = true;
    }
    if (event.key === "ArrowUp") {
      this.#keyManager.upReleased();
      this.#starship.stopMoving();
    }
    if (event.key === "ArrowDown") {
      this.#keyManager.downReleased();
      this.#starship.stopMoving();
    }
  }

  startSaucerSpawn() {
    if (this.saucerInterval) {
      clearInterval(this.saucerInterval);
      this.saucerInterval = null;
      console.log("Danger écarté! BRAVO!");
    } else {
      this.saucerInterval = setInterval(() => {
        if (Math.random() < 0.5) {
          this.addSaucer();
        }
      }, 750);
      console.log("⚠️ALERTE! ⚠️ALERTE! DES SOUCOUPES EN APPROCHE !");
    }
  }

  animate() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

    this.updateShoots();
    this.updateSaucers();
    this.updateExplosions();
    this.#starship.move();
    this.#starship.draw(this.#context);
    this.checkCollisions();

    requestAnimationFrame(() => this.animate());
  }

  start() {
    this.animate();
  }
}
