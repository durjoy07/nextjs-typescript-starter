import { render } from '@testing-library/react';
import BlogCard from '.';
import { blogCardProps } from './mock-data';

it('renders course card correctly', () => {
  const { getAllByRole } = render(<BlogCard {...blogCardProps} />);
  const element = getAllByRole('presentation')[0];
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('renders course card correctly with link', () => {
  const { getAllByRole } = render(<BlogCard {...blogCardProps} />);
  const element = getAllByRole('link')[0];
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
