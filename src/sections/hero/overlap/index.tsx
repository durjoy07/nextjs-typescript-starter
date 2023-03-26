import Container from '@components/container';
import { IHeroWithOverlapContent } from './interface';
import clsx from 'clsx';
import Styles from './hero.module.scss';
import { CSSProperties } from 'react';
import { useDomNodeDimensions } from 'src/hooks/dom-node-dimensions';
import Button from '@components/button';
import { redirectButtonProps } from '@components/button/mock-data';

export default function HeroWithOverlapContent({
  title,
  description,
  buttons: { buttonLeft, buttonRight },
}: IHeroWithOverlapContent) {
  const { height, ref: overlapContentRef } = useDomNodeDimensions();
  const overlapContentHeightHalf = `${height! / 2}px`;

  const contentWrapperClasses = clsx('max-w-[1200px]', {
    [Styles['content-wrapper']]: true,
  });

  return (
    <section role="presentation">
      <div className=" flex min-h-[500px] justify-between bg-black lg:min-h-[700px]">
        <Container>
          <div
            className={contentWrapperClasses}
            style={
              {
                '--overlap-content-height-half': `${overlapContentHeightHalf}`,
              } as CSSProperties
            }
          >
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
      </div>
      <div
        ref={overlapContentRef}
        className="-translate-y-1/2"
        style={{ marginBottom: `-${overlapContentHeightHalf}` }}
      >
        <Container>
          <div className="rounded-10 bg-[#ddd] px-12 py-10 shadow-1">
            <div className="space-y-6">
              <h2 className="text-3xl text-black md:text-4xl">
                We Build Lightning Fast Websites With Amazing UX Using Headless
              </h2>
              <p className="text-xl text-black">
                We make secure, flexible and fast headless (Jamstack) websites
                and apps that improve Technical SEO, increase visitor numbers &
                conversion rates. We build with Sanity, BigCommerce, Prismic,
                Strapi, Contentful, WordPress, and other headless content
                management systems.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
