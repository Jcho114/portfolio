import { c as create_ssr_component, j as each, g as add_attribute, h as escape } from "./ssr.js";
function stringToColor(str) {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = hash >> i * 8 & 255;
    color += value.toString(16).padStart(2, "0");
  }
  return color;
}
var Tag = /* @__PURE__ */ ((Tag2) => {
  Tag2["JavaScript"] = "JavaScript";
  Tag2["TypeScript"] = "TypeScript";
  Tag2["Java"] = "Java";
  Tag2["Python"] = "Python";
  Tag2["React"] = "React";
  Tag2["Svelte"] = "Svelte";
  Tag2["Express"] = "Express";
  Tag2["FastAPI"] = "FastAPI";
  Tag2["Spring"] = "Spring";
  Tag2["Jest"] = "Jest";
  Tag2["Vitest"] = "Vitest";
  Tag2["JUnit"] = "JUnit";
  Tag2["Pytest"] = "Pytest";
  Tag2["MySQL"] = "MySQL";
  Tag2["PostgreSQL"] = "PostgreSQL";
  Tag2["MongoDB"] = "MongoDB";
  Tag2["Jenksins"] = "Jenkins";
  Tag2["GitHub_Actions"] = "Github Actions";
  Tag2["Drizzle"] = "Drizzle";
  return Tag2;
})(Tag || {});
const tagColorMapping = {
  ...Object.values(Tag).reduce((acc, el) => {
    return { ...acc, [el]: stringToColor(el) };
  }, {}),
  TypeScript: "#3178C6",
  Svelte: "#FF3E00",
  Vitest: "#FCC72B",
  Spring: "#6DB33F",
  Java: "#EB5B44",
  JavaScript: "#EFD81D",
  React: "#61DAFB",
  Jest: "#96737D",
  Express: "#90C53F",
  Python: "#346C99",
  FastAPI: "#059286",
  Pytest: "#C1CC02",
  MongoDB: "#4FAA41",
  PostgreSQL: "#2F6792",
  Jenkins: "#D43530",
  Github_Actions: "#1F84F7",
  Drizzle: "#C5F74F"
};
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<div class="flex gap-3 my-2 flex-wrap">${each(tags, (tag) => {
    return `<p class="text-sm border rounded-full px-3 py-1 w-fit h-fit"${add_attribute("style", `background-color: ${tagColorMapping[tag]}25; border-color: ${tagColorMapping[tag]}; color: ${tagColorMapping[tag]}`, 0)}>${escape(tag)} </p>`;
  })}</div>`;
});
const verisign = {
  name: "Verisign Internship",
  description: "Finishing migration of a product plugin for a UI based domain registry service.",
  thumbnail: "https://blog.verisign.com/wp-content/uploads/VRSN_LogoThumbnail_BlogImage_202004-01.jpg",
  role: "Undergradute Technology Intern",
  tags: [Tag.Java, Tag.Spring, Tag.JUnit, Tag.JavaScript, Tag.React, Tag.Jest, Tag.Jenksins],
  start: "May 2024",
  end: "Present",
  links: [],
  path: "verisign"
};
const portfolio = {
  name: "Portfolio",
  description: "Created a personal website that showcases my past projects and experiences.",
  thumbnail: "https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg",
  role: "Web Developer",
  tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest, Tag.GitHub_Actions],
  start: "June 2024",
  end: "June 2024",
  links: [],
  path: "portfolio"
};
const appdevclub = {
  name: "UMD App Dev Club Website",
  description: "Helped revamp the club website to professionally showcase club sponsors, projects, and upcoming events.",
  thumbnail: "https://www.cs.umd.edu/sites/default/files/images/article/2024/logo_0.png",
  role: "Student Software Engineer",
  tags: [Tag.TypeScript, Tag.Express, Tag.React, Tag.Jest, Tag.Vitest, Tag.MongoDB],
  start: "March 2024",
  end: "Present",
  links: [
    { url: "https://beta.appdevclub.com/", label: "Beta Link" },
    { url: "https://github.com/appdevumd/website-v2", label: "Frontend" },
    { url: "https://github.com/appdevumd/webv2-backend", label: "Backend" }
  ],
  path: "appdevclub"
};
const gdit = {
  name: "GDIT Scavenger Hunt Application",
  description: "Worked in a UMD App Dev Club project team to build a full stack scavenger hunt application for GDIT.",
  thumbnail: "https://assets.d2iq.com/production/uploads/customers/IGYfnSoqGNPhlqFOmNPdgtOhIiMaGjrS6MfNwZIA.png",
  role: "Student Software Engineer",
  tags: [Tag.Python, Tag.FastAPI, Tag.Pytest, Tag.MongoDB, Tag.GitHub_Actions],
  start: "January 2024",
  end: "May 2024",
  links: [],
  path: "gdit"
};
const peersphere = {
  name: "Bitcamp 2024 - PeerSphere",
  description: "Developed a full stack web application that enables students to exchange information via video conferencing and threads.",
  thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/856/180/datas/gallery.jpg",
  role: "Full Stack Developer",
  tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.PostgreSQL, Tag.Drizzle],
  start: "April 2024",
  end: "April 2024",
  links: [
    { url: "https://github.com/Jcho114/Bitcamp2024Client", label: "Frontend" },
    { url: "https://github.com/Jcho114/Bitcamp2024Server", label: "Server" }
  ],
  path: "peersphere"
};
const vigilant = {
  name: "HoyaHacks 2024 - Vigilant",
  description: "Prototyped a system that utilized crowdfunded reports to visualize warfronts and trend predictions for ongoing wars.",
  thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/739/706/datas/gallery.jpg",
  role: "Full Stack Developer",
  tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.Jest, Tag.MongoDB],
  start: "January 2024",
  end: "January 2024",
  links: [{ url: "https://github.com/Jcho114/vigilant", label: "Monorepo" }],
  path: "vigilant"
};
const csnades = {
  name: "CS2 Nades",
  description: "Created an education full stack web application that stores and displays over 100 nade, flash, molotov, and smoke lineups for the video game Counter-Strike 2.",
  thumbnail: "https://github.com/Jcho114/cs2-nades/raw/main/app/public/README/README.png",
  role: "Web Developer",
  tags: [Tag.TypeScript, Tag.React, Tag.MongoDB],
  start: "December 2023",
  end: "January 2024",
  links: [{ url: "https://github.com/Jcho114/cs2-nades", label: "Monorepo" }],
  path: "csnades"
};
const projects = [verisign, portfolio, appdevclub, gdit, peersphere, vigilant, csnades];
const projectMapping = projects.reduce((acc, el) => {
  return { ...acc, [el.path]: el };
}, {});
export {
  Tags as T,
  projectMapping as a,
  projects as p
};
