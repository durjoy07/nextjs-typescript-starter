import { ISanityCustomPortableText } from '@root/src/backend/types/portable-text';
import { ISanityBlog } from 'src/backend/queries/pages/blog/interface';

export interface ISanityBlogsGrid {
  _type: 'blogsGrid';
  title: string;
  subtitle: string;
  description?: ISanityCustomPortableText;
  blogs: Omit<ISanityBlog, 'blogContent'>[];
}
