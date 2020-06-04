export default async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file: File) => formData.append('image', file));
  return await fetch('https://api.tou.im/upload', {
    method: 'POST',
    body: formData,
  });
};
