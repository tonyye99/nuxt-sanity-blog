import type { PortableTextBlock, Slug, Image } from "@sanity/types";
import type { Author } from "./Author";

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  publishedAt: string;
  title?: string;
  layout: { title: string; slug: { current: 'blog-post-layout' | 'blog-banner-layout' } };
  categories: { title: string }[];
  slug: Slug;
  excerpt?: string;
  mainImage?: Image;
  author?: Author;
  body: PortableTextBlock[];
}
