import { IBlogGrid } from './interface';
import { blogCardProps } from '@components/cards/blog/mock-data';
import { sectionDescriptionProps } from '@components/section-heading/mock-data';

export const blogGridProps: IBlogGrid = {
  sectionHeading: {
    title: 'Our Blog',
    description: sectionDescriptionProps,
  },
  blogs: [
    { ...blogCardProps, tags: ['Nextjs', 'Reactjs'] },
    { ...blogCardProps, tags: ['Nextjs', 'Reactjs'] },
    { ...blogCardProps, tags: ['Nextjs'] },
    { ...blogCardProps },
    { ...blogCardProps },
    { ...blogCardProps },
    { ...blogCardProps },
    { ...blogCardProps },
  ],
};
