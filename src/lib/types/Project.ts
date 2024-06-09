import Tag from './Tag';
import type { Link } from './Link';

export interface Project {
	name: string;
	description: string;
	thumbnail: string;
	role: string;
	tags: Tag[];
	start: string;
	end: string;
	links: Link[];
	path: string;
}
