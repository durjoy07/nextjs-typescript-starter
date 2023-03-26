import { render } from '@testing-library/react';
import SectionHeading from '.';
import { sectionHeadingProps } from './mock-data';
import { sectionHeadingColorschemes } from './interface';

it('renders section heading correctly', () => {
  const { getByRole } = render(<SectionHeading {...sectionHeadingProps} />);
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

describe.each(sectionHeadingColorschemes)(
  'Given section heading colorScheme: %s',
  (colorScheme) => {
    it(`Expect section heading to have class ${colorScheme}`, () => {
      const { getByRole } = render(
        <SectionHeading {...sectionHeadingProps} colorScheme={colorScheme} />
      );
      const element = getByRole('presentation');
      expect(element).toHaveClass(colorScheme);
    });
  }
);

describe.each([true, false])(
  'Given section heading alignment: %s',
  (isCenter) => {
    it(`Expect section heading to have class ${isCenter}`, () => {
      const { getByRole } = render(
        <SectionHeading {...sectionHeadingProps} isCenter={isCenter} />
      );
      const element = getByRole('presentation');
      if (isCenter) {
        expect(element).toHaveClass('text-center');
      } else {
        expect(element).not.toHaveClass('text-center');
      }
    });
  }
);

const bottomSpacingClasses = `mb-[1.875rem] md:mb-[3.25rem]`;

describe.each([true, false])(
  'Given section heading bottom spacing: %s',
  (hasBottomSpacing) => {
    it(`Expect section heading to have class ${hasBottomSpacing}`, () => {
      const { getByRole } = render(
        <SectionHeading
          {...sectionHeadingProps}
          hasBottomSpacing={hasBottomSpacing}
        />
      );
      const element = getByRole('presentation');
      if (hasBottomSpacing) {
        expect(element).toHaveClass(bottomSpacingClasses);
      } else {
        expect(element).not.toHaveClass(bottomSpacingClasses);
      }
    });
  }
);
