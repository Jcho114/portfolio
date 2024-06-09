import { c as create_ssr_component, b as subscribe, h as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="flex flex-col justify-center items-center gap-2 h-full-with-navbar"><p class="text-8xl font-bold">${escape($page.status)}</p> <p class="text-xl font-medium">${escape($page?.error?.message)}</p></main>`;
});
export {
  Error as default
};
