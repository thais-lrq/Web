// importation de la classe Game.js
import Game from "./game.js";

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
  const canvas = document.getElementById("stars");
  const game = new Game(canvas);
  const nouvelleSoucoupeButton = document.getElementById("nouvelleSoucoupe");
  const flotteSoucoupesButton = document.getElementById("flotteSoucoupes");

  nouvelleSoucoupeButton.addEventListener("click", () => {
    game.addSaucer();
    document.activeElement.blur();
  });

  flotteSoucoupesButton.addEventListener("click", () => {
    game.startSaucerSpawn();
    document.activeElement.blur();
  });

  game.start();

  window.addEventListener("keydown", (event) => {
    game.keyDownHandler(event);

    if (event.key === " ") {
      game.handleSpaceKey(event);
    }
  });

  window.addEventListener("keyup", (event) => game.keyUpHandler(event));
};

window.addEventListener("load", init);
console.log("le bundle a été généré");
