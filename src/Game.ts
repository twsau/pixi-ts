import { Application, IRendererOptions } from "pixi.js";
import type { IScene } from "./scenes";

export class Game {
  private constructor() {}
  private static app: Application;
  private static currentScene: IScene;

  private static handleResize(): void {
    Game.app.renderer.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () =>
      Game.app.renderer.resize(window.innerWidth, window.innerHeight)
    );
  }

  public static initialize(config?: IRendererOptions): void {
    // set view
    document.body.style.margin = "0";
    const view = document.createElement("canvas");
    view.style.position = "absolute";
    document.body.appendChild(view);

    Game.app = new Application({ ...config, view });
    Game.handleResize();
    Game.app.ticker.add(Game.update);
  }

  public static loadScene(newScene: IScene): void {
    if (Game.currentScene) Game.removeScene();
    Game.currentScene = newScene;
    Game.app.stage.addChild(Game.currentScene);
  }

  private static removeScene(): void {
    Game.app.stage.removeChild(Game.currentScene);
    Game.currentScene.destroy();
  }

  public static update(framesPassed: number): void {
    if (Game.currentScene) Game.currentScene.update(framesPassed);
  }
}
