import { Application, Container, Text } from 'pixi.js';
import { Scene } from '.';
import type { SceneConstructor } from '.';

class Example extends Scene {
  app: Application;
  state: { velocity: { x: number; y: number } };
  text: Text;

  constructor(app: Application) {
    super();
    this.app = app;
    this.state = { velocity: { x: 1, y: 1 } };
    this.update = this.update.bind(this);

    this.text = new Text('PixiJS / TypeScript');
    this.text.x = window.innerWidth / 2 - this.text.width / 2;
    this.text.y = window.innerHeight / 2 - this.text.height / 2;
    this.addChild(this.text);

    window.addEventListener('resize', (e) => {
      this.text.x = window.innerWidth / 2 - this.text.width / 2;
      this.text.y = window.innerHeight / 2 - this.text.height / 2;
    });

    app.ticker.add(this.update);
  }

  update(_: any, delta: number) {
    if (
      this.text.x <= 0 ||
      this.text.x >= window.innerWidth - this.text.width
    ) {
      this.state.velocity.x = -this.state.velocity.x;
    }
    if (
      this.text.y <= 0 ||
      this.text.y >= window.innerHeight - this.text.height
    ) {
      this.state.velocity.y = -this.state.velocity.y;
    }
    this.text.x += this.state.velocity.x;
    this.text.y += this.state.velocity.y;
  }
}

export const ExampleScene: SceneConstructor = (app) => new Example(app);
