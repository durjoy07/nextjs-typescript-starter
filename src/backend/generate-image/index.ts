import { client } from 'src/backend/client';
import {
  IGeneratedImage,
  IGeneratedImageFitHeight,
  IGeneratedImageFitWidth,
} from './interface';
import imageUrlBuilder from '@sanity/image-url';
import { ISanityCustomImageWithAsset } from '../types/image';

/**
 * This is a sanity package to fetch sanity images.
 *
 * It is difficult to fetch a sanity image while respecting the crop
 * and hotspot settings using custom code.
 *
 * So until we can come up with a custom solution, I think we should use this instead.
 */
const builder = imageUrlBuilder(client);

/**
 * This function will generate an image url and lqip for a sanity image with
 * specified width.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * It will also return the height the image should be rended to maintain aspect
 * ratio.
 * @param source
 * @param width
 * @returns src, lqip, height
 */
export function generateImageUrlWithFitWidth(
  source: ISanityCustomImageWithAsset,
  width: number
): IGeneratedImageFitWidth {
  return {
    src: builder.image(source).auto('format').fit('max').width(width).url(),
    lqip: source.asset.metadata.lqip,
    height: width / source.asset.metadata.dimensions.aspectRatio,
  };
}

/**
 * This function will generate an image url and lqip for a sanity image with
 * the specified height.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * It will also return the width the image should be rended to maintain aspect
 * ratio.
 * @param source
 * @param height
 * @returns src, lqip, width
 */
export function generateImageUrlWithFitHeight(
  source: ISanityCustomImageWithAsset,
  height: number
): IGeneratedImageFitHeight {
  return {
    src: builder.image(source).auto('format').fit('max').height(height).url(),
    lqip: source.asset.metadata.lqip,
    width: height * source.asset.metadata.dimensions.aspectRatio,
  };
}

/**
 * This function will generate an image url and lqip for a sanity image with
 * the specified height and width.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * @param source
 * @param width
 * @param height
 * @returns src, lqip
 */
export function generateImageUrlFixedDimensions(
  source: ISanityCustomImageWithAsset,
  width: number,
  height: number
): IGeneratedImage {
  return {
    src: builder.image(source).width(width).height(height).fit('min').url(),
    lqip: source.asset.metadata.lqip,
  };
}

/**
 * This function will generate an image url and lqip for a sanity image.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * @param source
 * @returns src, lqip
 */
export function generateImageUrl(
  source: ISanityCustomImageWithAsset
): IGeneratedImage {
  return {
    src: builder.image(source).url(),
    lqip: source.asset.metadata.lqip,
  };
}
