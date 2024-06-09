import { c as create_ssr_component, h as escape, g as add_attribute, v as validate_component, j as each } from "./ssr.js";
import { T as Tags, a as projectMapping } from "./projects.js";
const ProjectMeta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<div class="gap-4 flex flex-col"><h1 class="text-6xl font-bold mb-4 max-sm:text-4xl">${escape(project.name)}</h1> <img class="w-full aspect-video object-cover"${add_attribute("src", project.thumbnail, 0)}${add_attribute("alt", project.name, 0)}> <div class="flex gap-[5%] max-md:flex-col w-full"><div class="flex flex-col w-[47.5%] max-md:w-full gap-3"><div><h3 class="text-xl font-bold" data-svelte-h="svelte-1lvmje5">Timeline</h3> <h3 class="text-lg">${escape(project.start)} - ${escape(project.end)}</h3></div> <div><h3 class="text-xl font-bold" data-svelte-h="svelte-16362pd">Tools</h3> ${validate_component(Tags, "Tags").$$render($$result, { tags: project.tags }, {}, {})}</div> ${project.links.length > 0 ? `<div><h3 class="text-xl font-bold">${escape(project.links.length === 1 ? "Link" : "Links")}</h3> <div class="flex flex-row items-center gap-4 underline">${each(project.links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} target="_blank">${escape(link.label)}</a>`;
  })}</div></div>` : ``}</div> <div class="flex flex-col w-[47.5%] max-md:w-full max-md:mt-3"><h3 class="text-xl font-bold" data-svelte-h="svelte-z8deqa">Description</h3> <h2 class="text-lg">${escape(project.description)}</h2></div></div></div>`;
});
const ProjectLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `${$$result.head += `<!-- HEAD_svelte-nua8ja_START --><link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css" rel="stylesheet"><!-- HEAD_svelte-nua8ja_END -->`, ""} <main class="w-inherit min-h-full-with-navbar flex flex-col justify-center items-center py-20 px-[27%] pt-[5%] gap-20 max-md:px-[20%] max-md:pt-[10%] max-sm:px-[15%]">${validate_component(ProjectMeta, "ProjectMeta").$$render($$result, { project: projectMapping[path] }, {}, {})} <div class="prose max-w-none w-full prose-lg prose-headings:my-2 prose-headings:text-white prose-p:text-white">${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  ProjectLayout as P
};
