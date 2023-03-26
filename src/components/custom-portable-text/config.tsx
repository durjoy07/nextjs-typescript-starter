/*
  In order to portable text we call PortableText component and pass our api array as value
  and our component rendering instructions as components prop.

  <PortableText
    value={PortableTextSample}
    components={myPortableTextComponents}
  />

    Relevant links:
    https://portabletext.github.io/types/ (types)
    https://www.npmjs.com/package/@portabletext/react (components)
    https://www.npmjs.com/package/@portabletext/react

*/
import React from 'react';
import clsx from 'clsx';
import CustomPortableText from '.';
import { PortableTextComponents } from '@portabletext/react';
import { extractLinkGlobal } from 'src/utils/extract-link';
import { CustomImage } from '@components/custom-image';
import { generateImageUrl } from 'src/backend/generate-image';
import { ISanityRequiredLink } from 'src/backend/types/links';
import { ISanityCustomImage } from 'src/backend/types/image';
import { ISanityCustomVideo } from 'src/backend/types/video';
import { ISanityBlockquote } from 'src/backend/types/portable-text/blockquote';
import { ISanityCode } from '@root/src/backend/types/portable-text/code';
import Refractor from 'react-refractor';
import Styles from './custom-portable-text.module.scss';

// Sanity backend is currently using only these three coding languages
import js from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import tsx from 'refractor/lang/tsx';
import Link from 'next/link';

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

/**
 * Tailwind Classes
 */
const highLightColor1 = clsx('text-primary');
const highLightColor2 = clsx('text-secondary');
const headingLevel1 = clsx('text-3xl lg:text-4xl  dark:text-white');
const headingLevel2 = clsx('text-2xl lg:text-3xl  dark:text-white');

/**
 * This function will return true if a block contains one child
 * with an empty string.
 *
 * This function is used to render <br/> tags.
 * @method isEmptyBlock
 * @param {React.ReactNode} children
 * @returns boolean
 */
const isEmptyBlock = (children: React.ReactNode) => {
  return React.Children.count(children) == 1 && children?.toString() == '';
};

export const CustomComponents: PortableTextComponents = {
  /**
   * Blocks are top level objects in a portable text array. We look at the
   * style attribute.
   */
  block: {
    headingOne: ({ children, value: { _key } }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      } else {
        return (
          <h2 className={`${headingLevel1} ${highLightColor1}`} id={_key}>
            {children}
          </h2>
        );
      }
    },
    headingTwo: ({ children, value: { _key } }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return (
        <h2 className={`${headingLevel2} ${highLightColor2}`} id={_key}>
          {children}
        </h2>
      );
    },
    normal: ({ children, value: { _key } }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      } else {
        return (
          <p className="dark:text-white" id={_key}>
            {children}
          </p>
        );
      }
    },
  },
  /**
   * Marks are inline stylings (bold, emphasis, italic) for text and links.
   */
  marks: {
    /**
     * GraphQL codegen does not generate types for PortableText. So this has to
     * be handled and maintain by someone who is familiar with the sanity codebase.
     */
    link: ({ children, value }) => {
      const sanityLink: ISanityRequiredLink = value;

      let link;

      if (sanityLink.linkType == 'internalLink') {
        link = extractLinkGlobal(sanityLink);
      } else {
        link = sanityLink.href!;
      }

      const linkClasses = clsx('no-underline', [Styles['styled-link']]);

      return (
        <Link
          className={linkClasses}
          href={link}
          target={'_blank'}
          rel={link.startsWith('/') ? 'noreferrer noopener' : undefined}
        >
          <span className={Styles['link-underline']}>{children}</span>
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
    checkmarks: ({ children }) => <ul>{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
    checkmarks: ({ children }) => (
      <li>
        <span>✅</span>
        {children}
      </li>
    ),
  },
  /**
   * Custom blocks in rich text.
   */
  types: {
    customImageSchema: ({ value }) => {
      const blockImage: ISanityCustomImage = value;
      const dimensions = blockImage.imageFile?.asset?.metadata?.dimensions!;

      const image = generateImageUrl(blockImage.imageFile!);

      return (
        <figure>
          <CustomImage
            height={dimensions.height}
            width={dimensions.width}
            src={image.src}
            alt={blockImage.altDescription!}
            lqip={image.lqip}
          />
        </figure>
      );
    },
    customVideoSchema: ({ value }) => {
      const blockVideo: ISanityCustomVideo = value;
      const dimensions = blockVideo.imageFile?.asset?.metadata?.dimensions!;

      const image = generateImageUrl(blockVideo.imageFile!);
      // TODO : Make video element
      return (
        <figure>
          <CustomImage
            height={dimensions.height}
            width={dimensions.width}
            src={image.src}
            alt={blockVideo.altDescription!}
            lqip={image.lqip}
          />
        </figure>
      );
    },
    blockquote: ({ value }) => {
      const blockquote: ISanityBlockquote = value;

      return (
        <div className="my-4 overflow-hidden rounded-lg border-l-4 border-warning bg-gray p-6 lg:p-8">
          <CustomPortableText content={blockquote.content} />
        </div>
      );
    },
    code: ({ value }) => {
      const code: ISanityCode = value;

      if (Refractor.hasLanguage(code.language)) {
        return (
          <Refractor
            language={code.language}
            value={code.code}
            markers={code.highlightedLines}
          />
        );
      } else {
        return (
          <div className="rounded-5 bg-warning p-4">
            <b>Language not supported!</b>
          </div>
        );
      }
    },
  },
};
