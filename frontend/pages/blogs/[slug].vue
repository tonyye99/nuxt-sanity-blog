<script setup lang="ts">
import { type Post } from '~/types/Post'
// @ts-ignore
import { PortableText } from '@portabletext/vue'

const route = useRoute()

const query = groq`*[ _type == "post" && slug.current == $slug][0]{ ..., author->, categories[]->{title}, layout->{title, slug} }`
const { data: post } = await useSanityQuery<Post>(query, {
    slug: route.params.slug,
})

</script>

<template>
    <NuxtLayout :name="post?.layout.slug.current">
        <template #header>
            <BlogHeader v-if="post" :publishedAt="post.publishedAt" :title="post.title!" />
        </template>
        <template #title>
            <BlogTitle v-if="post" :title="post.title!" />
        </template>
        <template #left>
            <BlogSidebar v-if="post?.author" :author="post.author" />
        </template>
        <template #mainImage>
            <BlogMainImage v-if="post?.mainImage" :main-image="post.mainImage" />
        </template>
        <template #content>
            <PortableText v-if="post" :value="post.body" class="prose dark:prose-invert" />
        </template>
        <template #footer>
            <BlogFooter v-if="post" :categories="post.categories" />
        </template>
    </NuxtLayout>
</template>