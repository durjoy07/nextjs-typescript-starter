/**
 * Remeber to add these fonts in tailwind config and _app.js.
 */

import { Roboto, Inter } from 'next/font/google';

export const primary = Roboto({
  subsets: ['latin'],
  variable: '--font-primary',
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  display: 'optional',
});

export const secondary = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  style: ['normal'],
  display: 'optional',
});
