import type Project from './types/Project';
import Tag from './types/Tag';

const portfolio: Project = {
	name: 'Portfolio',
	description: 'Personal Website',
	role: 'Web Developer',
	tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest]
};

const projects = [portfolio];

export default projects;
