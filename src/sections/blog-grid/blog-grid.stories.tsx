import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { blogGridProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    sectionHeading: {
      table: {
        disable: true,
      },
    },
    blogs: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'full',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...blogGridProps },
};
