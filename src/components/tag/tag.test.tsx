import { render } from '@testing-library/react';
import Tag from '.';
import { tagProps } from './mock-data';

it('renders tag correctly', () => {
  const { getByRole } = render(<Tag {...tagProps} />);
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
