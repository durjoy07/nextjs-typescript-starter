import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from 'src/backend/client';

export const usePreview = definePreview({
  projectId,
  dataset,
});
