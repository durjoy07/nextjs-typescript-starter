import clsx from 'clsx';
import { ISectionHeading } from './interface';
import Styles from './index.module.scss';
import CustomPortableText from '@components/custom-portable-text';

const subtitleClasses = clsx(
  'block text-[1.125rem] font-medium leading-[1.5] md:text-[1.5rem]  md:leading-[1.2]',
  [Styles['sub-title']]
);
const titleClasses = clsx(
  'text-[1.75rem] font-medium leading-[1.3] md:text-[3rem] md:font-bold md:leading-[1.1]',
  [Styles['title']]
);
const descriptionClasses = clsx(
  'text-[.875rem] leading-[1.3] md:text-base mt-3 lg:mt-5',
  [Styles['description']]
);

/**
 * @param {object} ISectionHeading
 * @returns JSX.Element
 */
export default function SectionHeading({
  subtitle,
  title,
  description,
  isCenter,
  colorScheme,
  hasBottomSpacing,
}: ISectionHeading) {
  const sectionHeadingClasses = clsx(
    'space-y-2 lg:space-y-3',
    { 'text-center': isCenter },
    { 'mb-[1.875rem] md:mb-[3.25rem]': hasBottomSpacing },
    [Styles['section-heading']],
    [Styles[colorScheme]]
  );

  return (
    <div role="presentation" className={sectionHeadingClasses}>
      {subtitle && <span className={subtitleClasses}>{subtitle}</span>}
      <h2 className={titleClasses}>{title}</h2>
      {description && (
        <div className={descriptionClasses}>
          <CustomPortableText content={description} />
        </div>
      )}
    </div>
  );
}
