import { ISectionHeading } from './interface';

export const sectionDescriptionProps = [
  {
    _key: '0ffdc2e0f0b8',
    _type: 'block',
    children: [
      {
        _key: '9ba941b1390f',
        _type: 'span',
        marks: ['805b62da0516'],
        text: 'Headless website',
      },
      {
        _key: '9a6ae5c5c320',
        _type: 'span',
        marks: [],
        text: ' for an award winning digital marketing agency.',
      },
    ],
    markDefs: [
      {
        _key: '805b62da0516',
        _type: 'link',
        href: 'https://www.google.com',
        linkType: 'externalLink',
      },
    ],
    style: 'normal',
  },
  {
    _key: '4ed7297d9dcc',
    _type: 'block',
    children: [
      {
        _key: 'da46c7671dee',
        _type: 'span',
        marks: [],
        text: '',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'c0b3d76ed804',
    _type: 'block',
    children: [
      {
        _key: '1d4ab47cbb880',
        _type: 'span',
        marks: ['strong'],
        text: 'Lorem ipsum',
      },
      {
        _key: '1b8f25fb6ad2',
        _type: 'span',
        marks: [],
        text: ' dolor ',
      },
      {
        _key: '69ae9b1fb5c7',
        _type: 'span',
        marks: ['em'],
        text: 'sit amet consectetur',
      },
      {
        _key: '2e48bd8c68e6',
        _type: 'span',
        marks: [],
        text: '. Vitae cursus ultricies interdu ridiculus. Nullam nuwel craegestas risus ',
      },
      {
        _key: 'c0b66fa9a5e6',
        _type: 'span',
        marks: ['underline'],
        text: 'diam lorem nascetur',
      },
      {
        _key: 'c751dbb05102',
        _type: 'span',
        marks: [],
        text: '. Lorem ipsum dolor sit amet consectetur. Vitae cursus ultricies interdu ridiculus. Nullam nuwel craegestas risus ',
      },
      {
        _key: '95e7c8d27766',
        _type: 'span',
        marks: ['strong'],
        text: 'diam lorem nascetu ullam nuwel',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
];

export const sectionHeadingProps: ISectionHeading = {
  subtitle: 'Lemon Hive',
  title: 'What Makes Us Different?',
  description: sectionDescriptionProps,
  colorScheme: 'primary',
  hasBottomSpacing: true,
  isCenter: false,
};
