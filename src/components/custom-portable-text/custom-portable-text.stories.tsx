import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { richTextContent } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
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
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { content: richTextContent },
};
