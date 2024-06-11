<script setup lang="ts">
import { type Author } from '~/types/Author'

const { author } = defineProps<{
    author: Author
}>()

const twitterUrl = author?.twitter?.replace('https://twitter.com/', '@').replace('https://x.com/', '@')
</script>

<template>
    <dl class="py-8 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
        <dt class="sr-only">Authors</dt>
        <dd>
            <ul class="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                <li class="flex items-center space-x-2" :key="author.name">
                    <NuxtImg :src="$urlFor(author.image!).width(64).url()" class="rounded-full" />
                    <dl class="whitespace-nowrap text-sm font-medium leading-5">
                        <dt class="sr-only">Name</dt>
                        <dd class="text-gray-900 dark:text-gray-100">{{ author.name }}</dd>
                        <dt class="sr-only">Twitter</dt>
                        <dd>
                            <NuxtLink :href="author.twitter"
                                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                {{ twitterUrl }}
                            </NuxtLink>
                        </dd>
                    </dl>
                </li>
            </ul>
        </dd>
    </dl>
</template>