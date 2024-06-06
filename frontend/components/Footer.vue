<template>
    <client-only>
        <footer>
            <div class="mt-16 flex flex-col items-center">
                <div class="mb-3 flex space-x-4 items-center">
                    <Icon name="material-symbols-light:mail" size="24px" class="cursor-pointer hover:text-primary-600">
                    </Icon>
                    <Icon name="entypo-social:facebook" size="20px" class="cursor-pointer hover:text-primary-600">
                    </Icon>
                    <Icon name="entypo-social:twitter" size="20px" class="cursor-pointer hover:text-primary-600"></Icon>
                    <Icon name="entypo-social:instagram" size="20px" class="cursor-pointer hover:text-primary-600">
                    </Icon>
                    <Icon name="entypo-social:youtube" size="22px" class="cursor-pointer hover:text-primary-600"></Icon>
                </div>
                <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div></div>
                    <div>{{ ` • ` }}</div>
                    <div>{{ `© ${new Date().getFullYear()}` }}</div>
                    <div>{{ ` • ` }}</div>
                    <nuxt-link href="/"></nuxt-link>
                </div>
                <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <nuxt-link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
                        Tailwind Nuxtjs Theme
                    </nuxt-link>
                </div>
            </div>
        </footer>
    </client-only>
</template>