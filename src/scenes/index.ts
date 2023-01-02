import { DisplayObject } from "pixi.js";

export interface IScene extends DisplayObject {
  update(_delta: number): void;
}
