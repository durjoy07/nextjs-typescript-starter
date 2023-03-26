import { render } from '@testing-library/react';
import CtaButton from '.';
import { ctaButtonProps } from './mock-data';
import { ctaButtonColorSchemes } from './interface';

it('renders cta button correctly', () => {
  const { getByRole } = render(<CtaButton {...ctaButtonProps} />);
  const element = getByRole('link');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

describe.each([true, false])(
  'Given open new tab configurations',
  (isOpenNewTab) => {
    it(`Expect cta button to contain href and ${
      isOpenNewTab ? 'target=_blank' : 'target=_self'
    }`, () => {
      const props = {
        ...ctaButtonProps,
        href: 'https://www.google.com/',
        isOpenNewTab: isOpenNewTab,
      };
      const { getByRole } = render(<CtaButton {...props} />);
      const link = getByRole('link');

      expect(link).toHaveAttribute('href', 'https://www.google.com/');

      if (isOpenNewTab) {
        expect(link).toHaveAttribute('target', '_blank');
      } else {
        expect(link).toHaveAttribute('target', '_self');
      }
    });
  }
);

describe.each(ctaButtonColorSchemes)('Given color scheme %s', (colorScheme) => {
  it(`Expect cta button to have class ${colorScheme}`, () => {
    const props = { ...ctaButtonProps, colorScheme: colorScheme };
    const { getByRole } = render(<CtaButton {...props} />);
    const button = getByRole('link');
    expect(button).toHaveClass(colorScheme);
  });
});
