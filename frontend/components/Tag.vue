<script setup lang="ts">
const { tag } = defineProps<{ tag: string }>()

const formattedTag = tag?.split(" ").join('-')
</script>

<template>
    <nuxt-link
        class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {{ formattedTag }}
    </nuxt-link>
</template>