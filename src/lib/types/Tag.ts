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
	Pytest = 'Pytest'
}

export const tagColorMapping: Record<string, string> = Object.values(Tag).reduce((acc, el) => {
	return { ...acc, [el]: stringToColor(el) };
}, {});

export default Tag;
