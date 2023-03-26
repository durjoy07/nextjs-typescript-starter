import { ISanityCustomPortableText } from '@root/src/backend/types/portable-text';

export const sectionHeadingColorschemes = [
  'primary',
  'secondary',
  'warning',
  'danger',
  'white',
  'black',
] as const;
type IColorscheme = (typeof sectionHeadingColorschemes)[number];
export interface ISectionHeading {
  title: string;
  isCenter: boolean;
  colorScheme: IColorscheme;
  hasBottomSpacing: boolean;
  subtitle?: string;
  description?: ISanityCustomPortableText;
}
