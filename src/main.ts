import { Game } from "./Game";
import { LoadingScene } from "./scenes/Loading";

Game.initialize({ antialias: true });
Game.loadScene(new LoadingScene());
