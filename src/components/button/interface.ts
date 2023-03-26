import React from 'react';
import { IconNames } from './../icons/interface';

// TODO : Find a way to link ISanityOptional Link to redirect button.

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface IFillButton {
  label: string;
  colorScheme: ColorScheme;
  size: Size;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  hoverColorScheme?: ColorScheme;
  iconName?: IconNames;
  iconIsLeft?: boolean;
  shiftIconOnHover?: boolean;
  isDisabled?: boolean;
  variant: 'fill';
}

export interface IFillRedirectButton extends Omit<IFillButton, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export interface IOutlineButton
  extends Omit<IFillButton, 'colorScheme' | 'hoverColorScheme' | 'variant'> {
  colorScheme: OutlineColorScheme;
  hoverColorScheme: OutlineColorScheme;
  variant: 'outline';
}

export interface IOutlineRedirectButton
  extends Omit<IOutlineButton, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export type IBaseButton =
  | Omit<IOutlineButton, 'clickHandler'>
  | Omit<IFillButton, 'clickHandler'>;

export const buttonColorSchemes = [
  'primary-bg-text-white',
  'secondary-bg-text-white',
  'black-bg-text-white',
  'white-bg-text-black',
] as const;
type ColorScheme = (typeof buttonColorSchemes)[number];

export const outlineButtonColorSchemes = [
  'transparent-bg-text-primary',
  'transparent-bg-text-secondary',
  'transparent-bg-text-white',
  'transparent-bg-text-black',
] as const;
type OutlineColorScheme = (typeof outlineButtonColorSchemes)[number];
