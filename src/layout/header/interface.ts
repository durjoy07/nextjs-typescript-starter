interface IMenuItem {
  label: string;
  href: string;
}

export interface IHeader {
  logo: string;
  menuItems: IMenuItem[];
}

export type ThemeValues = 'dark' | 'light' | undefined;
