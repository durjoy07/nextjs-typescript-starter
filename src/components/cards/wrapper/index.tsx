import clsx from 'clsx';
import { ICardWrapper } from './interface';
import Styles from './card-wrapper.module.scss';

interface Props extends ICardWrapper {
  children: JSX.Element;
}

/**
 * @param {object}  Props
 * @returns JSX.Element
 * @description This component is a card wrapper component which take a children component.
 */
const CardWrapper = ({
  children,
  cardBorderRadius,
  cardShadow,
  hoverCardShadow,
}: Props) => {
  const cardClasses = clsx(
    'relative overflow-hidden h-auto',
    [Styles['card']],
    [Styles[cardShadow]],
    { [Styles[`hover-${hoverCardShadow}`]]: hoverCardShadow !== undefined },
    [Styles[cardBorderRadius]]
  );
  return (
    <div className={cardClasses} role="presentation">
      {children}
    </div>
  );
};

export default CardWrapper;
