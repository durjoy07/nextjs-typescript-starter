import { render } from '@testing-library/react';
import Hero from '.';
import { heroProps } from './mock-data';

it('renders hero correctly', () => {
  const { getAllByRole } = render(<Hero {...heroProps} />);
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
