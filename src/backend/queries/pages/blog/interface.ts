import { ISanitySlug } from 'src/backend/types/slug';
import { ISanityCustomPortableText } from 'src/backend/types/portable-text';
import { ISanityCustomImage } from 'src/backend/types/image';

export interface ISanityBlog {
  title: string;
  description: string;
  blogContent: ISanityCustomPortableText;
  image: ISanityCustomImage;
  tags: string[];
  isFeaturedBlog: boolean;
  slug: ISanitySlug;
}
