import { render } from '@testing-library/react';
import HeroWithOverlapContent from '.';
import { heroWithOverlapContentProps } from './mock-data';

it('renders hero with overlp content correctly', () => {
  const { getAllByRole } = render(
    <HeroWithOverlapContent {...heroWithOverlapContentProps} />
  );
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
