import * as PIXI from 'pixi.js';
import { ExampleScene } from './scenes/Example';
import { App } from './App';
import { assetManifest } from './assets';

const main = async () => {
  PIXI.utils.skipHello();
  let app = new App();
  app.initRender();
  app.handleResize();
  await app.loadAssets(assetManifest);
  document.body.appendChild(app.view);
  app.loadScene(ExampleScene);
};

main();
