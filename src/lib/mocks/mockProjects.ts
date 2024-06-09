import type { Project } from '../types/Project';
import Tag from '../types/Tag';

export const project: Project = {
	name: 'Portfolio',
	description: 'Created a personal website that showcases my past projects and experiences.',
	thumbnail: 'https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest, Tag.GitHub_Actions],
	start: 'June 2024',
	end: 'June 2024',
	links: [],
	path: 'portfolio'
};
