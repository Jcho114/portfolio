import type { Project } from './types/Project';
import Tag from './types/Tag';

export const verisign: Project = {
	name: 'Verisign Internship',
	description: 'Finishing migration of a product plugin for a UI based domain registry service.',
	thumbnail:
		'https://blog.verisign.com/wp-content/uploads/VRSN_LogoThumbnail_BlogImage_202004-01.jpg',
	role: 'Undergradute Technology Intern',
	tags: [Tag.Java, Tag.Spring, Tag.JUnit, Tag.JavaScript, Tag.React, Tag.Jest, Tag.Jenksins],
	start: 'May 2024',
	end: 'Present',
	links: [],
	path: 'verisign'
};

export const portfolio: Project = {
	name: 'Portfolio',
	description: 'Created a personal website that showcases my past projects and experiences.',
	thumbnail: 'https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest, Tag.GitHub_Actions],
	start: 'June 2024',
	end: 'June 2024',
	links: [
		{ url: 'https://josephcho.dev/', label: 'Website Link' },
		{ url: 'https://github.com/Jcho114/portfolio', label: 'Github Repo' }
	],
	path: 'portfolio'
};

export const appdevclub: Project = {
	name: 'UMD App Dev Club Website',
	description:
		'Helped revamp the club website to professionally showcase club sponsors, projects, and upcoming events.',
	thumbnail: 'https://www.cs.umd.edu/sites/default/files/images/article/2024/logo_0.png',
	role: 'Student Software Engineer',
	tags: [Tag.TypeScript, Tag.Express, Tag.React, Tag.Jest, Tag.Vitest, Tag.MongoDB],
	start: 'March 2024',
	end: 'Present',
	links: [
		{ url: 'https://beta.appdevclub.com/', label: 'Beta Link' },
		{ url: 'https://github.com/appdevumd/website-v2', label: 'Frontend' },
		{ url: 'https://github.com/appdevumd/webv2-backend', label: 'Backend' }
	],
	path: 'appdevclub'
};

export const gdit: Project = {
	name: 'GDIT Scavenger Hunt Application',
	description:
		'Worked in a UMD App Dev Club project team to build a full stack scavenger hunt application for GDIT.',
	thumbnail:
		'https://assets.d2iq.com/production/uploads/customers/IGYfnSoqGNPhlqFOmNPdgtOhIiMaGjrS6MfNwZIA.png',
	role: 'Student Software Engineer',
	tags: [Tag.Python, Tag.FastAPI, Tag.Pytest, Tag.MongoDB, Tag.GitHub_Actions],
	start: 'January 2024',
	end: 'May 2024',
	links: [],
	path: 'gdit'
};

export const peersphere: Project = {
	name: 'Bitcamp 2024 - PeerSphere',
	description:
		'Developed a full stack web application that enables students to exchange information via video conferencing and threads.',
	thumbnail:
		'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/856/180/datas/gallery.jpg',
	role: 'Full Stack Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.PostgreSQL, Tag.Drizzle],
	start: 'April 2024',
	end: 'April 2024',
	links: [
		{ url: 'https://github.com/Jcho114/Bitcamp2024Client', label: 'Frontend' },
		{ url: 'https://github.com/Jcho114/Bitcamp2024Server', label: 'Server' }
	],
	path: 'peersphere'
};

export const vigilant: Project = {
	name: 'HoyaHacks 2024 - Vigilant',
	description:
		'Prototyped a system that utilized crowdfunded reports to visualize warfronts and trend predictions for ongoing wars.',
	thumbnail:
		'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/739/706/datas/gallery.jpg',
	role: 'Full Stack Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.Jest, Tag.MongoDB],
	start: 'January 2024',
	end: 'January 2024',
	links: [{ url: 'https://github.com/Jcho114/vigilant', label: 'Monorepo' }],
	path: 'vigilant'
};

export const csnades: Project = {
	name: 'CS2 Nades',
	description:
		'Created an educational full stack web application that stores and displays over 100 nade, flash, molotov, and smoke lineups for the video game Counter-Strike 2.',
	thumbnail: 'https://github.com/Jcho114/cs2-nades/raw/main/app/public/README/README.png',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.MongoDB],
	start: 'December 2023',
	end: 'January 2024',
	links: [{ url: 'https://github.com/Jcho114/cs2-nades', label: 'Monorepo' }],
	path: 'csnades'
};

export const josepharchitects: Project = {
	name: 'Joseph Architects Website',
	description:
		'Developed and deployed a responsive architecture company that showcases nearly 20 projects and goals.',
	thumbnail:
		'https://static.wixstatic.com/media/fcc81e_4ae32252304643e680f90b3de051acf4~mv2.jpg/v1/fit/w_2500,h_1330,al_c/fcc81e_4ae32252304643e680f90b3de051acf4~mv2.jpg',
	role: 'Freelancer',
	tags: [Tag.JavaScript, Tag.React, Tag.MySQL],
	start: 'May 2023',
	end: 'June 2023',
	links: [{ url: 'https://joseph-architects.org/', label: 'Website Link' }],
	path: 'josepharchitects'
};

export const bitcamp2023: Project = {
	name: 'Bitcamp 2023 - AI Real Estate Price Predictor',
	description:
		'Developed a full-stack web application with a team of four in 36 hours that predicts future median real estate prices in over 6000 zip codes across California through a map visualizer.',
	thumbnail:
		'https://assets.everspringpartners.com/fe/06/f23661be455e97d009c6ae418995/real-estate-finance.jpg',
	role: 'Frontend Developer',
	tags: [Tag.JavaScript, Tag.React],
	start: 'April 2023',
	end: 'April 2023',
	links: [],
	path: 'bitcamp2023'
};

const projects = [
	verisign,
	portfolio,
	appdevclub,
	gdit,
	peersphere,
	vigilant,
	csnades,
	josepharchitects,
	bitcamp2023
];

export const projectMapping = projects.reduce((acc, el) => {
	return { ...acc, [el.path]: el };
}, {});

export default projects;
