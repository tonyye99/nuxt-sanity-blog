<template>
    <article>
        <div class="pb-10 dark:border-gray-700">
            <header class="pt-6 xl:pb-6">
                <slot name="title"></slot>

                <slot name="left" className="border-none"></slot>


            </header>

            <slot name="mainImage"></slot>
        </div>
        <div className="prose max-w-none py-4 dark:prose-invert">
            <slot name="content"></slot>
        </div>
        <div>
            <slot name="footer" className="divide-none"></slot>
        </div>
    </article>
</template>