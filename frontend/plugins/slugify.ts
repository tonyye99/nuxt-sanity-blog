import slugify from "slugify";

export default defineNuxtPlugin(() => {
  return {
    provide: { slugify },
  };
});
