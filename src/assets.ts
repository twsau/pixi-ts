import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "exampleBundle",
      assets: {
        logo: "./assets/images/logo.png",
      },
    },
  ],
};
