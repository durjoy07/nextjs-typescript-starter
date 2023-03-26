import type { NextApiRequest, NextApiResponse } from 'next';

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  if (!req.headers.referer) {
    res.writeHead(307, { Location: '/' });
  } else {
    res.writeHead(307, { Location: req.headers.referer });
  }
  res.end();
}
