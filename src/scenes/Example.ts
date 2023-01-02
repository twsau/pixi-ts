import { Container, Sprite } from "pixi.js";
import { IScene } from ".";

export class ExampleScene extends Container implements IScene {
  private logo: Sprite;
  private state: { velocity: { x: number; y: number } };

  constructor() {
    super();
    this.state = { velocity: { x: 1, y: 1 } };
    this.logo = Sprite.from("logo");
    this.logo.width = 100;
    this.logo.height = 100;
    this.addChild(this.logo);
  }

  update(delta: number) {
    if (
      this.logo.transform.position.x < 0 ||
      this.logo.transform.position.x >= window.innerWidth - this.logo.width
    ) {
      this.state.velocity.x = -this.state.velocity.x;
    }

    if (
      this.logo.transform.position.y < 0 ||
      this.logo.transform.position.y >= window.innerHeight - this.logo.height
    ) {
      this.state.velocity.y = -this.state.velocity.y;
    }

    this.logo.position.x += this.state.velocity.x;
    this.logo.position.y += this.state.velocity.y;
  }
}
