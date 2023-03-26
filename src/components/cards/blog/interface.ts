import { IDimension } from '@root/src/types';

export interface IBlogCard {
  href: string;
  image: {
    src: string;
    alt: string;
    lqip: string;
  };
  title: string;
  description: string;
  tags: string[];
  isFeatured: boolean;
}

export const BLOG_IMAGE_DIMENSION: IDimension = {
  width: 960,
  height: 720,
};
