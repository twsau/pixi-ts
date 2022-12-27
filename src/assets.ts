type Asset = { name: string; url: string };
export type AssetManifest = Asset[];

export const assetManifest: AssetManifest = [
  { name: 'exampleAsset', url: '../assets/logo.jpg' },
];
