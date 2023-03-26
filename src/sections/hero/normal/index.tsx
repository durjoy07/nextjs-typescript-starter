import Container from '@components/container';
import { IHero } from './interface';
import Button from '@components/button';
import { redirectButtonProps } from '@components/button/mock-data';

export default function Hero({
  title,
  description,
  buttons: { buttonLeft, buttonRight },
}: IHero) {
  return (
    <section
      role="presentation"
      className="section-padding-primary flex min-h-screen items-center bg-black"
    >
      <Container>
        <div className="max-w-[1200px]">
          <div className="space-y-12">
            <h2 className="text-3xl text-white md:text-4xl 2xl:text-5xl">
              {title}
            </h2>
            <p className="text-xl text-white">{description}</p>
            <div className="inline-flex flex-wrap items-center gap-4">
              <Button.Redirect
                {...redirectButtonProps}
                label={buttonLeft.label}
                href={buttonLeft.href}
                isOpenNewTab={false}
                size="sm"
              />
              <Button.Redirect
                {...redirectButtonProps}
                colorScheme="secondary-bg-text-white"
                hoverColorScheme="primary-bg-text-white"
                label={buttonRight.label}
                href={buttonRight.href}
                isOpenNewTab={false}
                size="sm"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
