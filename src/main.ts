import { Game } from "./Game";
import { LoadingScene } from "./scenes/Loading";

const main = async () => {
  Game.initialize({ antialias: true });
  Game.loadScene(new LoadingScene());
};

main();
