import { Application, Container } from "pixi.js";
import { Scene } from "..";
import { Box } from "../../object/Box";

class Example extends Scene {
  box: Container;
  state: { velocity: { x: number; y: number } };

  constructor(app: Application) {
    super(app);
    this.state = { velocity: { x: 1, y: 1 } };

    this.box = new Box(100, 100);
    this.addChild(this.box);
  }

  update(delta: number) {
    if (
      this.box.transform.position.x < 0 ||
      this.box.transform.position.x >= window.innerWidth - this.box.width
    ) {
      this.state.velocity.x = -this.state.velocity.x;
    }

    if (
      this.box.transform.position.y < 0 ||
      this.box.transform.position.y >= window.innerHeight - this.box.height
    ) {
      this.state.velocity.y = -this.state.velocity.y;
    }

    this.box.position.x += this.state.velocity.x;
    this.box.position.y += this.state.velocity.y;
  }
}

export const ExampleScene = (app: Application) => new Example(app);
