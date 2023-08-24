import { createNextRouteHandler } from 'uploadthing/next';

import { touFileRouter } from './core';

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: touFileRouter,
});
