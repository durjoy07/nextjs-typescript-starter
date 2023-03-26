import CardWrapper from '../wrapper';
import { BLOG_IMAGE_DIMENSION, IBlogCard } from './interface';
import Tag from '@components/tag';
import { tagColors } from '@components/tag/interface';
import { CustomImage } from '@components/custom-image';
import Link from 'next/link';

export default function BlogCard({
  href,
  image,
  title,
  description,
  isFeatured,
  tags,
}: IBlogCard) {
  return (
    <CardWrapper cardBorderRadius="radius-one" cardShadow="shadow-one">
      <Link href={href} passHref className="block">
        <div className="group/card relative h-full bg-success/[.2]">
          <div className="relative">
            {isFeatured && (
              <div className="absolute left-6 bottom-0 z-1 translate-y-1/2">
                <Tag label="Featured" color="bg-warning" />
              </div>
            )}
            <div className="overflow-hidden">
              <CustomImage
                className={
                  'transition-transform ease-in-out group-hover/card:scale-110'
                }
                src={image.src}
                alt={image.alt}
                lqip={image.lqip}
                width={BLOG_IMAGE_DIMENSION.width}
                height={BLOG_IMAGE_DIMENSION.height}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-5 pt-8">
            <h3 className="flex-1 text-lg font-bold line-clamp-2">{title}</h3>
            <p className="line-clamp-3">{description}</p>
            <div>
              <div className="mt-4 flex items-center gap-2">
                {tags.map((tag, index) => (
                  <Tag
                    label={tag}
                    key={index}
                    color={tagColors[index % tagColors.length]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
}
