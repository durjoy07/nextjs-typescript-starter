import { render } from '@testing-library/react';
import BlogGrid from '.';
import { blogGridProps } from './mock-data';

it('renders blog grid correctly', () => {
  const { getAllByRole } = render(<BlogGrid {...blogGridProps} />);
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
