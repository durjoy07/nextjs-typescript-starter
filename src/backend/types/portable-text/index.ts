import { ISanityBlockquote } from './blockquote';
import { ISanityCustomVideo } from '../video';
import { ISanityCustomImage } from '../image';
import { PortableTextBlock } from '@portabletext/types';
import { ISanityCode } from './code';

export type ISanityCustomPortableText = (
  | PortableTextBlock
  | ISanityCustomImage
  | ISanityCustomVideo
  | ISanityBlockquote
  | ISanityCode
)[];
