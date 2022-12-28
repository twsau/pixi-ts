import { Graphics } from "pixi.js";

export class Box extends Graphics {
  constructor(width: number, height: number) {
    super();
    this.beginFill(0xff0000).drawRect(0, 0, width, height).endFill();
  }
}
