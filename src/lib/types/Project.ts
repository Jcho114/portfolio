import Tag from './Tag';

export interface Project {
	name: string;
	description: string;
	thumbnail: string;
	role: string;
	tags: Tag[];
}
