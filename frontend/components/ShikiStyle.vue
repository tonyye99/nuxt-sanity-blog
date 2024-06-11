<script setup lang="ts">
import { codeToHtml } from 'shiki'

const { code, lang } = defineProps<{ code: string; lang: string }>()

const codeHtml = await codeToHtml(code, {
    lang,
    themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
    },
})
</script>

<template>
    <div v-html="codeHtml" class="shiki-style my-5 border dark:border-gray-800 rounded-lg"></div>
</template>

<style>
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki-style pre {
    @apply relative z-10 m-0 py-3 bg-transparent overflow-x-auto rounded-lg
}

.shiki-style code {
    @apply w-fit block px-5 min-w-full 
}
</style>