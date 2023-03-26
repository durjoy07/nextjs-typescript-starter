import { sectionDescriptionProps } from '@components/section-heading/mock-data';
import { ISanityCustomPortableText } from '@root/src/backend/types/portable-text';
import { IListContentSection } from './interface';

export const descriptionPortableData: ISanityCustomPortableText = [
  {
    _key: 'd956675f69e0',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'For design, branding, web development, marketing, consulting & other agencies.',
        _key: '612b8d7ad65a0',
      },
    ],
    markDefs: [],
    _type: 'customBlock',
    style: 'normal',
  },
  {
    _key: 'f9a72086f01c',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'We work with agencies in a number of different ways, but predominantly as an extension of your team to add headless development expertise.',
        _key: '3ec390abb3560',
      },
    ],
    markDefs: [],
    _type: 'customBlock',
    style: 'normal',
  },
  {
    _key: 'af14faef2a19',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'With the move towards headless website development, it can be difficult to find the right people, with the right expertise, to produce websites to your standards. By outsourcing the development and/or design to us, we can ensure you build exceptional headless websites that exceed what is possible with monolithic platforms such as WordPress.',
        _key: '57de12dc89fc0',
      },
    ],
    markDefs: [],
    _type: 'customBlock',
    style: 'normal',
  },
];

export const listContentSectionProps: IListContentSection = {
  sectionTheme: 'secondary',
  sectionHeading: {
    title: 'Who We Work With',
    description: sectionDescriptionProps,
  },
  lists: [
    {
      title: 'Services for Agencies',
      description: descriptionPortableData,
    },
    {
      title: 'Services for Agencies',
      description: descriptionPortableData,
    },
  ],
};
