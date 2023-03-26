import { render } from '@testing-library/react';
import ListContentSection from '.';
import { listContentSectionProps } from './mock-data';

it('renders list content section correctly', () => {
  const { getAllByRole } = render(
    <ListContentSection {...listContentSectionProps} />
  );
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
