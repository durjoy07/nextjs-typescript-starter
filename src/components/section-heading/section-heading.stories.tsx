import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { sectionHeadingProps } from './mock-data';
import { sectionHeadingColorschemes } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [...sectionHeadingColorschemes],
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
  args: { ...sectionHeadingProps },
};
