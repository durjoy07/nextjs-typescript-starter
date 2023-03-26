import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import {
  buttonProps,
  outlineButtonProps,
  redirectButtonProps,
} from './mock-data';
import {
  buttonColorSchemes,
  buttonSizes,
  outlineButtonColorSchemes,
} from './interface';
import { icons } from '@components/icons/interface';

it('renders button correctly', () => {
  const { getByRole } = render(<Button {...buttonProps} />);
  const element = getByRole('button');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('renders redirect button correctly', () => {
  const { getByRole } = render(<Button.Redirect {...redirectButtonProps} />);
  const element = getByRole('link');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

describe('Given a mock function is passed to button', () => {
  it('Expect mockFunction to be called on button click', () => {
    const mockFunction = jest.fn();

    const props = { ...buttonProps, clickHandler: mockFunction };
    const { getByRole } = render(<Button {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});

describe.each([true, false])(
  'Given open new tab configurations',
  (isOpenNewTab) => {
    it(`Expect redirect button to contain href and ${
      isOpenNewTab ? 'target=_blank' : 'target=_self'
    }`, () => {
      const props = {
        ...buttonProps,
        href: 'https://www.google.com/',
        isOpenNewTab: isOpenNewTab,
      };
      const { getByRole } = render(<Button.Redirect {...props} />);
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

describe.each(buttonSizes)('Given button size: %s', (size) => {
  it(`Expect button to have class ${size}`, () => {
    const props = { ...buttonProps, size: size };
    const { getByRole } = render(<Button {...props} />);
    const button = getByRole('button');
    expect(button.children[0]).toHaveClass(size);
  });
});

describe.each(icons)('Given icon option: %s', (iconName) => {
  it(`Expect button to have ${iconName}`, () => {
    const props = { ...buttonProps, iconName: iconName };
    const { getByRole } = render(<Button {...props} />);
    const button = getByRole('button');
    expect(button).toMatchSnapshot();
  });
});

describe.each(buttonColorSchemes)('Given color scheme %s', (colorScheme) => {
  it(`Expect button to have class ${colorScheme}`, () => {
    const props = { ...buttonProps, colorScheme: colorScheme };
    const { getByRole } = render(<Button {...props} />);
    const button = getByRole('button');

    expect(button.children[0]).toHaveClass(colorScheme);
  });
});

describe.each(outlineButtonColorSchemes)(
  'Given color scheme %s',
  (colorScheme) => {
    it(`Expect outline button to have class ${colorScheme}`, () => {
      const props = { ...outlineButtonProps, colorScheme: colorScheme };
      const { getByRole } = render(<Button {...props} />);
      const button = getByRole('button');

      expect(button.children[0]).toHaveClass(colorScheme);
    });
  }
);

describe.each([true, false])('Given iconIsLeft boolean', (iconIsLeft) => {
  it(`Expect button to ${
    iconIsLeft ? 'not' : ''
  } contain class: flex-row-reverse`, () => {
    const props = { ...buttonProps, iconIsLeft: iconIsLeft };
    const { getByRole } = render(<Button {...props} iconName="Arrow Right" />);
    const button = getByRole('button');

    if (iconIsLeft) {
      expect(button.children[0]).toHaveClass('flex-row-reverse');
    } else {
      expect(button.children[0]).not.toHaveClass('flex-row-reverse');
    }
  });
});

describe.each([true, false])(
  'Given shiftIconOnHover boolean',
  (shiftIconOnHover) => {
    it(`Expect button to ${
      shiftIconOnHover ? 'not' : ''
    } contain class: shift-icon-on-hover`, () => {
      const props = { ...buttonProps, shiftIconOnHover: shiftIconOnHover };
      const { getByRole } = render(
        <Button {...props} iconName="Arrow Right" />
      );
      const button = getByRole('button');

      if (shiftIconOnHover) {
        expect(button.children[0]).toHaveClass('shift-icon-on-hover');
      } else {
        expect(button.children[0]).not.toHaveClass('shift-icon-on-hover');
      }
    });
  }
);
