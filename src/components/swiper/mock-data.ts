import { ISwiperProps } from './interface';
export const swiperPreviewimages: string[] = [
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267968/BrightonSEO/Carousel/image-1_n2g4dh.jpg',
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267967/BrightonSEO/Carousel/image-2_yph8q6.jpg',
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267968/BrightonSEO/Carousel/image-3_zj0pxz.jpg',
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267968/BrightonSEO/Carousel/image-4_pwi0a2.jpg',
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267968/BrightonSEO/Carousel/image-5_ptsm14.jpg',
  'https://res.cloudinary.com/dktw59lc2/image/upload/v1669267968/BrightonSEO/Carousel/image-6_pbvbnf.jpg',
];

export const swiperCommonOptions: Omit<ISwiperProps, 'children'> = {
  isCenter: false,
  isLoop: true,
  autoPlay: true,
  speed: 800,
  pauseOnHover: false,
  haveOffset: true,
  spaceBetween: { sm: 12, md: 16, lg: 20, xl: 24, '2xl': 24 },
  showItems: { sm: 1.2, md: 2, lg: 3, xl: 4, '2xl': 4 },
};
