<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-primary pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'
  }
})
</script>

<template>
  <NuxtLayout name="section-container">
    <div class="flex h-screen flex-col justify-between font-sans">
      <Header />
      <main class="mb-auto">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </NuxtLayout>
</template>