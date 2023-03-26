import { ISanityCustomVideo } from '../video';
import { ISanityCustomImage } from 'src/backend/types/image';
import { PortableTextBlock } from '@portabletext/types';

export interface ISanityBlockquote {
  _type: 'blockquote';
  content: [PortableTextBlock | ISanityCustomImage | ISanityCustomVideo];
}
