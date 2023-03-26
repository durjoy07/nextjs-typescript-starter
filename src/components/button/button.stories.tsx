import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import {
  buttonProps,
  outlineButtonProps,
  redirectButtonProps,
  redirectOutlineButtonProps,
} from './mock-data';
import { buttonColorSchemes, buttonSizes } from './interface';
import Container from '@components/container';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [...buttonColorSchemes],
    },
    hoverColorScheme: {
      control: 'select',
      options: [undefined, ...buttonColorSchemes],
    },
    size: {
      control: 'radio',
      options: [...buttonSizes],
    },
    iconName: {
      control: 'select',
      options: [undefined, 'Arrow Right', 'Arrow Left'],
    },
    variant: {
      table: {
        disable: true,
      },
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

export const Primary: StoryObj<typeof Component> = {
  args: { ...buttonProps },
};
export const Redirect: StoryObj<typeof Component.Redirect> = {
  args: { ...redirectButtonProps },
};
export const Outline: StoryObj<typeof Component> = {
  args: { ...outlineButtonProps },
};
export const OutlineRedirect: StoryObj<typeof Component.Redirect> = {
  args: { ...redirectOutlineButtonProps },
};
