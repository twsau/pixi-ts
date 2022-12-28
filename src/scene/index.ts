import { Application, Container } from "pixi.js";

export class Scene extends Container {
  app: Application;
  state: Record<string, any>;

  constructor(app: Application) {
    super();
    this.state = {};
    this.app = app;
    this.update = this.update.bind(this);
    app.ticker.add(this.update);
  }

  update(delta: number) {
    console.log("initial update method");
  }
}

export type SceneConstructor = (app: Application) => Scene;
