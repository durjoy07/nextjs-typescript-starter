import { ISanitySections } from './../../fragments/sections/interface';
import { ISanityOptionalLink } from 'src/backend/types/links';
import { ISanitySlug } from 'src/backend/types/slug';

export interface ISanityHomePage {
  title: string;
  description: string;
  slug: ISanitySlug;
  optionalLink: ISanityOptionalLink;
  // Note: If an optional array is not initialized the field is set to null
  sections: ISanitySections | null;
}
