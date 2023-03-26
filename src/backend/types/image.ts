export interface ISanityCustomImageWithAsset {
  asset: {
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
        aspectRatio: number;
      };
      lqip: string;
    };
  };
}

export interface ISanityCustomImage {
  _type: 'customImageSchema';
  imageFile: ISanityCustomImageWithAsset;
  altDescription: string;
  figcaption?: string;
}
