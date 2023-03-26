import clsx from 'clsx';
import Component from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    isFluid: {
      control: { type: 'boolean' },
    },
    isNoPadding: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary bg-white">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const containerMessage = `Containers provide a means to center and horizontally padding your site’s
        contents. Use Container for a responsive pixel width.`;

const titleClasses = clsx('text-3xl lg:text-4xl font-bold');

export const Primary: StoryObj<typeof Component> = {
  args: {
    children: <h2 className={titleClasses}>{containerMessage}</h2>,
  },
};

const containerFluidMessage = `You can use <Container fluid /> for width: 100% across all viewport and device sizes.`;

export const Fluid: StoryObj<typeof Component> = {
  args: {
    children: <h2 className={titleClasses}>{containerFluidMessage}</h2>,
    isFluid: true,
  },
};
