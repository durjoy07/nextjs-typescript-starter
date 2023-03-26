import {
  BLOG_IMAGE_DIMENSION,
  IBlogCard,
} from '@components/cards/blog/interface';
import { generateImageUrlFixedDimensions } from '@root/src/backend/generate-image';
import { ISanityBlogsGrid } from '@root/src/backend/queries/fragments/sections/blogs-grid/interface';
import BlogGrid from '@root/src/sections/blog-grid';

interface Props {
  data: ISanityBlogsGrid;
}

export function BlogGridBuilder({ data }: Props) {
  const blogs: IBlogCard[] = data.blogs.map((blog) => {
    const blogImage = generateImageUrlFixedDimensions(
      blog.image.imageFile,
      BLOG_IMAGE_DIMENSION.width,
      BLOG_IMAGE_DIMENSION.height
    );

    return {
      href: blog.slug.current,
      image: {
        src: blogImage.src,
        alt: blog.title,
        lqip: blogImage.lqip,
      },
      title: blog.title,
      description: blog.description,
      tags: blog.tags,
      isFeatured: blog.isFeaturedBlog,
    };
  });

  return (
    <BlogGrid
      blogs={blogs}
      sectionHeading={{
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
      }}
    />
  );
}
