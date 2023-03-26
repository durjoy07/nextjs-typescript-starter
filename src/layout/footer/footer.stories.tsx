import { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta: Meta = {
  component: Component,
  parameters: {
    layout: 'full',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
