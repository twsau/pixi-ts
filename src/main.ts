import { Game } from "./Game";
import { IScene } from "./scenes";
import { ExampleScene } from "./scenes/Example";

const scenes: Record<string, IScene> = {
  example: new ExampleScene(),
};

const main = async () => {
  Game.initialize();
  Game.loadScene(scenes.example);
};

main();
