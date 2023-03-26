import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { headerProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    menuItems: {
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
  args: { ...headerProps },
};
