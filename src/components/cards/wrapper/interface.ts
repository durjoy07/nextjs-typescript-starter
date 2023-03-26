export interface ICardWrapper {
  cardShadow: ICardShadow;
  hoverCardShadow?: ICardShadow;
  cardBorderRadius: ICardBorderRadius;
}

export const cardWrapperShadow = ['shadow-one', 'shadow-none'] as const;
type ICardShadow = (typeof cardWrapperShadow)[number];

export const cardWrapperBorderRadius = [
  'radius-one',
  'radius-two',
  'radius-none',
] as const;
type ICardBorderRadius = (typeof cardWrapperBorderRadius)[number];
