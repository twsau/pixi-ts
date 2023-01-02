import { Application, IRendererOptions } from "pixi.js";
import type { IScene } from "./scenes";

export class Game {
  private constructor() {}
  private static app: Application;
  private static currentScene: IScene;
  private static _width: number;
  private static _height: number;

  public static get width(): number {
    return Game._width;
  }
  public static get height(): number {
    return Game._height;
  }

  private static handleResize(): void {
    Game.resize();
    window.addEventListener("resize", () => Game.resize());
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

  private static resize(): void {
    Game.app.renderer.resize(window.innerWidth, window.innerHeight);
    Game._width = Game.app.renderer.width;
    Game._height = Game.app.renderer.height;
  }

  public static update(delta: number): void {
    if (Game.currentScene) Game.currentScene.update(delta);
  }
}
