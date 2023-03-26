import { render } from '@testing-library/react';
import Container from '.';

it('renders container correctly', () => {
  const { getByRole } = render(
    <Container>
      <h2>Container</h2>
    </Container>
  );
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

describe.each([true, false])('Given container isFluid: %s', (isFluid) => {
  it(`Expect container to have class ${isFluid}`, () => {
    const { getByRole } = render(
      <Container isFluid={isFluid}>
        <h2>Container</h2>
      </Container>
    );
    const element = getByRole('presentation');
    if (isFluid) {
      expect(element).toHaveClass('full-width');
    } else {
      expect(element).not.toHaveClass('full-width');
    }
  });
});

describe.each([true, false])(
  'Given container isNoPadding: %s',
  (isNoPadding) => {
    it(`Expect container to have class ${isNoPadding}`, () => {
      const { getByRole } = render(
        <Container isNoPadding={isNoPadding}>
          <h2>Container</h2>
        </Container>
      );
      const element = getByRole('presentation');
      if (isNoPadding) {
        expect(element).toHaveClass('no-padding');
      } else {
        expect(element).not.toHaveClass('no-padding');
      }
    });
  }
);
