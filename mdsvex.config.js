import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.md', '.svx'],
	layout: {
		project: path.join(dirname, './src/lib/components/layouts/ProjectLayout.svelte')
	}
});

export default config;
