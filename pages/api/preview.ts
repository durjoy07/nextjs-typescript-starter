// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { previewClient } from '@root/src/backend/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

function redirectToPreview(res: NextApiResponse, Location: string) {
  /**
   * Set the preview token from sanity studio
   */
  res.setPreviewData({ token: process.env.SANITY_API_PREVIEW_TOKEN });
  res.writeHead(307, { Location });
  res.end();
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, slug, _type } = req.query;

  if (!secret) {
    return res.status(401).json({ message: 'No secret token' });
  }

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret!' });
  }

  if (!_type) {
    return res.status(401).json({ message: 'Type not found!' });
  }

  if (!slug) {
    return res.status(401).json({ message: 'Slug not found!' });
  }

  /**
   * Check if the page with the given `slug` exists
   * If the slug doesn't exist prevent preview mode from being enabled
   */

  const page = await previewClient.fetch(
    groq`
      *[_type == $type && slug.current == $slug]
    `,
    {
      slug,
      type: _type,
    }
  );

  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  return redirectToPreview(res, `${slug}`);
}
