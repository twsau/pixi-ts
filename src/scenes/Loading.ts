import { Assets, Container, Graphics } from "pixi.js";
import { IScene } from ".";
import { Game } from "../Game";
import { manifest } from "../assets";
import { ExampleScene } from "./Example";

export class LoadingScene extends Container implements IScene {
  private loaderBar: Container;
  private loaderBarBorder: Graphics;
  private loaderBarFill: Graphics;

  constructor() {
    super();

    const loaderBarWidth = Game.width * 0.8;

    this.loaderBarFill = new Graphics();
    this.loaderBarFill.beginFill(0x008800, 1);
    this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
    this.loaderBarFill.endFill();
    this.loaderBarFill.scale.x = 0;

    this.loaderBarBorder = new Graphics();
    this.loaderBarBorder.lineStyle(10, 0x0, 1);
    this.loaderBarBorder.drawRect(0, 0, loaderBarWidth, 50);

    this.loaderBar = new Container();
    this.loaderBar.addChild(this.loaderBarFill);
    this.loaderBar.addChild(this.loaderBarBorder);
    this.loaderBar.position.x = (Game.width - this.loaderBar.width) / 2;
    this.loaderBar.position.y = (Game.height - this.loaderBar.height) / 2;
    this.addChild(this.loaderBar);

    this.initializeLoader().then(() => {
      this.gameLoaded();
    });
  }

  private downloadProgress(progressRatio: number): void {
    this.loaderBarFill.scale.x = progressRatio;
  }

  private gameLoaded(): void {
    Game.loadScene(new ExampleScene());
  }

  private async initializeLoader(): Promise<void> {
    await Assets.init({ manifest: manifest });
    const bundleIds = manifest.bundles.map((bundle) => bundle.name);
    await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
  }

  update(_delta: number): void {}
}
