import { createUploadthing } from 'uploadthing/next';
import type { FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const touFileRouter = {
  imageUploader: f({
    image: { maxFileCount: 5, maxFileSize: '4MB' },
  }).onUploadComplete(async ({ file }) => {
    console.log('file url', file.url);
  }),
} satisfies FileRouter;

export type TouFileRouter = typeof touFileRouter;
