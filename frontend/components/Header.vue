<script setup lang="ts">
const headerNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
]
</script>

<template>
    <client-only>
        <header class="flex items-center justify-between py-10">
            <div>
                <div class="flex items-center justify-between">
                    <div class="mr-3">
                    </div>
                    <div class="hidden h-6 text-2xl font-semibold sm:block">
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-4 leading-5 sm:space-x-6">
                <nuxt-link v-for="link in headerNavLinks" :key="link.name" :to="link.href"
                    class="hover:text-primary-500">
                    {{ link.name }}
                </nuxt-link>
                <theme-switcher />
            </div>
        </header>
    </client-only>
</template>