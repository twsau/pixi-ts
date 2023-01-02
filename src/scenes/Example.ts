import { Container } from "pixi.js";
import { IScene } from ".";
import { Box } from "../object/Box";

export class ExampleScene extends Container implements IScene {
  private box: Container;
  private state: { velocity: { x: number; y: number } };

  constructor() {
    super();
    this.state = { velocity: { x: 1, y: 1 } };
    this.box = new Box(100, 100);
    this.addChild(this.box);
  }

  update(framesPassed: number) {
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
