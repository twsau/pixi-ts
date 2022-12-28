import { Application } from "pixi.js";
import { SceneConstructor } from "./scene";

export class App extends Application {
  constructor() {
    document.body.style.margin = "0";
    const view = document.createElement("canvas");
    view.style.position = "absolute";
    document.body.appendChild(view);
    super({ view });
  }

  handleResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () =>
      this.renderer.resize(window.innerWidth, window.innerHeight)
    );
  }

  loadScene(sceneConstructor: SceneConstructor) {
    this.stage.removeChildren();
    const scene = sceneConstructor(this);
    this.stage.addChild(scene);
  }
}
