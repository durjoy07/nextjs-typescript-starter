import { IHero } from './interface';

export const heroProps: IHero = {
  title: 'Lemon Hive, We Build Lightning Fast Websites',
  description:
    'We make secure, flexible and fast headless (Jamstack) websites and apps that improve Technical SEO, increase visitor numbers & conversion rates. We build with Sanity, BigCommerce, Prismic, Strapi, Contentful, WordPress, and other headless content management systems. We create front-ends with Vue, Svelte, Remix and React utilising Next.js, Gatsby, Nuxt, React Native, and others.',
  buttons: {
    buttonLeft: {
      label: 'Server Side Example',
      href: '/',
    },
    buttonRight: {
      label: 'Client Side Example',
      href: 'client-side',
    },
  },
};
