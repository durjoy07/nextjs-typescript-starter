import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { tagProps } from './mock-data';
import { tagColors } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    color: {
      control: 'select',
      options: [...tagColors],
    },
  },
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary bg-white">
        <Container>
          <Story />
        </Container>
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...tagProps },
};
