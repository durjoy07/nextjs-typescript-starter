import { fireEvent, render } from '@testing-library/react';
import { CustomImage, CustomFillImage } from '.';

it('Custom Image: Renders image with appropriate src', () => {
  const { getByRole } = render(
    <CustomImage
      alt="Test Alt"
      height={400}
      src="https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/Test-Logo-Small-Black-transparent-1.png"
      width={400}
    />
  );
  const element = getByRole('img');
  expect(element).toHaveAttribute(
    'src',
    'http://localhost/_next/image?url=https%3A%2F%2Fcpmr-islands.org%2Fwp-content%2Fuploads%2Fsites%2F4%2F2019%2F07%2FTest-Logo-Small-Black-transparent-1.png&w=828&q=75'
  );
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('Custom Image: Renders fallback image when src is broken', async () => {
  const { getByRole } = render(
    <CustomImage
      alt="Test Alt"
      height={400}
      src="/invalid-src-link"
      width={400}
    />
  );
  const element = getByRole('img');
  await fireEvent.error(element);
  expect(element).toHaveAttribute(
    'src',
    'http://localhost/_next/image?url=%2Fimage-error%2Findex.jpg&w=828&q=75'
  );
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('Custom Fill Image: Renders image with appropriate src', () => {
  const { getByRole } = render(
    <CustomFillImage
      alt="Test Alt"
      src="https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/Test-Logo-Small-Black-transparent-1.png"
    />
  );
  const element = getByRole('img');
  expect(element).toHaveAttribute(
    'src',
    'http://localhost/_next/image?url=https%3A%2F%2Fcpmr-islands.org%2Fwp-content%2Fuploads%2Fsites%2F4%2F2019%2F07%2FTest-Logo-Small-Black-transparent-1.png&w=3840&q=75'
  );
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('Custom Fill Image: Renders fallback image when src is broken', async () => {
  const { getByRole } = render(
    <CustomFillImage alt="Test Alt" src="/invalid-src-link" />
  );
  const element = getByRole('img');
  await fireEvent.error(element);
  expect(element).toHaveAttribute(
    'src',
    'http://localhost/_next/image?url=%2Fimage-error%2Findex.jpg&w=3840&q=75'
  );
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
