<template>
    <article>
        <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header class="pt-6 xl:pb-6">
                <div class="space-y-1 text-center">
                    <slot name="header"></slot>
                    <div>
                        <slot name="title"></slot>
                    </div>
                </div>
            </header>
        </div>
        <div
            class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <slot name="left"></slot>
            <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div class="prose max-w-none pb-8 pt-10 dark:prose-invert">
                    <slot name="mainImage"></slot>
                    <slot name="content"></slot>
                </div>
            </div>
            <slot name="footer"></slot>
        </div>
    </article>
</template>