import { ISanityCustomImage } from './image';

export interface ISanityCustomVideo extends Omit<ISanityCustomImage, '_type'> {
  _type: 'customVideoSchema';
  videoUrl: string;
}
