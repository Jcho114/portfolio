import { c as create_ssr_component, g as add_attribute, d as spread, i as escape_attribute_value, e as escape_object, b as subscribe, v as validate_component, h as escape, j as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { T as Tags, p as projects } from "../../chunks/projects.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const CardContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  let { isMouseEntered = false } = $$props;
  let containerRef;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  if ($$props.isMouseEntered === void 0 && $$bindings.isMouseEntered && isMouseEntered !== void 0)
    $$bindings.isMouseEntered(isMouseEntered);
  return `<div${add_attribute("class", cn("flex items-center justify-center", containerClassName), 0)} style="perspective: 1000px;"><div role="figure"${add_attribute("class", cn("relative flex items-center justify-center transition-all duration-200 ease-linear", className), 0)} style="transform-style: preserve-3d;"${add_attribute("this", containerRef, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const CardBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div${add_attribute("class", cn("h-fit w-fit [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]", className), 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const CardItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = void 0 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { translateZ = 0 } = $$props;
  let { rotateX = 0 } = $$props;
  let { rotateY = 0 } = $$props;
  let { rotateZ = 0 } = $$props;
  let { isMouseEntered } = $$props;
  let ref;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.translateZ === void 0 && $$bindings.translateZ && translateZ !== void 0)
    $$bindings.translateZ(translateZ);
  if ($$props.rotateX === void 0 && $$bindings.rotateX && rotateX !== void 0)
    $$bindings.rotateX(rotateX);
  if ($$props.rotateY === void 0 && $$bindings.rotateY && rotateY !== void 0)
    $$bindings.rotateY(rotateY);
  if ($$props.rotateZ === void 0 && $$bindings.rotateZ && rotateZ !== void 0)
    $$bindings.rotateZ(rotateZ);
  if ($$props.isMouseEntered === void 0 && $$bindings.isMouseEntered && isMouseEntered !== void 0)
    $$bindings.isMouseEntered(isMouseEntered);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("w-fit transition duration-200 ease-linear", className))
      },
      escape_object($$props)
    ],
    {}
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="language-typescript"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">const</span> Joseph <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  education<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      school<span class="token operator">:</span> <span class="token string">"University of Maryland"</span><span class="token punctuation">,</span>
      standing<span class="token operator">:</span> <span class="token string">"Junior"</span><span class="token punctuation">,</span>
      major<span class="token operator">:</span> <span class="token string">"Computer Science"</span><span class="token punctuation">,</span>
      minor<span class="token operator">:</span> <span class="token string">"Statistics"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  interests<span class="token operator">:</span> <span class="token punctuation">[</span>
    Interest<span class="token punctuation">.</span><span class="token constant">SOFTWARE_ENGINEERING</span><span class="token punctuation">,</span>
    Interest<span class="token punctuation">.</span><span class="token constant">MACHINE_LEARNING</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let isMouseEntered = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-nua8ja_START --><link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css" rel="stylesheet"><!-- HEAD_svelte-nua8ja_END -->`, ""} <div class="flex justify-center items-center h-full-with-navbar gap-x-[10vw]"><div class="flex flex-col justify-center gap-0.5 max-md:scale-75"><p class="text-8xl font-semibold" data-svelte-h="svelte-ucp8o1">Joseph Cho</p> <div class="h-5"></div> <p class="text-xl text-gray-300" data-svelte-h="svelte-1tho5gh">Full Stack Developer</p> <p class="text-xl text-gray-300" data-svelte-h="svelte-9e4crb">Computer Science and Statistics at University of Maryland</p> <div class="h-6"></div> <a href="/#projects" class="w-fit" data-svelte-h="svelte-1ejcva9"><p class="border w-fit px-4 py-1 rounded-full text-lg text-gray-300 hover">Scroll ↓</p></a></div> <div data-testid="card">${validate_component(CardContainer, "CardContainer").$$render(
      $$result,
      { isMouseEntered },
      {
        isMouseEntered: ($$value) => {
          isMouseEntered = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render(
            $$result,
            {
              className: "rounded w-fit h-fit max-md:hidden bg-[#1D2021] px-10 py-12"
            },
            {},
            {
              default: () => {
                return `${validate_component(CardItem, "CardItem").$$render($$result, { isMouseEntered, translateZ: 25 }, {}, {
                  default: () => {
                    return `${validate_component(Code, "Code").$$render($$result, {}, {}, {})}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let isMouseEntered = false;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-row gap-10 justify-center w-full items-center max-md:flex-col max-md:p-14">${validate_component(CardContainer, "CardContainer").$$render(
      $$result,
      { isMouseEntered },
      {
        isMouseEntered: ($$value) => {
          isMouseEntered = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CardBody, "CardBody").$$render($$result, { className: "w-fit" }, {}, {
            default: () => {
              return `${validate_component(CardItem, "CardItem").$$render($$result, {}, {}, {
                default: () => {
                  return `<a${add_attribute("href", `/projects/${project.path}`, 0)}><img class="object-cover max-md:w-full w-[30vw] aspect-[16/10]"${add_attribute("src", project.thumbnail, 0)}${add_attribute("alt", project.name, 0)}></a>`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-col gap-2 w-1/3 max-md:w-full"><div><p class="text-3xl font-medium">${escape(project.name)}</p> <p class="text-sm">${escape(project.role)}</p> <p class="text-sm">${escape(project.start)} - ${escape(project.end)}</p></div> <p class="text-md text-gray-300">${escape(project.description)}</p> ${validate_component(Tags, "Tags").$$render($$result, { tags: project.tags }, {}, {})} <button class="text-sm border border-white rounded-full w-fit px-3 py-1 duration-200 ease-in"><a${add_attribute("href", `/projects/${project.path}`, 0)}>Learn More</a></button></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
Promise.resolve();
const AnimatedElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${``}</div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="projects" class="flex flex-col justify-center items-center min-h-screen gap-10 py-[5.2rem]"><h1 class="text-5xl font-semibold mb-4" data-svelte-h="svelte-12x9au7">Projects</h1> <div class="flex flex-col justify-center gap-y-16">${each(projects, (project) => {
    return `${validate_component(AnimatedElement, "AnimatedElement").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} `;
      }
    })}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
