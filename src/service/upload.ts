export default async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  return await fetch('https://api.tou.im/upload', {
    method: 'POST',
    body: formData,
  });
};
