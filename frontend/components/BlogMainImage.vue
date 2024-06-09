<script setup lang="ts">
const { mainImage } = defineProps<{
    mainImage: any
}>()
</script>

<template>
    <div class="w-full">
        <div class="relative aspect-[2/1] w-full">
            <NuxtImg :src="$urlFor(mainImage).url()" class="object-contain mx-auto rounded-sm" />
        </div>
    </div>
</template>