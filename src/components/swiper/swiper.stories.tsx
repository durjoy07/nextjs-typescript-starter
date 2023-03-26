import Component, { CarouselItem } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { swiperPreviewimages, swiperCommonOptions } from './mock-data';
import Image from 'next/image';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...swiperCommonOptions },
  render: (args) => (
    <Component {...args}>
      {swiperPreviewimages.map((swiperPreviewimage, index) => (
        <CarouselItem key={index}>
          <Image
            src={`${swiperPreviewimage}`}
            alt={`image-${index}`}
            width={960}
            height={720}
          />
        </CarouselItem>
      ))}
    </Component>
  ),
};
