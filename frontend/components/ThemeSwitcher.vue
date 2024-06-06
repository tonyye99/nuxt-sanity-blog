<script setup lang="ts">
const colorMode = useColorMode()
const isOpen = ref(false)
const selectTheme = (value: string) => {
    colorMode.preference = value
    isOpen.value = false
}

</script>

<template>
    <div class="relative">
        <button type="button"
            class="rounded-lg bg-white dark:bg-gray-800 px-2.5 py-2 text-xs font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700"
            @click="isOpen = !isOpen">
            <Icon name="material-symbols:light-mode-rounded" size="16px" v-if="colorMode.preference === 'light'" />
            <Icon name="material-symbols:dark-mode" size="16px" v-else-if="colorMode.preference === 'dark'" />
            <Icon name="system-uicons:airplay" size="16px" v-else-if="colorMode.preference === 'system'" />
            <Icon name="system-uicons:airplay" size="16px" v-else />
        </button>
        <div v-if="isOpen"
            class="absolue absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <div class="py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg" @click="selectTheme('system')">
                <Icon name="system-uicons:airplay" size="18px" /> System
            </div>
            <div class="py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" @click="selectTheme('light')">
                <Icon name="material-symbols:light-mode-rounded" /> Light
            </div>
            <div class="py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg" @click="selectTheme('dark')">
                <Icon name="material-symbols:dark-mode-rounded" /> Dark
            </div>
        </div>
    </div>
    <!-- <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select> -->
</template>