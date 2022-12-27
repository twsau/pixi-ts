import { Application } from 'pixi.js';
import { SceneConstructor } from './scenes';
import type { AssetManifest } from './assets';

export class App extends Application {
  constructor() {
    super();
  }

  handleResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', (e) => {
      this.renderer.resize(window.innerWidth, window.innerHeight);
    });
  }

  initRender() {
    document.body.style.margin = '0';
    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.display = 'block';
  }

  async loadAssets(assets: AssetManifest) {
    return new Promise<void>((resolve) => {
      this.loader.add(assets).load(() => {
        resolve();
      });
    });
  }

  loadScene(sceneConstructor: SceneConstructor) {
    const scene = sceneConstructor(this);
    this.stage.addChild(scene);
  }
}
