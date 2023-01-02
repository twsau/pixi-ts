import { Container, Graphics } from "pixi.js";
import { IScene } from ".";

export class PatternScene extends Container implements IScene {
  private points: Graphics[];
  private state: { count: number };

  constructor() {
    super();
    this.state = { count: 10000 };
    this.position.set(window.innerWidth / 2, window.innerHeight / 2);
    this.points = Array.from(Array(100)).map(() => {
      const graphic = new Graphics();
      this.addChild(graphic);
      return graphic;
    });
  }

  update(_delta: number) {
    this.state.count += _delta;
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      point.clear();
      point
        .beginFill(
          0x00ffff,
          0.5 + Math.abs(Math.cos((i * this.state.count) / 5000)) * 0.5
        )
        .drawCircle(
          i * Math.cos((i * this.state.count) / 10000) * 5,
          i * Math.sin((i * this.state.count) / 10000) * 5,
          3 * Math.abs(Math.cos((i * this.state.count) / 500))
        )
        .endFill();
    }
    // console.log(this.state);
  }
}
