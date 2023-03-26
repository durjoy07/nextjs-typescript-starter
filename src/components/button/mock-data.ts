import {
  IFillButton,
  IFillRedirectButton,
  IOutlineButton,
  IOutlineRedirectButton,
} from './interface';

export const buttonProps: IFillButton = {
  label: 'Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'secondary-bg-text-white',
  size: 'lg',
  clickHandler: () => {},
  shiftIconOnHover: true,
  variant: 'fill',
};

export const redirectButtonProps: IFillRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Redirect Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'secondary-bg-text-white',
  size: 'lg',
  variant: 'fill',
};

export const outlineButtonProps: IOutlineButton = {
  label: 'Outline Button',
  colorScheme: 'transparent-bg-text-primary',
  hoverColorScheme: 'transparent-bg-text-secondary',
  size: 'lg',
  clickHandler: () => {},
  variant: 'outline',
};

export const redirectOutlineButtonProps: IOutlineRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Outline Redirect Button',
  colorScheme: 'transparent-bg-text-primary',
  hoverColorScheme: 'transparent-bg-text-secondary',
  size: 'lg',
  variant: 'outline',
};
