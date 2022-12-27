import { Container } from 'pixi.js';

export class Scene extends Container {
  state: Record<string, any>;

  constructor() {
    super();
    this.state = {};
    this.update = this.update.bind(this);
  }

  update(_: any, delta: number) {}
}

export type SceneConstructor = (app: PIXI.Application) => Scene;
