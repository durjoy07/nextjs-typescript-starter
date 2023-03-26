import { render } from '@testing-library/react';
import Footer from '.';

it('render footer correctly', () => {
  const { getAllByRole } = render(<Footer />);
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
