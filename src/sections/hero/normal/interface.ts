interface IButton {
  label: string;
  href: string;
}

export interface IHero {
  title: string;
  description: string;
  buttons: {
    buttonLeft: IButton;
    buttonRight: IButton;
  };
}
