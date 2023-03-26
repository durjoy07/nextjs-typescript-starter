import { ISanitySections } from 'src/backend/queries/fragments/sections/interface';
import { BlogGridBuilder } from './blog-grid';

interface Props {
  sections: ISanitySections | null;
}

export function SectionBuilder({ sections }: Props) {
  return (
    <>
      {sections?.map((section, index: number) => {
        switch (section._type) {
          case 'blogsGrid':
            return <BlogGridBuilder key={index} data={section} />;
        }
      })}
    </>
  );
}
