import Container from '@components/container';
import SectionHeading from '@components/section-heading';
import { IBlogGrid } from './interface';
import BlogCard from '@components/cards/blog';

export default function BlogGrid({ sectionHeading, blogs }: IBlogGrid) {
  return (
    <section
      role="presentation"
      className="section-padding-primary bg-gray-medium"
    >
      <Container>
        <div className="max-w-[700px]">
          <SectionHeading
            {...sectionHeading}
            colorScheme="primary"
            hasBottomSpacing
            isCenter={false}
          />
          {/* <SectionHeading
            {...sectionHeading}
            colorScheme="primary"
            hasBottomSpacing
            isCenter
          /> */}
        </div>
        {blogs.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {blogs.map((course, index) => (
              <BlogCard {...course} key={index} />
            ))}
          </div>
        )}
        {/* {blogs.length > 0 && (
          <div className="sm:-mx-6">
            <div className="flex flex-wrap justify-center px-4 sm:px-3">
              {blogs.map((course, index) => (
                <div
                  className="w-full px-0 mb-6 sm:px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  key={index}
                >
                  <BlogCard {...course} />
                </div>
              ))}
            </div>
          </div>
        )} */}
      </Container>
    </section>
  );
}
