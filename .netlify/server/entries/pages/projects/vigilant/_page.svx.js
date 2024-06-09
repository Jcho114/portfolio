import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as ProjectLayout } from "../../../../chunks/ProjectLayout.js";
const metadata = { "layout": "project", "path": "vigilant" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ProjectLayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-1vqw00z">Overview</h1> <h3 data-svelte-h="svelte-u7wf25">TBD!</h3>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
