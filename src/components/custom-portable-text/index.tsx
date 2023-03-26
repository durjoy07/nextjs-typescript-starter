import { PortableText } from '@portabletext/react';
import { CustomComponents } from './config';
import { ICustomPortableText } from './interface';

/**
 * This element renders portable text according to custom
 * blocks and schemas used in sanity's portable text.
 * @param {object}  ICustomPortableText
 * @returns JSX.Element
 */
export default function CustomPortableText({ content }: ICustomPortableText) {
  return (
    <article className="prose max-w-full space-y-4">
      <PortableText value={content} components={CustomComponents} />
    </article>
  );
}
