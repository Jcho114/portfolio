import Tag from './Tag';

export interface Project {
	name: string;
	description: string;
	role: string;
	tags: Tag[];
}
