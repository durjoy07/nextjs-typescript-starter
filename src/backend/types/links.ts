import { ISanitySlug } from './slug';

export enum SanityLinkTypeEnum {
  Internal = 'internalLink',
  External = 'externalLink',
}

interface ISanityCommonLinkFields {
  label: string;
}

interface ISanityInternalLink extends ISanityCommonLinkFields {
  linkType: SanityLinkTypeEnum.Internal;
  internalLink: { slug: ISanitySlug };
}

interface ISanityExternalLink extends ISanityCommonLinkFields {
  linkType: SanityLinkTypeEnum.External;
  href: string;
}

export type ISanityOptionalLink = (
  | ISanityExternalLink
  | ISanityInternalLink
) & {
  hasLink: boolean;
  isDisabled: boolean;
};

export type ISanityRequiredLink = ISanityExternalLink | ISanityInternalLink;
