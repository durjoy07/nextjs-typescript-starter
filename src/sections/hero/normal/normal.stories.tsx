import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { heroProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {},
  parameters: {
    layout: 'full',
  },
  decorators: [(Story) => <Story />],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...heroProps },
};
