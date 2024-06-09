<template>
    <article>
        <div class="space-y-1 pb-10 text-center dark:border-gray-700">
            <slot name="mainImage"></slot>
            <slot name="title"></slot>
        </div>
        <div className="prose max-w-none py-4 dark:prose-invert">
            <slot name="content"></slot>
        </div>
    </article>
</template>