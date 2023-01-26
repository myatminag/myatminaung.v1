import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    token: process.env.SANITY_TOKEN,
    projectId: 'xigwergp',
    apiVersion: '2022-03-10',
    useCdn: 'production'
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (src) => builder.image(src);