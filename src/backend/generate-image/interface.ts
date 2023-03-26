export interface IGeneratedImage {
  src: string;
  lqip: string;
}

export interface IGeneratedImageFitHeight extends IGeneratedImage {
  width: number;
}

export interface IGeneratedImageFitWidth extends IGeneratedImage {
  height: number;
}
