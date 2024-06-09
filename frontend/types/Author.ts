import type { Slug, Image } from "@sanity/types"

export interface Author {
    _id: string
    _type: "author"
    name: string
    slug: Slug
    image?: Image
    bio?: string
    twitter?: string
}