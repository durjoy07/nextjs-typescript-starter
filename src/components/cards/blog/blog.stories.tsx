import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { blogCardProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary bg-white">
        <Container>
          <div className="max-w-[350px]">
            <Story />
          </div>
        </Container>
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...blogCardProps },
};
