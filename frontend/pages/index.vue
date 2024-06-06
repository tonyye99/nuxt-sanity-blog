<script setup lang="ts">
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ]{ ..., author->{name}, categories[]->{title} } | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Latest
            </h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
            </p>
        </div>
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="post in posts" :key="post._id" class="py-12">
                <article>
                    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dt class="sr-only">Published on</dt>
                            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time :dateTime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
                            </dd>
                        </dl>
                        <div class="space-y-5 xl:col-span-3">
                            <div class="space-y-6">
                                <div>
                                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                        <nuxt-link :href="`/blogs/${post.slug.current}`"
                                            class="text-gray-900 dark:text-gray-100">
                                            {{ post.title }}
                                        </nuxt-link>
                                    </h2>
                                    <div class="flex flex-wrap">
                                        <Tag v-for="category in post.categories" :key="category.title"
                                            :tag="category.title" />
                                    </div>
                                </div>
                                <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                    {{ post.excerpt }}
                                </div>
                            </div>
                            <div class="text-base font-medium leading-6">
                                <nuxt-link :href="`/blogs/${post.slug.current}`"
                                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    :aria-label="`Read more: '${post.title}'`">
                                    Read more &rarr;
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</template>