import { PreviewSuspense } from 'next-sanity/preview';
import Button from 'src/components/button';
interface Props {
  children: JSX.Element;
}

export const PreviewComponent = ({ children }: Props) => {
  return (
    <PreviewSuspense fallback="Loading...">
      <span className="fixed bottom-6 left-3 z-50">
        <Button.Redirect
          label="Exit Preview"
          href="/api/exit-preview"
          isOpenNewTab={false}
          size="lg"
          variant="fill"
          colorScheme="primary-bg-text-white"
        />
      </span>

      {children}
    </PreviewSuspense>
  );
};
