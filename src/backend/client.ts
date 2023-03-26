import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

/**
 * Sanity client to be used with published documents
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // This has to be false inorder for the frontend to update with new content.
  useCdn: false,
});

/**
 * Sanity client to be used with preview mode.
 */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // This has to be false inorder for the frontend to update with new content.
  useCdn: false,
  token: process.env.SANITY_API_PREVIEW_TOKEN,
});
