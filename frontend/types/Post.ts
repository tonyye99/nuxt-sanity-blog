import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  publishedAt: string;
  title?: string;
  categories: { title: string }[];
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
