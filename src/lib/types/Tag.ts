import stringToColor from '../util/stringToColor';

enum Tag {
	JavaScript = 'JavaScript',
	TypeScript = 'TypeScript',
	Java = 'Java',
	Python = 'Python',
	React = 'React',
	Svelte = 'Svelte',
	Express = 'Express',
	FastAPI = 'FastAPI',
	Spring = 'Spring',
	Jest = 'Jest',
	Vitest = 'Vitest',
	JUnit = 'JUnit',
	Pytest = 'Pytest',
	MySQL = 'MySQL',
	PostgreSQL = 'PostgreSQL',
	MongoDB = 'MongoDB',
	Jenksins = 'Jenkins',
	GitHub_Actions = 'Github Actions',
	Drizzle = 'Drizzle'
}

export const tagColorMapping: Record<string, string> = {
	...Object.values(Tag).reduce((acc, el) => {
		return { ...acc, [el]: stringToColor(el) };
	}, {}),
	TypeScript: '#3178C6',
	Svelte: '#FF3E00',
	Vitest: '#FCC72B',
	Spring: '#6DB33F',
	Java: '#EB5B44',
	JavaScript: '#EFD81D',
	React: '#61DAFB',
	Jest: '#96737D',
	Express: '#90C53F',
	Python: '#346C99',
	FastAPI: '#059286',
	Pytest: '#C1CC02',
	MongoDB: '#4FAA41',
	PostgreSQL: '#2F6792',
	Jenkins: '#D43530',
	Github_Actions: '#1F84F7',
	Drizzle: '#C5F74F'
};

export default Tag;
