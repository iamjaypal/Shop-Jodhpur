import  { createClient }  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
  projectId: '5o39mnuz',
  dataset: 'production',
  apiVersion: '2023-08-12',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);