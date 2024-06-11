<script setup lang="ts">
const { categories } = defineProps<{
    categories: {
        title: string
    }[]
}>()
</script>

<template>
    <div
        class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
        <div class="py-4 xl:py-6">
            <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
            </h2>
            <div class="flex flex-wrap">
                <Tag v-for="category in categories" :key="category.title" :tag="category.title" />
            </div>
        </div>
        <div class="pt-4 xl:pt-6">
            <NuxtLink :href="'/'" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog">
                &larr; Back to the blog
            </NuxtLink>
        </div>

    </div>
</template>