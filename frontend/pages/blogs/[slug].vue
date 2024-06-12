<script setup lang="tsx">
import { type Post } from '~/types/Post'
// @ts-ignore
import { PortableText, toPlainText } from '@portabletext/vue'

const route = useRoute()

const query = groq`*[ _type == "post" && slug.current == $slug][0]{ ..., author->, categories[]->{title}, layout->{title, slug} }`
const { data: post, pending, error } = await useSanityQuery<Post>(query, {
    slug: route.params.slug,
})

const CodeComponent = ({ value }: any) => {
    return <shiki-style code={value.code} lang={value.language} />
}

const { $slugify, $urlFor } = useNuxtApp()

const components = {
    types: {
        code: CodeComponent,
        image: ({ value }: any) => {
            return (
                <div class='block py-4'>
                    <nuxt-img src={$urlFor(value).width(1200).url()} class="mx-auto rounded-md" />
                </div>
            )
        }
    },
    block: {
        h1: ({ value }: any, { slots }: any) => {
            const slug = $slugify(toPlainText(value), { lower: true })
            return h('h1', { id: slug, class: 'text-3xl font-extrabold leading-9 tracking-tight py-3' }, slots.default?.())
        },
        h2: ({ value }: any, { slots }: any) => {
            const slug = $slugify(toPlainText(value), { lower: true })
            return h('h2', { id: slug, class: 'text-2xl font-extrabold leading-9 tracking-tight py-3' }, slots.default?.())
        },
        h3: ({ value }: any, { slots }: any) => {
            const slug = $slugify(toPlainText(value), { lower: true })
            return h('h3', { id: slug, class: 'text-xl font-extrabold leading-9 tracking-tight py-3' }, slots.default?.())
        },
    },
    listItem: {
        bullet: (_: any, { slots }: any) => {
            return h('li', { class: 'list-disc ml-4' }, slots.default?.())
        }
    }
}

</script>

<template>
    <NuxtLayout :name="post?.layout.slug.current">
        <template #header>
            <BlogHeader v-if="post" :publishedAt="post.publishedAt" :title="post.title!" />
        </template>
        <template #title>
            <BlogTitle v-if="post" :title="post.title!" />
        </template>
        <template #left="{ className }">
            <BlogSidebar v-if="post?.author" :author="post.author" :class="className" />
        </template>
        <template #mainImage>
            <BlogMainImage v-if="post?.mainImage" :main-image="post.mainImage" />
        </template>
        <template #content>
            <PortableText :value="post!.body" :components="components" />
        </template>
        <template #footer="{ className }">
            <BlogFooter v-if="post" :categories="post.categories" :class="className" />
        </template>
    </NuxtLayout>
</template>
