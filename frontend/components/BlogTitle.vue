<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
    <div>
        <h1
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {{ title }}
        </h1>
    </div>
</template>