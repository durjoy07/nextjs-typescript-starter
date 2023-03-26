import Container from '@components/container';
import { IListContentSection, IListItem } from './interface';
import clsx from 'clsx';
import Styles from './list-content.module.scss';
import SectionHeading from '@components/section-heading';
import CustomPortableText from '@components/custom-portable-text';

function ListItem({ title, description }: IListItem) {
  const titleClasses = clsx('text-lg lg:text-2xl font-bold', [
    Styles['theme-text'],
  ]);
  return (
    <div className="space-y-4">
      <h3 className={titleClasses}>{title}</h3>
      <div>
        <CustomPortableText content={description} />
      </div>
    </div>
  );
}

export default function ListContentSection({
  sectionTheme,
  sectionHeading,
  lists,
}: IListContentSection) {
  const sectionClasses = clsx('section-padding-primary', [
    Styles[sectionTheme],
  ]);

  const sectionHeadingColorScheme =
    sectionTheme === 'primary' ? 'primary' : 'secondary';

  return (
    <section role="presentation" className={sectionClasses}>
      <Container>
        <div className="w-full max-w-[800px]">
          <SectionHeading
            {...sectionHeading}
            colorScheme={sectionHeadingColorScheme}
            hasBottomSpacing
            isCenter={false}
          />
        </div>
        {lists.length > 0 && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {lists.map((list, index) => (
              <ListItem {...list} key={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
