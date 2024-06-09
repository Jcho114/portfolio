import type { Project } from './types/Project';
import Tag from './types/Tag';

const portfolio: Project = {
	name: 'Portfolio',
	description: 'Personal Website that showcases my past projects and experiences.',
	thumbnail: 'https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest],
	start: 'June 2024',
	end: 'June 2024',
	path: 'portfolio'
};

const verisign: Project = {
	name: 'Verisign Internship',
	description: 'Finishing migration of product plugin for UI based domain registry service.',
	thumbnail:
		'https://blog.verisign.com/wp-content/uploads/VRSN_LogoThumbnail_BlogImage_202004-01.jpg',
	role: 'Undergradute Technology Intern',
	tags: [Tag.Java, Tag.Spring, Tag.JUnit, Tag.JavaScript, Tag.React, Tag.Jest],
	start: 'May 2024',
	end: 'Present',
	path: 'verisign'
};

const appdevclub: Project = {
	name: 'UMD App Dev Club Website',
	description:
		'Revamped the club website to professionally showcase club sponsors, projects, and upcoming events.',
	thumbnail: 'https://www.cs.umd.edu/sites/default/files/images/article/2024/logo_0.png',
	role: 'Student Software Engineer',
	tags: [Tag.TypeScript, Tag.Express, Tag.React, Tag.Jest, Tag.Vitest, Tag.MongoDB],
	start: 'March 2024',
	end: 'Present',
	path: 'appdevclub'
};

const gdit: Project = {
	name: 'GDIT Scavenger Hunt Application',
	description:
		'Worked as part of the UMD App Dev to build a full stack scavenger hunt application for GDIT.',
	thumbnail: '',
	role: 'Student Software Engineer',
	tags: [Tag.Python, Tag.FastAPI, Tag.Pytest, Tag.MongoDB],
	start: 'January 2024',
	end: 'May 2024',
	path: 'gdit'
};

const peersphere: Project = {
	name: 'Bitcamp 2024 - PeerSphere',
	description:
		'Developed a full stack web application that enables students to exchange information via video conferencing and threads.',
	thumbnail:
		'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/856/180/datas/gallery.jpg',
	role: 'Full Stack Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.PostgreSQL],
	start: 'April 2024',
	end: 'April 2024',
	path: 'peersphere'
};

const vigilant: Project = {
	name: 'HoyaHacks 2024 - Vigilant',
	description:
		'Prototyped a system that utilized crowdfunded reports to visualize warfronts and trend predictions for ongoing wars.',
	thumbnail:
		'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/739/706/datas/gallery.jpg',
	role: 'Full Stack Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.Express, Tag.Jest, Tag.MongoDB],
	start: 'January 2024',
	end: 'January 2024',
	path: 'vigilant'
};

const csnades: Project = {
	name: 'CS2 Nades',
	description:
		'Created an education full stack web application that stores and displays over 100 nade, flash, molotov, and smoke lineups for the video game Counter-Strike 2.',
	thumbnail: 'https://github.com/Jcho114/cs2-nades/raw/main/app/public/README/README.png',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.React, Tag.MongoDB],
	start: 'December 2023',
	end: 'January 2024',
	path: 'csnades'
};

const projects = [portfolio, verisign, appdevclub, gdit, vigilant, peersphere, csnades];

export default projects;
