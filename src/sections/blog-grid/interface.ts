import { IBlogCard } from '@components/cards/blog/interface';
import { ISectionHeading } from '@components/section-heading/interface';

type IHeading = Pick<ISectionHeading, 'title' | 'description' | 'subtitle'>;

export interface IBlogGrid {
  sectionHeading: IHeading;
  blogs: IBlogCard[];
}
