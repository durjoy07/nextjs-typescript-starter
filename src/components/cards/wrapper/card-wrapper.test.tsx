import { render } from '@testing-library/react';
import CardWrapper from '.';
import { cardWrapperProps } from './mock-data';
import { cardWrapperBorderRadius, cardWrapperShadow } from './interface';

it('renders card wrapper correctly', () => {
  const { getByRole } = render(
    <CardWrapper {...cardWrapperProps}>
      <h2>Card Wrapper</h2>
    </CardWrapper>
  );
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

describe.each(cardWrapperShadow)(
  'Given card wrapper box shadow: %s',
  (boxShadow) => {
    it(`Expect card wrapper to have class ${boxShadow}`, () => {
      const { getByRole } = render(
        <CardWrapper {...cardWrapperProps} cardShadow={boxShadow}>
          <h2>CardWrapper</h2>
        </CardWrapper>
      );
      const element = getByRole('presentation');
      expect(element).toHaveClass(boxShadow);
    });
  }
);
describe.each(cardWrapperBorderRadius)(
  'Given card wrapper shadow: %s',
  (borderRadius) => {
    it(`Expect card wrapper to have class ${borderRadius}`, () => {
      const { getByRole } = render(
        <CardWrapper {...cardWrapperProps} cardBorderRadius={borderRadius}>
          <h2>CardWrapper</h2>
        </CardWrapper>
      );
      const element = getByRole('presentation');
      expect(element).toHaveClass(borderRadius);
    });
  }
);
