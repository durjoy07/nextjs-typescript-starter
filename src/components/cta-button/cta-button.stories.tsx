import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { ctaButtonProps } from './mock-data';
import { ctaButtonColorSchemes } from './interface';
import Container from '@components/container';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [...ctaButtonColorSchemes],
    },
    hoverColorScheme: {
      control: 'select',
      options: [undefined, ...ctaButtonColorSchemes],
    },
  },
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <Container>
          <Story />
        </Container>
      </div>
    ),
  ],
};

export default meta;

export const CtaPrimary: StoryObj<typeof Component> = {
  args: { ...ctaButtonProps },
};
