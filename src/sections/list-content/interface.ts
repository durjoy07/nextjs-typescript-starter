import { ISectionHeading } from '@components/section-heading/interface';
import { ISanityCustomPortableText } from '@root/src/backend/types/portable-text';

export interface IListItem {
  title: string;
  description: ISanityCustomPortableText;
}

export interface IListContentSection {
  sectionTheme: 'primary' | 'secondary';
  sectionHeading: Pick<ISectionHeading, 'title' | 'description' | 'subtitle'>;
  lists: IListItem[];
}
