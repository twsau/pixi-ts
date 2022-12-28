import { App } from "./App";
import { ExampleScene } from "./scene/Example";

const main = async () => {
  let app = new App();
  app.handleResize();
  // TODO: load assets
  app.loadScene(ExampleScene);
};

main();
