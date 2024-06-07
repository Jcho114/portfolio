import type { Project } from './types/Project';
import Tag from './types/Tag';

const portfolio: Project = {
	name: 'Portfolio',
	description: 'Personal Website that showcases my past projects and experiences.',
	thumbnail: 'https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest]
};

const projects = [
	portfolio,
	{ ...portfolio, name: 'Portfolio2' },
	{ ...portfolio, name: 'Portfolio3' }
];

export default projects;
