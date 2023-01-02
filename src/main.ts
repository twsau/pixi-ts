import { Game } from "./Game";
import { LoadingScene } from "./scenes/Loading";

const main = async () => {
  Game.initialize();
  Game.loadScene(new LoadingScene());
};

main();
