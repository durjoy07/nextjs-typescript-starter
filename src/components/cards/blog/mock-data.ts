import { IBlogCard } from './interface';

export const blogCardProps: IBlogCard = {
  href: 'https://www.lemonhive.com/',
  image: {
    src: 'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267967/BrightonSEO/Carousel/image-2_yph8q6.jpg',
    alt: 'dummy image 2',
    lqip: 'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267967/BrightonSEO/Carousel/image-2_yph8q6.jpg',
  },
  title: 'Headless Website Development',
  description:
    'Headless solutions built with Sanity.io, Strapi, Prismic, Contentful and others with front-end frameworks such as Next.js, Gatsby, & Nuxt.',
  tags: ['Reactjs', 'Nextjs'],
  isFeatured: false,
};
