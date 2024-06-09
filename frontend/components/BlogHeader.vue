<script setup lang="ts">
const { publishedAt } = defineProps<{
    publishedAt: string
}>()

const publishedAtDate = new Date(publishedAt).toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})  
</script>

<template>
    <dl class="space-y-10">
        <div>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time>
                    {{ publishedAtDate }}
                </time>
            </dd>
        </div>
    </dl>
</template>