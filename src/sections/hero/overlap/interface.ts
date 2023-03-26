interface IButton {
  label: string;
  href: string;
}
export interface IHeroWithOverlapContent {
  title: string;
  description: string;
  buttons: {
    buttonLeft: IButton;
    buttonRight: IButton;
  };
}
